---
group:
  title: 第一期
  order: 1000
---

# XiaoMi/soar

<p>
  <a title="GitHub Watchers" target="_blank" href="https://github.com/XiaoMi/soar/watchers"><img alt="GitHub Watchers" src="https://img.shields.io/github/watchers/XiaoMi/soar.svg?label=Watchers&style=social"></a>  
  &nbsp;
  <a title="GitHub Stars" target="_blank" href="https://github.com/XiaoMi/soar/stargazers"><img alt="GitHub Stars" src="https://img.shields.io/github/stars/XiaoMi/soar.svg?label=Stars&style=social"></a>  
  &nbsp;
  <a title="GitHub Forks" target="_blank" href="https://github.com/all-contributors/XiaoMi/soar/network/members"><img alt="GitHub Forks" src="https://img.shields.io/github/forks/XiaoMi/soar.svg?label=Forks&style=social"></a>
</p>

[GitHub](https://github.com/XiaoMi/soar)

**项目分类**：Go / 数据库

## 简介

SOAR(SQL Optimizer And Rewriter) 是一个对 SQL 进行优化和改写的自动化工具。 由小米人工智能与云平台的数据库团队开发与维护，具有命令行及 Web 可视化两种操作模式。

## 未来方向

- 语法支持方面，目前主要依赖 vitess,TiDB 对 SQL 语法的支持。
- 目前仅针对 MySQL 语法族进行开发和测试，其他使用 SQL 的数据库产品暂不支持。
- Profiling 和 Trace 功能有待深入挖掘，供经验丰富的 DBA 分析使用。
- 目前尚不支持直接线上自动执行评审通过的 SQL，后续会努力支持。
- 由于暂不支持线上自动执行，因此数据备份功能也未提供。
- Vim, Sublime, Emacs 等编辑器插件支持。
- Currently, only support Chinese suggestion, if you can help us add multi-language support, it will be greatly appreciated.

## 产品对比

|              | SOAR | sqlcheck | pt-query-advisor | SQL Advisor | Inception | sqlautoreview |
| ------------ | ---- | -------- | ---------------- | ----------- | --------- | ------------- |
| 启发式建议   | ✔️   | ✔️       | ✔️               | ❌          | ✔️        | ✔️            |
| 索引建议     | ✔️   | ❌       | ❌               | ✔️          | ❌        | ✔️            |
| 查询重写     | ✔️   | ❌       | ❌               | ❌          | ❌        | ❌            |
| 执行计划展示 | ✔️   | ❌       | ❌               | ❌          | ❌        | ❌            |
| Profiling    | ✔️   | ❌       | ❌               | ❌          | ❌        | ❌            |
| Trace        | ✔️   | ❌       | ❌               | ❌          | ❌        | ❌            |
| SQL 在线执行 | ❌   | ❌       | ❌               | ❌          | ✔️        | ❌            |
| 数据备份     | ❌   | ❌       | ❌               | ❌          | ✔️        | ❌            |

## 效果截图

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f4cb5907be4d4062a002cea304d70fbe~tplv-k3u1fbpfcp-zoom-1.image)

## 推荐理由

1. 跨平台支持（支持 Linux, Mac 环境，Windows 环境理论上也支持，不过未全面测试）。
2. 目前只支持 MySQL 语法族协议的 SQL 优化。
3. 支持基于启发式算法的语句优化。
4. 支持复杂查询的多列索引优化（UPDATE, INSERT, DELETE, SELECT）。
5. 支持 EXPLAIN 信息丰富解读。
6. 支持 SQL 指纹、压缩和美化。
7. 支持同一张表多条 ALTER 请求合并。
8. 支持自定义规则的 SQL 改写。
