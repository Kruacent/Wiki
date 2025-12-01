const path = require('path');
const fs = require('fs');
const matter = require('gray-matter');
const glob = require('fast-glob');

module.exports = function (context, options) {
  const maxDisplayedArticles = 6;

  return {
    name: 'custom-latest-docs-plugin',

    async loadContent() {
      const files = await glob('docs/**/*.{md,mdx}', {
        cwd: context.siteDir,
        ignore: ['**/node_modules/**']
      });

      const articles = files.map((file) => {
        const filePath = path.join(context.siteDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data } = matter(fileContent);

        if (!data.date) return null;

        const pathParts = file.split('/');
        const category = pathParts.length > 1 ? pathParts[pathParts.length - 2] : 'Uncategorized';

        return {
          title: data.title || 'Sans titre',
          link: '/' + file.replace(/\.(md|mdx)$/, '').replace('/index', ''),
          excerpt: data.description || 'Aucune description disponible.',
          date: new Date(data.date),
          category: category,
        };
      }).filter(Boolean);

      articles.sort((a, b) => b.date - a.date);

      return articles.slice(0, maxDisplayedArticles);
    },

    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;
      setGlobalData(content);
    },
  };
};