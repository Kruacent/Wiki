// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kruaçent',
  tagline: "",
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://teamcroissant.fr',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Kruaçent', // Usually your GitHub org/user name.
  projectName: 'Wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

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
            label: 'Nos Plugins',
            position: 'left',
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
          {
            label: 'Historique des Rounds',
            to: '/round-history',
            position: 'left',
          },
          {
            label: 'Vidéos',
            to: '/videos',
            position: 'left',
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
