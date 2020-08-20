---
title: 开源卡片
nav:
  title: 开源卡片
  order: 89
---

```jsx | inline
import React from 'react';
import StaticCard from '../../components/staticCard.jsx';

export default () => {
  const tagList = ['vue', 'ui-design'];
  const repo = {
    title: 'element-ui',
    avatar: '',
    description: '测试卡片',
    watching: 100,
    stars: 100,
    fork: 100,
  };
  return <StaticCard repo={repo} tagList={tagList} />;
};
```
