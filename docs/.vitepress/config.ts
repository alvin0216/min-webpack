import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'Webpack',
  description: 'Vite & Vue powered static site generator.',
  lastUpdated: true,
  base: '/min-webpack/',

  themeConfig: {
    repo: 'alvin0216/min-webpack',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    sidebar: {
      '/': getGuideSidebar(),
    },
  },
});

function getGuideSidebar() {
  return [
    {
      text: 'Webpack',
      children: [
        { text: '实现 Min Webpack', link: '/' },
        { text: 'loader', link: '/loader' },
      ],
    },
  ];
}
