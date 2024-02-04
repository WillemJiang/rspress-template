import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  markdown: {
    checkDeadLinks: true,
  },
  root: path.join(__dirname, 'docs'),
  title: 'template-site',
  lang: 'en',
  description: 'Rspack-based Static Site Generator template',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  builderConfig: {
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/willemJiang/rspress-template/' },
    ],
    locales: [
      {
        lang: 'zh',
        label: '简体中文',
        editLink: {
          docRepoBaseUrl:
            'https://github.com/willemJiang/rspress-template/tree/main/docs',
          text: '📝 在 GitHub 上编辑此页',
        },
        prevPageText: '上一篇',
        nextPageText: '下一篇',
        outlineTitle: '目录',
      },
      {
        lang: 'en',
        label: 'English',
        editLink: {
          docRepoBaseUrl:
            'https://github.com/willemJiang/rspress-template/tree/main/docs',
          text: '📝 Edit this page on GitHub',
        },
      },
    ],
  },
});
