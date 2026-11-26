// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkGlossary from './src/plugins/remark-glossary.js';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kruaçent',
  tagline: "",
  favicon: 'img/logo.png',

  url: 'https://wiki.teamcroissant.fr', 
  baseUrl: '/',
  organizationName: 'Kruacent',
  projectName: 'Wiki',
  trailingSlash: false,

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['fr', 'en'],
        docsRouteBasePath: 'docs',
        blogDir: './patchnotes',
        blogRouteBasePath: 'patchnotes',
        indexBlog: true,
        highlightSearchTermsOnTargetPage: true,
        searchBarShortcutHint: true,
        searchResultLimits: 10,

      },
    ],
  ],

  plugins: [
    './src/plugins/latest-docs-plugin.js',
    './src/plugins/og-images-plugin.js',
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'patchnotes',
        routeBasePath: 'patchnotes',
        path: './patchnotes',
        blogTitle: 'Patchnotes Kruaçent',
        blogSidebarTitle: 'Toutes les mises à jour',
        blogSidebarCount: 'ALL',
        showReadingTime: false,
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          async sidebarItemsGenerator({ defaultSidebarItemsGenerator, ...args }) {
            const items = await defaultSidebarItemsGenerator(args);
            const sansIndex = (list) =>
              list
                .filter((item) => !(item.type === 'doc' && /(^|\/)index$/.test(item.id)))
                .map((item) => (item.type === 'category' ? { ...item, items: sansIndex(item.items) } : item));
            return sansIndex(items);
          },
          editUrl: 'https://github.com/Kruacent/Wiki/edit/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          remarkPlugins: [remarkGlossary],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Image affichée quand on partage un lien du wiki (générée par og-images-plugin).
      image: 'img/og/default.png',
      navbar: {
        title: 'Kruaçent',
        logo: {
          alt: 'Kruaçent Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            label: 'Kruaçent-Exiled',
            to: '/docs/kruacent-exiled/',
          },
          {
            label: 'Succès',
            to: '/SAF',
          },
          {
            label: 'Patchnotes',
            to: '/patchnotes/',
          },
          {
            label: 'Médias',
            to: '/medias',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
           
      footer: {
        style: 'dark',
        logo: {
          alt: 'Kruaçent Logo',
          src: 'img/logo.png',
          width: 100, 
          height: 100,
        },
        links: [
          {
            title: 'Réseaux Sociaux',
            items: [
              { label: 'GitHub', href: 'https://github.com/Kruacent/' },
              { label: 'Twitch', href: 'https://twitch.tv/teamkruacent/' },
              { label: 'YouTube', href: 'https://youtube.com/@Kruacent' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Kruaçent. Tous droits réservés.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),      
};

export default config;
