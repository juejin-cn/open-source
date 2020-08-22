---
title: 开源卡片
nav:
  title: 开源卡片
  order: 89
---

```jsx | inline
import React from 'react';
import Card from '../../components/blackboard.jsx';

export default () => {
  return <Card user="juejin-im" repo="open-source" />;
};
```

```jsx | inline
import React from 'react';
import Card from '../../components/blackboard.jsx';

export default () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      <Card user="juejin-im" repo="open-source" />
      <Card user="juejin-im" repo="open-source" />
      <Card user="juejin-im" repo="open-source" />
      <Card user="juejin-im" repo="open-source" />
    </div>
  );
};
```
