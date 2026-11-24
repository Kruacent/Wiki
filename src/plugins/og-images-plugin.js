const path = require('path');
const fs = require('fs');
const matter = require('gray-matter');
const glob = require('fast-glob');
const { Resvg } = require('@resvg/resvg-js');

/**
 * Génère les images de partage (Open Graph) du wiki dans static/img/og/ :
 * - default.png : l'image par défaut de tout le site ;
 * - <slug>.png : une image par patchnote, avec le numéro de version en grand.
 *
 * Les images sont recréées à chaque lancement du site ou du build : il suffit
 * d'ajouter une patchnote pour que son image existe.
 */

const WIDTH = 1200;
const HEIGHT = 630;
const GREEN = '#25c2a0';
const MONTHS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

function escapeXml(text) {
  return String(text).replace(/[<>&'"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' }[c]));
}

function frenchDate(isoDay) {
  const [y, m, d] = isoDay.split('-').map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

/** Fond commun : noir verdâtre, grille discrète, logo et bandeau du bas. */
function frame(logoDataUri, content) {
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" stroke-opacity="0.04" stroke-width="1"/>
    </pattern>
    <radialGradient id="glow" cx="85%" cy="10%" r="70%">
      <stop offset="0%" stop-color="${GREEN}" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="${GREEN}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="#0d110f"/>
  <rect width="100%" height="100%" fill="url(#grid)"/>
  <rect width="100%" height="100%" fill="url(#glow)"/>
  <rect x="0" y="0" width="12" height="${HEIGHT}" fill="${GREEN}"/>
  <image x="80" y="70" width="88" height="88" xlink:href="${logoDataUri}"/>
  <text x="190" y="108" font-family="DejaVu Sans, Segoe UI, Arial, sans-serif" font-size="34" font-weight="700" fill="#ffffff">Kruaçent</text>
  <text x="190" y="146" font-family="DejaVu Sans Mono, Consolas, monospace" font-size="20" letter-spacing="3" fill="#8fa596">WIKI · SCP: SECRET LABORATORY</text>
  ${content}
  <line x1="80" y1="${HEIGHT - 90}" x2="${WIDTH - 80}" y2="${HEIGHT - 90}" stroke="#ffffff" stroke-opacity="0.12"/>
  <text x="80" y="${HEIGHT - 48}" font-family="DejaVu Sans Mono, Consolas, monospace" font-size="22" fill="#8fa596">wiki.teamcroissant.fr</text>
</svg>`;
}

function defaultCard(logo) {
  return frame(
    logo,
    `<text x="80" y="330" font-family="DejaVu Sans, Segoe UI, Arial, sans-serif" font-size="76" font-weight="800" fill="#ffffff">Le wiki du serveur</text>
  <text x="80" y="420" font-family="DejaVu Sans, Segoe UI, Arial, sans-serif" font-size="76" font-weight="800" fill="${GREEN}">Kruaçent</text>
  <text x="${WIDTH - 80}" y="${HEIGHT - 48}" text-anchor="end" font-family="DejaVu Sans, Segoe UI, Arial, sans-serif" font-size="22" fill="#8fa596">Rôles · Objets · Global Events · Lore</text>`,
  );
}

function patchnoteCard(logo, { version, date, tags }) {
  const chips = [];
  let x = 80;
  for (const tag of tags.slice(0, 5)) {
    const label = escapeXml(tag);
    const width = 24 + label.length * 13;
    chips.push(
      `<rect x="${x}" y="452" width="${width}" height="40" rx="20" fill="#ffffff" fill-opacity="0.08" stroke="#ffffff" stroke-opacity="0.18"/>` +
        `<text x="${x + width / 2}" y="479" text-anchor="middle" font-family="DejaVu Sans Mono, Consolas, monospace" font-size="20" fill="#d6e2da">${label}</text>`,
    );
    x += width + 12;
  }

  return frame(
    logo,
    `<text x="80" y="250" font-family="DejaVu Sans Mono, Consolas, monospace" font-size="26" letter-spacing="6" fill="${GREEN}">NOTES DE MISE À JOUR</text>
  <text x="72" y="410" font-family="DejaVu Sans, Segoe UI, Arial, sans-serif" font-size="190" font-weight="800" letter-spacing="-6" fill="#ffffff"><tspan fill="${GREEN}">V</tspan>${escapeXml(version)}</text>
  ${chips.join('\n  ')}
  <text x="${WIDTH - 80}" y="${HEIGHT - 48}" text-anchor="end" font-family="DejaVu Sans, Segoe UI, Arial, sans-serif" font-size="24" fill="#d6e2da">${escapeXml(date)}</text>`,
  );
}

function render(svg, file) {
  const png = new Resvg(svg, {
    fitTo: { mode: 'width', value: WIDTH },
    font: { loadSystemFonts: true, defaultFontFamily: 'DejaVu Sans' },
  })
    .render()
    .asPng();
  fs.writeFileSync(file, png);
}

module.exports = function ogImagesPlugin(context) {
  return {
    name: 'og-images-plugin',

    async loadContent() {
      const outDir = path.join(context.siteDir, 'static', 'img', 'og');
      fs.mkdirSync(outDir, { recursive: true });

      const logoPath = path.join(context.siteDir, 'static', 'img', 'logo.png');
      const logo = `data:image/png;base64,${fs.readFileSync(logoPath).toString('base64')}`;

      render(defaultCard(logo), path.join(outDir, 'default.png'));

      const files = await glob('patchnotes/*.{md,mdx}', { cwd: context.siteDir });
      for (const file of files) {
        const { data } = matter(fs.readFileSync(path.join(context.siteDir, file), 'utf-8'));
        const day = path.basename(file).match(/^(\d{4}-\d{2}-\d{2})/);
        if (!day) continue;
        const slug = data.slug || path.basename(file).replace(/\.(md|mdx)$/, '');
        render(
          patchnoteCard(logo, {
            version: (data.title || slug).replace(/^Version\s*/i, ''),
            date: frenchDate(day[1]),
            tags: data.tags || [],
          }),
          path.join(outDir, `${slug}.png`),
        );
      }
    },
  };
};
