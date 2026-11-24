const path = require('path');
const fs = require('fs');
const matter = require('gray-matter');
const glob = require('fast-glob');

/**
 * Fournit à la page d'accueil :
 * - les derniers articles du wiki (pages avec un champ `date`) ;
 * - les patchnotes, de la plus récente à la plus ancienne.
 */
module.exports = function (context, options) {
  const maxDisplayedArticles = 6;

  async function loadArticles() {
    const files = await glob('docs/**/*.{md,mdx}', {
      cwd: context.siteDir,
      ignore: ['**/node_modules/**'],
    });

    const articles = files
      .map((file) => {
        const fileContent = fs.readFileSync(path.join(context.siteDir, file), 'utf-8');
        const { data } = matter(fileContent);
        if (!data.date) return null;

        const pathParts = file.split('/');
        const category = pathParts.length > 1 ? pathParts[pathParts.length - 2] : 'Uncategorized';

        return {
          title: data.title || 'Sans titre',
          link: '/' + file.replace(/\.(md|mdx)$/, '').replace('/index', ''),
          excerpt: data.description || 'Aucune description disponible.',
          date: new Date(data.date).toISOString(),
          category,
        };
      })
      .filter(Boolean);

    articles.sort((a, b) => new Date(b.date) - new Date(a.date));
    return articles.slice(0, maxDisplayedArticles);
  }

  async function loadPatchnotes() {
    const files = await glob('patchnotes/*.{md,mdx}', { cwd: context.siteDir });

    const patchnotes = files
      .map((file) => {
        const fileContent = fs.readFileSync(path.join(context.siteDir, file), 'utf-8');
        const { data, content } = matter(fileContent);
        const match = path.basename(file).match(/^(\d{4}-\d{2}-\d{2})/);
        if (!match) return null;

        const slug = data.slug || path.basename(file).replace(/\.(md|mdx)$/, '');
        return {
          title: data.title || slug,
          version: (data.title || '').replace(/^Version\s*/i, ''),
          link: `/patchnotes/${slug}`,
          date: new Date(match[1]).toISOString(),
          tags: data.tags || [],
          // Nombre de lignes de changements, pour un petit résumé visuel.
          changes: (content.match(/^\s*[-*]\s+/gm) || []).length,
          // Chaque ligne de changement, avec la section dont elle fait partie,
          // pour l'historique affiché en bas des pages du wiki.
          lines: extractLines(content),
        };
      })
      .filter(Boolean);

    patchnotes.sort((a, b) => new Date(b.date) - new Date(a.date));
    return patchnotes;
  }

  /** Lignes de changements d'une patchnote : { section, text } en texte brut. */
  function extractLines(content) {
    const lines = [];
    let section = '';
    for (const raw of content.split(/\r?\n/)) {
      const heading = raw.match(/^##\s+(.+?)\s*:?\s*$/);
      if (heading && !raw.startsWith('###')) {
        section = heading[1].replace(/\s*:$/, '');
        continue;
      }
      const item = raw.match(/^\s*[-*]\s+(.+)$/);
      if (!item) continue;
      const text = item[1]
        .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
        .replace(/[*_`]/g, '')
        .trim();
      if (text) lines.push({ section, text });
    }
    return lines;
  }

  /** Pages du wiki qui affichent déjà l'historique à un endroit choisi. */
  async function loadPagesWithBanner() {
    const files = await glob('docs/**/*.{md,mdx}', { cwd: context.siteDir });
    return files.filter((file) =>
      /<Patch[Nn]ote[Bb]anner/.test(fs.readFileSync(path.join(context.siteDir, file), 'utf-8')),
    );
  }

  /** Nombre de pages par catégorie du wiki (hors pages d'index). */
  async function loadCounts() {
    const files = await glob('docs/kruacent-exiled/*/**/*.{md,mdx}', { cwd: context.siteDir });
    const counts = {};
    for (const file of files) {
      if (/\/index\.mdx?$/.test(file)) continue;
      const category = file.split('/')[2];
      counts[category] = (counts[category] || 0) + 1;
    }
    return counts;
  }

  return {
    name: 'custom-latest-docs-plugin',

    async loadContent() {
      return {
        articles: await loadArticles(),
        patchnotes: await loadPatchnotes(),
        counts: await loadCounts(),
        pagesWithBanner: await loadPagesWithBanner(),
      };
    },

    async contentLoaded({ content, actions }) {
      actions.setGlobalData(content);
    },
  };
};
