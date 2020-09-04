import { defineConfig } from 'dumi';
export default defineConfig({
  title: 'open-source',
  favicon: 'https://b-gold-cdn.xitu.io/favicons/v2/favicon.ico',
  logo: 'https://juejin-im.github.io/open-source/logo.png',
  mode: 'site',
  base: '/open-source',
  publicPath: '/open-source/',
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  styles: [
    `.__dumi-default-navbar { box-shadow: none !important; border-bottom: 1px solid #ebedf1 !important; }`,
  ],
  theme: {
    '@c-primary': '#0876e4',
  },
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  navs: [
    null,
    { title: 'GitHub', path: 'https://github.com/juejin-im/open-source' },
  ],
  // menus: {
  //   '/periodical': [
  //     {
  //       title: '第二期',
  //       children: ['periodical/Cesiumjs'],
  //     },
  //     {
  //       title: '第一期',
  //       children: [
  //         'periodical/Cube-UI',
  //         'periodical/Husky',
  //         'periodical/Remaxjs',
  //         'periodical/Soar',
  //         'periodical/Yapi',
  //       ],
  //     },
  //   ],
  // },
});
