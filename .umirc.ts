import { defineConfig } from 'dumi';
export default defineConfig({
  title: 'open-source',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  mode: 'site',
  base: '/open-source',
  publicPath: '/open-source/',
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  styles: [
    `.__dumi-default-navbar { box-shadow: none !important; border-bottom: 1px solid #ebedf1 !important; }`,
  ],
});
