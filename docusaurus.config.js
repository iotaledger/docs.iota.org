/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'IOTA Developer Documentation',
  tagline: 'A collection of all IOTA Documentation Pages',
  url: 'https://docs.iota.org/',
  baseUrl: '/docs.iota.org/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/logo/favicon.ico',
  organizationName: 'iotaledger', // Usually your GitHub org/user name.
  projectName: 'docs.iota.org', // Usually your repo name.
  stylesheets: [
    'http://v2202102141633143571.bestsrv.de/assets/css/styles.c88dfa6b.css',
    'https://fonts.googleapis.com/css?family=Material+Icons',
  ],
  themeConfig: {
      colorMode: {
        defaultMode: "dark"
      },
      navbar: {
        title: 'IOTA Documentation',
        logo: {
          alt: 'IOTA',
          src: '/img/logo/Logo_Swirl_Dark.png',
        },
      items: [
        {
          type: 'doc',
          docId: 'writer-guide',
          position: 'right',
          label: 'Guides',
        },
        {
          to: '/team',
          position: 'right',
          label: 'Team',
        },
        { to: '/blog', label: 'Blog', position: 'right' },
        {
          href: 'https://github.com/iotaledger',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Writer Guide',
              to: '/docs/writer-guide',
            },
            {
              label: 'Docs Culture',
              to: '/docs/culture',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.iota.org',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/iota',
            }, {
              label: 'Stack Exchange',
              href: 'https://iota.stackexchange.com/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/iotaledger/docs.iota.org',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/iotaledger/docs.iota.org/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/iotaledger/docs.iota.org/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/iota.css'),
        },
      },
    ],
  ],
};
