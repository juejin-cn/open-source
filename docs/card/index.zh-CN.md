---
title: 开源卡片
nav:
  title: 开源卡片
  order: 100
---

```jsx | inline
import React from 'react';
import CardList from '../../components/CardList.jsx';
import repos from './repos.js';

export default () => {
  return <CardList repos={repos} />;
};
```
