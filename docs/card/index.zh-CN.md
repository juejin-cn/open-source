---
title: 开源卡片
nav:
  title: 开源卡片
  order: 100
---

```jsx | inline
import React from 'react';
import Card from '../../components/staticCard.jsx';

export default () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      <Card
        repo={{
          watching: 220,
          stars: '8.3k',
          fork: '1.4k',
          avatar: 'https://avatars0.githubusercontent.com/u/27521938?s=200&v=4',
          title: 'didi/cube-ui',
          description: 'A fantastic mobile ui lib implement by Vue',
          tagList: ['vue', 'vue-components', 'vue-ui', 'javascript'],
        }}
      />
      <Card
        repo={{
          watching: 282,
          stars: '6.5k',
          fork: 956,
          avatar: 'https://avatars0.githubusercontent.com/u/1309360?s=200&v=4',
          title: 'XiaoMi/soar',
          description: 'SQL Optimizer And Rewriter',
          tagList: ['sql', 'mysql', 'command-line', 'database', 'syntax'],
        }}
      />
      <Card
        repo={{
          watching: 495,
          stars: '17.5k',
          fork: '2.9k',
          avatar: 'https://avatars2.githubusercontent.com/u/19645609?s=200&v=4',
          title: 'YMFE/yapi',
          description:
            'YApi 是一个可本地部署的、打通前后端及QA的、可视化的接口管理平台',
          tagList: ['api', 'api-manager', 'api-test'],
        }}
      />
      <Card
        repo={{
          watching: 60,
          stars: '3.1k',
          fork: 224,
          avatar: 'https://avatars1.githubusercontent.com/u/52283515?s=200&v=4',
          title: 'remaxjs/remax',
          description: '使用真正的 React 构建跨平台小程序',
          tagList: ['react', 'reactjs', 'miniprogram', 'wechat-mini-program'],
        }}
      />
      <Card
        repo={{
          watching: 147,
          stars: '20.1k',
          fork: 704,
          avatar:
            'https://avatars1.githubusercontent.com/u/5502029?s=400&u=775f8ac3302e61c2c1fcb75894cc9a2c27c8f24a&v=4',
          title: 'typicode/husky',
          description: 'Git hooks made easy 🐶 woof!',
          tagList: ['git', 'hooks'],
        }}
      />
    </div>
  );
};
```
