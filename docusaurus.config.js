// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kruaçent',
  tagline: "",
  favicon: 'img/logo.png',

  url: 'https://Kruacent.github.io', 
  baseUrl: '/wiki/',
  organizationName: 'Kruacent',
  projectName: 'wiki',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    './src/plugins/latest-docs-plugin.js',
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
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
            label: 'ServerAchievementFramework',
            to: '/docs/server-achievement-framework/',
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
