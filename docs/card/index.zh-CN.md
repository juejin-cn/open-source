---
title: 开源卡片
nav:
  title: 开源卡片
  order: 89
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
          watching: 17,
          stars: 205,
          fork: 16,
          avatar: 'https://avatars3.githubusercontent.com/u/69633008?s=200&v=4',
          title: 'juejin-im/open-source',
          description: '🏆 寻找你最值得关注的开源库',
          tagList: ['juejin', 'open-source'],
        }}
      />
    </div>
  );
};
```
