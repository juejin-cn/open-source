---
group:
  title: 第一期
  order: 1000
---

# Husky

<p>
<a title="GitHub Watchers" target="_blank" href="https://github.com/typicode/husky/watchers"><img alt="GitHub Watchers" src="https://img.shields.io/github/watchers/typicode/husky.svg?label=Watchers&style=social"></a>  
&nbsp;
<a title="GitHub Stars" target="_blank" href="https://github.com/typicode/husky/stargazers"><img alt="GitHub Stars" src="https://img.shields.io/github/stars/typicode/husky.svg?label=Stars&style=social"></a>  
&nbsp;
<a title="GitHub Forks" target="_blank" href="https://github.com/all-contributors/typicode/husky/network/members"><img alt="GitHub Forks" src="https://img.shields.io/github/forks/typicode/husky.svg?label=Forks&style=social"></a>
</p>

[Github](https://github.com/typicode/husky)

**项目分类**：JavaScript / 实用工具

## 简介

husky，你没有看错，它就叫哈士奇 🐶

husky 是一个 Git Hook 工具

## 作用

husky 的作用相信在简介中就已经看到了，可能你并不理解它能为我们解决什么样的痛点

例如在我们进行团队协作时，每个人的代码风格不同，我们常常会使用编译器自动格式化自己喜欢的代码风格，但是再次提交代码时，由于与他人的风格不同，每次提交都会有很多更改，而这些更改都是代码风格上的更改，是没有必要的

也有的时候我们在代码提交前误删了一个逗号，但是自己并不知情就提交上去了，团队其他小伙伴并不知情，这是其他小伙伴拉下代码时就会报错

还有的时候团队中制定了 `commit` 规范，但是有小伙伴并不严格执行，就会造成后期一系列的麻烦事情

这个时候，就极度体现出了 `husky` 的作用，安装 `husky` 的时候，`husky` 会根据 package.json 里的配置，在 `.git/hooks` 目录生成 [所有](https://git-scm.com/docs/githooks) 的 `hook` 脚本（如果你已经自定义了一个 `hook` 脚本，`husky` 也不会覆盖它）

配合其他一些工具，它可以严格为我们把控这些问题，让我们的工作流更加规范、更加完善

## 推荐理由

- husky 十分简单，容易上手
- 它继承了 Git 下所有的钩子，在触发钩子的时候，husky 可以阻止不合法的 commit、push 等等
- 配合 [prettier](https://github.com/prettier/prettier) 工具，可以在代码提交前自动格式化代码
- 配合 [eslint](https://github.com/eslint/eslint) 工具，可以在代码提交前进行语法检测
- 配合 [commitlint](https://github.com/conventional-changelog/commitlint) 工具，可以在代码提交前检验 commit message 是否规范
- 配合 [lint-staged](https://github.com/okonet/lint-staged) 工具，可以只检查 staged 文件，从而提高效率
