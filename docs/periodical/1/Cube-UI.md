---
nav:
  title: 期刊
  order: 100
group:
  title: 第一期
  order: 1000
---

# Cube-UI

<p>
  <a title="GitHub Watchers" target="_blank" href="https://github.com/didi/cube-ui/watchers"><img alt="GitHub Watchers" src="https://img.shields.io/github/watchers/didi/cube-ui.svg?label=Watchers&style=social"></a>  
  &nbsp;
  <a title="GitHub Stars" target="_blank" href="https://github.com/didi/cube-ui/stargazers"><img alt="GitHub Stars" src="https://img.shields.io/github/stars/didi/cube-ui.svg?label=Stars&style=social"></a>  
  &nbsp;
  <a title="GitHub Forks" target="_blank" href="https://github.com/all-contributors/didi/cube-ui/network/members"><img alt="GitHub Forks" src="https://img.shields.io/github/forks/didi/cube-ui.svg?label=Forks&style=social"></a>
</p>

[GitHub](https://github.com/didi/cube-ui) | [官方文档](https://didi.github.io/cube-ui/#/zh-CN/docs/introduction)

**项目分类**：UI 组件库 / 移动端

## 简介

Cube-UI 基于 Vue.js 实现的精致移动端组件库。2017 年 11 月 8 日消息，滴滴出行又开源了第二个项目 —— 基于 Vue.js 实现的移动端组件库 cube-ui ，宣布开源 Web 移动端组件库 cube-ui，该技术拥有质量可靠、体验极致、标准规范和强扩展性这四大特点，并拥有独特的后编译技术方案帮助大幅优化性能。

## 特性

<table border="0" width="100%">
  <tbody>
    <tr>
      <td width="25%" align="center">
        <img src="./1.asstes/zlkk.png" width="90px"/><br>质量可靠<br>Quality
      </td>
      <td width="25%" align="center">
        <img src="./1.asstes/tyjz.png" width="90px"/><br>体验极致<br>Experience
      </td>
      <td width="25%" align="center">
        <img src="./1.asstes/bzgf.png" width="90px"/><br>标准规范<br>Standard
      </td>
      <td width="25%" align="center">
        <img src="./1.asstes/kzxq.png" width="90px"/><br>扩展性强<br>Scalability
      </td>
    </tr>
    <tr>
      <td>由滴滴内部组件库精简提炼而来，历经考验，并且每个组件都有充分单元测试，为后续集成提供保障。</td>
      <td>以迅速响应、动画流畅、接近原生为目标，在交互体验方面追求极致。</td>
      <td>遵循统一的设计交互标准，高度还原设计效果；接口标准化，统一规范使用方式，开发更加简单高效。</td>
      <td>支持按需引入和后编译，轻量灵活；扩展性强，可以方便地基于现有组件实现二次开发。</td>
    </tr>
  </tbody>
</table>

## 组件介绍

<table border="0" width="100%">
  <thead>
    <tr>
      <th width="50%" align="left">基础</th>
      <th width="50%" align="center">展示(Button)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <p>
          Button 按钮<br>
          按钮，提供了各种类型、样子、状态以及图标。
        </p>
        <p>
          Loading 加载中<br>
          加载，提供了可自定义大小的加载动画。
        </p>
        <p>
          Tip 提示<br>
          提示，用于弹出提示气泡框。
        </p>
        <p>
          Toolbar 工具条<br>
          工具栏，可以组合多个按钮，复选框操作为一个工具栏。(v 1.9.0 新增)
        </p>
        <p>
          TabBar 选项卡<br>
          选项卡。(v 1.10.0 新增)
        </p>
      </td>
      <td>
        <img src="./1.asstes/demo-view-1.png">
      </td>
      </tr>
   </tbody>
</table>

<table border="0" width="100%">
  <thead>
    <tr>
      <th width="50%" align="center">展示(CheckboxGroup)</th>
      <th width="50%" align="left">表单</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img src="./1.asstes/demo-view-2.png">
      </td>
      <td>      
        <p>
          Checkbox 复选框<br>
          复选框，可设置其状态、传入特殊 class 以及复选框图标位置。
        </p>
        <p>
          CheckboxGroup 复选框组<br>
          复选框组就是一组复选框，主要用来选择一组可选项；有垂直和水平两种样式。
        </p>
        <p>
          Radio 单选框<br>
          单选框组，可设置单选框组内容，样式等。(v 1.4.0 新增)
        </p>
        <p>
          Input 输入框<br>
          输入框组件。支持使用v-model对数据双向绑定，支持一键清空内容。(v 1.5.0 新增)
        </p>
        <p>
          Textarea<br>
          多行输入框组件，支持使用v-model对数据双向绑定，根据是否有内容、是否聚焦有折叠、展开两种状态。(v 1.5.0 新增)
        </p>
        <p>
          Select 选择<br>
          Select 组件，用于单项选择。注： 由于此组件依赖 Picker 组件
        </p>
        <p>
          Switch 开关切换<br>
          滑动开关，用于切换 on/off 状态。(v 1.4.0 新增)
        </p>
        <p>
          Rate 评级<br>
          评分组件。你可以自定义星星个数，可以禁用交互，以用作评价展示，可以通过插槽自定义星星样式。(v 1.5.0 新增)
        </p>
        <p>
          Validator 校验器<br>
          校验器，用于对表单进行验证，并提示相应的错误信息。(v 1.5.0 新增)
        </p>
        <p>
          Upload 上传<br>
          Upload 上传组件。(v 1.3.0 新增)
        </p>
        <p>
          Form 表单<br>
          表单，包含各种输入组件以及对应的校验；我们可以通过数据驱动的方式来生成完成表单。(v 1.7.0 新增)<br>
          从 1.8.0 开始支持blur 时才触发校验以及 debounce，同 Validator 一样也开始支持异步校验。
        </p>
      </td>
      </tr>
  </tbody>
</table>

<table border="0" width="100%">
  <thead>
    <tr>
      <th width="50%" align="left">弹层</th>
      <th width="50%" align="center">展示(Popup)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <p>注： 以下组件都是基于 create-api 实现，所以在使用之前，请确保自己了解过 create-api。</p>
        <p>
          Popup<br>
          底层弹层组件，主要用于基于此组件实现上层组件封装，只提供了基础功能：指定类型、是否有背景层、显示内容（HTML）以及是否居中。
        </p>
        <p>
          Toast 提醒<br>
          Toast组件主要用于非模态信息提醒，无需用户交互。
        </p>
        <p>
          Picker 选择器<br>
          Picker 组件也就是选择器，可以用于实现单列或多列选项的选择。
        </p>
        <p>
          CascadePicker 级联选择器<br>
          CascadePicker组件是级联选择器，用于实现多列选择之间的级联变化。
        </p>
        <p>
          DatePicker 日期选择器<br>
          日期选择器，可用于日期选择，选择粒度的灵活配置，如年月日、时分秒、年月日时分秒、年月等。
        </p>
        <p>
          TimePicker 时间选择器<br>
          TimePicker组件提供了常用的日期选择功能。
        </p>
        <p>
          SegmentPicker 段选择器<br>
          段选择器，用于实现多段的选择，比如选择时间段：2010年9月1日 - 2014年6月30日。(v 1.7.0 新增)
        </p>
        <p>
          Dialog 弹框<br>
          Dialog模态框组件，提供了多种样式及交互形式。
        </p>
        <p>
          ActionSheet 操作菜单<br>
          ActionSheet操作列表提供了两种常见的样式，灵活可控内容。
        </p>
        <p>
          Drawer 抽屉<br>
          抽屉，主要用来需要大范围层级进行选择的场景，一般情况下应该是满屏状态。
        </p>
        <p>
          ImagePreview 图片预览<br>
          图片预览，支持切换、放大缩小等能力。(v 1.10.0 新增)
        </p>
      </td>
      <td>
        <img src="./1.asstes/demo-view-3.png">
      </td>
      </tr>
  </tbody>
</table>

<table border="0" width="100%">
  <thead>
    <tr>
      <th width="50%" align="left">展示(Swipe)</th>
      <th width="50%" align="center">滚动</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img src="./1.asstes/demo-view-4.png">
      </td>
      <td>
        <p>是一个基于better-scroll进行封装的组件。</p>
        <p>
          Scroll 滚动<br>
          滚动列表，提供了优质的原生滚动体验，便捷的配置项和事件。
        </p>
        <p>
          Slide 幻灯片<br>
          轮播图，提供了常见的轮播及 swipe 的功能。
        </p>
        <p>
          IndexList 索引列表<br>
          索引列表，提供了列表索引的功能。
        </p>
        <p>
          Swipe 滑块<br>
          滑块组件，提供类似微信列表左滑功能，可以方便地对列表项做一些功能操作。(v 1.5.0 新增)
        </p>
        <p>
          Sticky 吸附<br>
          吸附组件，当滚动位置到达目标元素位置后，目标元素就会自动吸附。
        </p>
        <p>
          ScrollNavBar 滚动导航条<br>
          滚动导航条组件，效果类似于滴滴打车业务线切换。(v 1.10.0 新增)
        </p>
        <p>
          ScrollNav 滚动导航<br>
          滚动导航组件。(v 1.10.0 新增)
        </p>
        <p>
          TabBar 选项卡<br>
          选项卡。(v 1.10.0 新增)
        </p>
      </td>
      </tr>
  </tbody>
</table>

## 推荐理由

**可快速上手**
新手教程项目：[cube-application-guide](https://github.com/cube-ui/cube-application-guide)

**自定义主题**
移动端的组件对主题定制的需求会更多，从 `cube-ui^1.0.2` 开始，通过 webpack 工具可以实现自定义主题样式。

**使用后编译**
后编译指的是应用依赖的 NPM 包并不需要在发布前编译，而是随着应用编译打包的时候一块编译。

`注： 关于后编译更详细内容可参阅` [webpack 应用编译优化之路](https://github.com/DDFE/DDFE-blog/issues/23)

> 使用 webpack + babel 开发应用越来越多，而且一般都是通过 NPM 进行包管理的，这样依赖包越来越多，这些依赖包也是使用的 ES2015+ 开发的，所以每个依赖包都需要编译才能发布，这样编译后代码中往往后包含很多编译代码，所以为了消除这部分冗余，推荐大家使用后编译。
