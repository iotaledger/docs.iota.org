/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'IOTA Documentation',
  tagline: 'A Collection of all IOTA Documentation',
  url: 'https://docs.iota.org/',
  baseUrl: '/docs.iota.org/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'iotaledger', // Usually your GitHub org/user name.
  projectName: 'docs.iota.org', // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: 'IOTA Developer Documentation',
        src: 'img/logo.svg',
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
          href: 'https://github.com/facebook/docs.iota.org',
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
              href: 'https://github.com/facebook/docusaurus',
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
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
