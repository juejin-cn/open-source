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
    avatar:
      'https://user-images.githubusercontent.com/10095631/35603534-bb24470c-0678-11e8-8bcc-17ceaef8cbef.png',
    description: '测试卡片',
    watching: 100,
    stars: 100,
    fork: 100,
  };
  return <StaticCard repo={repo} tagList={tagList} />;
};
```

```jsx | inline
import React from 'react';
import StaticCard from '../../components/staticCard.jsx';

export default () => {
  const tagList = ['vue', 'ui-design'];
  const repo = {
    title: 'element-ui',
    avatar:
      'https://user-images.githubusercontent.com/10095631/35603534-bb24470c-0678-11e8-8bcc-17ceaef8cbef.png',
    description: '测试卡片',
    watching: 100,
    stars: 100,
    fork: 100,
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      <StaticCard repo={repo} tagList={tagList} />
      <StaticCard repo={repo} tagList={tagList} />
      <StaticCard repo={repo} tagList={tagList} />
      <StaticCard repo={repo} tagList={tagList} />
    </div>
  );
};
```
