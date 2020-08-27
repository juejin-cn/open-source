---
title: 开源卡片
nav:
  title: 开源卡片
  order: 100
---

```jsx | inline
import React from 'react';
import CardList from '../../components/CardList.jsx';
const repos = [
  {
    repo: 'didi/cube-ui',
    tags: ['vue', 'vue-components', 'vue-ui', 'javascript'],
  },
  {
    repo: 'XiaoMi/soar',
    tags: ['sql', 'mysql', 'command-line', 'database', 'syntax'],
  },
  { repo: 'YMFE/yapi', tags: ['api', 'api-manager', 'api-test'] },
  {
    repo: 'remaxjs/remax',
    tags: ['react', 'reactjs', 'miniprogram', 'wechat-mini-program'],
  },
  { repo: 'typicode/husky', tags: ['git', 'hooks'] },
];
export default () => {
  return <CardList repos={repos} />;
};
```
