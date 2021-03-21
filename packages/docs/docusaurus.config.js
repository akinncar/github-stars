/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Github Stars',
  tagline: 'Add tags to your favorite repositories',
  url: 'http://github-stars-akinncar.vercel.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'akinncar',
  projectName: 'github-stars',
  themeConfig: {
    navbar: {
      title: 'Github Stars',
      logo: {
        alt: 'Github Stars Logo',
        src: 'img/logo.svg'
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left'
        },
        {
          to: 'api/',
          activeBasePath: 'api',
          label: 'API Reference',
          position: 'left'
        },
        {
          href: 'https://github.com/akinncar/github-stars',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Github Stars, Inc. Built with Docusaurus.`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/akinncar/github-stars/edit/main/packages/docs'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            routePath: '/api/',
            specUrl: 'https://github-stars-api-akinncar.herokuapp.com/api-docs'
          }
        ]
      }
    ]
  ]
};
