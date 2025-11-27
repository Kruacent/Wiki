const path = require('path');
const fs = require('fs');
const matter = require('gray-matter');
const glob = require('fast-glob');

module.exports = function (context, options) {
  const maxDisplayedArticles = 6;

  return {
    name: 'custom-latest-docs-plugin',

    async loadContent() {
      console.log('--- [PLUGIN] Démarrage du scan des fichiers ---');

      const files = await glob('docs/**/*.{md,mdx}', {
        cwd: context.siteDir,
        ignore: ['**/node_modules/**']
      });

      console.log(`--- [PLUGIN] Fichiers trouvés dans docs: ${files.length} ---`);

      const articles = files.map((file) => {
        const filePath = path.join(context.siteDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data } = matter(fileContent);

        if (!data.date) {
             console.log(`[PLUGIN] Ignoré (pas de date): ${file}`);
             return null;
        }

        return {
          title: data.title || 'Sans titre',
          link: file.replace(/\.(md|mdx)$/, '').replace('/index', ''),
          excerpt: data.description || 'Aucune description disponible.',
          date: new Date(data.date),
        };
      }).filter(Boolean);

      console.log(`--- [PLUGIN] Articles valides retenus: ${articles.length} ---`);

      articles.sort((a, b) => b.date - a.date);
      return articles.slice(0, maxDisplayedArticles);
    },

    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;
      setGlobalData(content);
    },
  };
};