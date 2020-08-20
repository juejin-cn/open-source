---
title: 查看期刊
nav:
  title: 所有项目
  order: 2
---

## 测试期刊

<br/>

### all-contributors

<p>
  <a title="GitHub Watchers" target="_blank" href="https://github.com/all-contributors/all-contributors/watchers"><img alt="GitHub Watchers" src="https://img.shields.io/github/watchers/all-contributors/all-contributors.svg?label=Watchers&style=social"></a>  
  &nbsp;
  <a title="GitHub Stars" target="_blank" href="https://github.com/all-contributors/all-contributors/stargazers"><img alt="GitHub Stars" src="https://img.shields.io/github/stars/all-contributors/all-contributors.svg?label=Stars&style=social"></a>  
  &nbsp;
  <a title="GitHub Forks" target="_blank" href="https://github.com/all-contributors/all-contributors/network/members"><img alt="GitHub Forks" src="https://img.shields.io/github/forks/all-contributors/all-contributors.svg?label=Forks&style=social"></a>
</p>

**分类**：JavaScript，实用工具

**话题**：[opensource-management](https://github.com/topics/opensource-management)，[opensource](https://github.com/topics/opensource)，[all-contributors](https://github.com/topics/all-contributors)

**摘要**：这是一个用于认可开源项目贡献者的规范，不仅仅是代码，它感谢每一个贡献。

**介绍**：

该项目旨在感谢每一个辛苦付出的开发者，基本想法是使用项目 README (或者项目中其他重要的公开文档页) 来认可项目社区成员的贡献，同时提供一定的 CSS 自定义功能，可以丰富界面

项目基于`JavaScript`，`HTML`，`CSS`构建，在使用中需要预先初始化，然后进行少量的配置即可自动识别目标项目的所有贡献者，紧接着使用如下命令：

```bash
# 增加贡献者
yarn all-contributors add kkzhilu code

# 选择生成头像
yarn all-contributors
```

便可以得到如下效果：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1f82bd6078904027b0b208b2190896d9~tplv-k3u1fbpfcp-zoom-1.image)

同时它还支持自定义 CSS，进行如下配置：

```css
<a href=\"<%= contributor.profile %>\">
<img src=\"<%= contributor.avatar_url %>\" width=\"<%= options.imageSize %>px;\"
     style=\"border-radius: <%= options.imageSize %>px;\"/><br/>
</a>
```

<br/>

即可生成圆角图片，你有没有更好的奇思妙想？ ✨

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/41dbb4c7f7c24460b7b6f207a2096b61~tplv-k3u1fbpfcp-zoom-1.image)
