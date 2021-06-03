/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Gumpu Help - What can we help you with?',
  tagline: 'Help documents that every orgamization need',
  url: 'https://help.mygumpu.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Home',
      logo: {
        alt: 'Gumpu Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Articles',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Articles',
          items: [
            {
              label: 'Getting started',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'MyGumpu Portal',
              href: 'https://mygumpu.com',
            },
            {
              label: 'Admin Gumpu Portal',
              href: 'https://app.mygumpu.com',
            }
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
      copyright: `Copyright © ${new Date().getFullYear()} - MyGumpu, a product of Inqude Solutions.`,
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
