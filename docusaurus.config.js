// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kruaçent Wiki',
  tagline: "First in Pastries and Wiki",
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
        title: 'Kruaçent Wiki',
        logo: {
          alt: 'Kruaçent Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            label: 'Articles',
            to: '/docs/articles/',
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
        links: [
          {
            title: 'Link',
            items: [
              {
                label: 'Wiki GitHub',
                href: 'https://github.com/Kruacent/Wiki',
              },
              {
                label: 'Plugin GitHub',
                href: 'https://github.com/Kruacent/Kruacent-Exiled',
              },
            ],
          },
          {
            title: 'More Game',
            items: [
              {
                label: 'Lethal Company',
                href: 'https://www.curseforge.com/minecraft/modpacks/lethal-company',
              },
              {
                label: 'Minecraft',
                href: 'https://www.minecraft.net/',
              },
            ],
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
