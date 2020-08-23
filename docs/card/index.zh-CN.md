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
  return <Card repo="juejin-im/open-source" />;
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
      <Card repo="juejin-im/open-source" />
      <Card repo="juejin-im/open-source" />
      <Card repo="juejin-im/open-source" />
      <Card repo="juejin-im/open-source" />
    </div>
  );
};
```
