---
title: 项目
sidemenu: false
nav:
  order: 1
  title: 项目
---

```jsx | inline
import React from 'react';
import CardList from '../../components/CardList.jsx';
import repos from './repos.js';

export default () => {
  return <CardList repos={repos} />;
};
```
