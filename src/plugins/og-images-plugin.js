const path = require('path');
const fs = require('fs');
const matter = require('gray-matter');
const glob = require('fast-glob');
const { Resvg } = require('@resvg/resvg-js');

/**
 * Génère les images de partage (Open Graph) du wiki dans static/img/og/ :
 * - default.png : l'image par défaut de tout le site (le logo seul) ;
 * - <slug>.png : une image par patchnote : le logo et le numéro de version, rien d'autre.
 *
 * Les images sont recréées à chaque lancement du site ou du build : il suffit
 * d'ajouter une patchnote pour que son image existe.
 */

const WIDTH = 1200;
const HEIGHT = 630;
const BACKGROUND = "#000000";
const FONT = "Segoe UI, DejaVu Sans, Arial, sans-serif";

function escapeXml(text) {
  return String(text).replace(/[<>&'"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", "\"": "&quot;" }[c]));
}

/** Image par défaut : le logo, seul, au centre. */
function defaultCard(logo) {
  const size = 300;
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <rect width="100%" height="100%" fill="${BACKGROUND}"/>
  <image x="${(WIDTH - size) / 2}" y="${(HEIGHT - size) / 2}" width="${size}" height="${size}" xlink:href="${logo}"/>
</svg>`;
}

/** Image d'une patchnote : le logo et le numéro de version, rien d'autre. */
function patchnoteCard(logo, { version }) {
  const size = 220;
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <rect width="100%" height="100%" fill="${BACKGROUND}"/>
  <image x="${(WIDTH - size) / 2}" y="95" width="${size}" height="${size}" xlink:href="${logo}"/>
  <text x="${WIDTH / 2}" y="505" text-anchor="middle" font-family="${FONT}" font-size="140" font-weight="700" letter-spacing="-2" fill="#ffffff">v${escapeXml(version)}</text>
</svg>`;
}

function render(svg, file) {
  const png = new Resvg(svg, {
    fitTo: { mode: 'width', value: WIDTH },
    font: { loadSystemFonts: true, defaultFontFamily: 'Segoe UI' },
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
        if (!/^\d{4}-\d{2}-\d{2}/.test(path.basename(file))) continue;
        const slug = data.slug || path.basename(file).replace(/\.(md|mdx)$/, '');
        render(
          patchnoteCard(logo, { version: (data.title || slug).replace(/^Version\s*/i, '') }),
          path.join(outDir, `${slug}.png`),
        );
      }
    },
  };
};
