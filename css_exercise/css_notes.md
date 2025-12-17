# css学习笔记

## css编写思路

#### 一、第一步：先定「全局规则」（搭骨架，避免重复）

写 CSS 前先梳理 “所有元素都要遵守的规则”，这一步能减少后续大量重复代码，是流畅编写的基础。

#### 思考维度（按优先级）：

1. **盒模型与重置（必做）**

   - 核心问题：浏览器默认的 margin/padding 不一致，盒模型计算混乱；

   - 固定写法：

     ```css
     * {
       margin: 0;
       padding: 0;
       box-sizing: border-box; /* 统一用IE盒模型，宽高包含padding/border */
     }
     ```

   - 思考逻辑：先 “清零” 浏览器默认样式，再统一盒模型，避免后续每个元素都调边距 / 计算宽高。

2. **基础排版（字体、行高、颜色）**

   - 核心问题：不同元素的字体 / 行高混乱，阅读体验差；

   - 思考逻辑：给body定义全局基础样式，所有子元素继承，特殊元素再单独改

     ```css
     body {
       font-family: "微软雅黑", Arial, sans-serif; /* 字体优先级：系统友好→通用→兜底 */
       font-size: 16px; /* 基准字号，后续用rem/em更适配 */
       line-height: 1.6; /* 行高1.5-1.8最佳，提升可读性 */
       color: #333; /* 主文本色，避免纯黑#000 */
       background-color: #f9f9f9; /* 全局背景色，统一视觉 */
     }
     ```

3. **全局复用样式（可选）**

   - 核心问题：重复写相同的按钮 / 卡片样式；

   - 思考逻辑：提前定义通用类，后续直接复用（如居中、清除浮动）：

     ```css
     /* 通用居中类 */
     .center {
       margin: 0 auto;
       text-align: center;
     }
     /* 清除浮动类 */
     .clearfix::after {
       content: "";
       display: block;
       clear: both;
     }
      总结：全局层思考口诀
     ```

「先重置 → 定排版 → 提通用」，把 “所有元素都要遵守的规则” 先写死，后续只关注 “差异化”。

#### 二、第二步：按「页面结构」拆分模块（分区域，不混乱）

把页面拆成独立模块（导航栏、产品区、页脚），**一个模块一套样式**，避免样式互相干扰。

#### 思考维度：

1. **拆分模块（按视觉 / 功能）**

   页面常见模块：`navbar`（导航）、`header`（头部）、`main`（主体）、`footer`（页脚），每个模块用独立的类名（如 `.navbar`、`.product-section`），避免全局标签样式（如直接写 `nav { ... }`）。

   - 反例：直接写 `ul { ... }` → 所有 ul 都会受影响；
   - 正例：写 `.navbar ul { ... }` → 仅导航栏的 ul 生效。

2. **模块内布局优先（先排位置，再调样式）**

   每个模块先解决「布局」（元素怎么排），再处理「视觉」（颜色 / 阴影 / 圆角），这是最核心的流畅点 ——**布局定了，样式只是 “化妆”**。

   - 布局思考顺序：

     ① 用什么布局方式？（Flex/Grid 优先，float/position 仅特殊场景）；

     ② 元素排列方向？（横向 / 纵向，是否换行）；

     ③ 对齐方式？（水平居中 / 垂直居中，两端对齐）；

     ④ 间距？（gap/margin/padding，统一间距值如 10px/20px）。

#### 总结：模块层思考口诀

「拆模块 → 定布局（Flex/Grid）→ 调对齐 / 间距」，先把元素 “摆对位置”，再做视觉美化。

##### 三、第三步：模块内「元素细节」（填样式，有逻辑）

布局定好后，针对模块内的单个元素（如标题、按钮、图片）加样式，**按 “从外到内、从大到小” 的顺序** 写，避免混乱。

#### 思考维度（以卡片元素为例）：

| 元素     | 思考顺序（从外到内）                | 实战示例                                                     |
| -------- | ----------------------------------- | ------------------------------------------------------------ |
| 卡片容器 | 背景 → 圆角 → 阴影 → 内边距         | `background: #fff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); padding: 20px;` |
| 标题     | 字体大小 → 颜色 → 间距 → 特殊样式   | `font-size: 22px; color: #2c3e50; margin-bottom: 10px;`      |
| 文本     | 颜色 → 行高 → 间距                  | `color: #666; line-height: 1.6; margin-bottom: 15px;`        |
| 按钮     | 背景 → 文字 → 圆角 → 内边距 → hover | `background: #3498db; color: #fff; border-radius: 6px; padding: 10px 20px; transition: all 0.3s;` |

#### 关键技巧：「先静态，后交互」

先写元素默认样式，再写 hover/active 等交互样式，逻辑更清晰：

```css
/* 先写默认样式 */
.product-button {
  background: #3498db;
  color: #fff;
  padding: 10px 20px;
  border-radius: 6px;
  transition: all 0.3s; /* 提前加过渡，交互更丝滑 */
}
/* 后写交互样式 */
.product-button:hover {
  background: #2980b9;
  transform: translateY(-2px);
}
```

#### 四、第四步：「响应式适配」（补漏洞，适配不同屏幕）

写完基础样式后，最后处理 “不同屏幕的适配”，优先用「媒体查询 + 弹性布局」，避免重复写样式。

#### 思考逻辑：

1. 先定断点

   （常用断点，记下来）：

   - 移动端：`max-width: 768px`（手机）；
   - 平板：`max-width: 992px`（平板）；
   - 大屏：`min-width: 1200px`（桌面端）。

2. 只改 “需要变的样式”

   ，不要重写整个模块

   ```css
   /* 移动端适配：卡片宽度占满，间距减小 */
   @media (max-width: 768px) {
     .product-card {
       width: 100%;
       max-width: 320px; /* 限制最大宽度，避免太宽 */
       margin: 10px 0;
     }
     .product-grid {
       gap: 10px; /* 减小间距 */
     }
   }
   ```

   

#### 五、核心心法：避免 “想到哪写到哪” 的 3 个习惯

1. **先画 “脑图” 再写代码**

   写 CSS 前，在脑子里（或草稿纸）梳理：

   → 全局规则（重置 / 字体）→ 页面模块（导航 / 产品 / 页脚）→ 模块布局（Flex/Grid）→ 元素细节（背景 / 文字）→ 交互 / 响应式。

   例：你之前写的产品网格页面，脑图可以是：

   ```plaintext
   全局：重置样式 + body字体/行高
   导航栏：吸顶 + Flex布局（logo左/菜单右）+ hover样式
   产品区：Flex网格（居中+换行）+ 卡片样式（背景/阴影/按钮）
   页脚：Grid布局 + 文字样式 + 版权信息
   响应式：移动端卡片占满宽度
   ```

2. **复用＞重复**

   看到重复的样式（如多个按钮、多个卡片），先提取「通用类」，再用类复用，比如：

   ```css
   /* 通用按钮类，所有按钮复用 */
   .btn {
     padding: 10px 20px;
     border-radius: 6px;
     transition: all 0.3s;
   }
   /* 不同按钮只改颜色 */
   .btn-primary { background: #3498db; color: #fff; }
   .btn-danger { background: #e74c3c; color: #fff; }
   ```

3. **先解决 “能用”，再优化 “好看”**

   不要一开始纠结 “阴影要不要深一点”“圆角要不要 10px 还是 8px”，先把布局调对、元素显示正常，再微调视觉细节 —— 先保证功能，再追求美观。

#### 六、实战练习：用这个思路复刻你之前的产品页面

1. **全局层**：重置样式 + body 字体 / 行高 / 背景；
2. **模块层**：拆导航栏、产品区、页脚，分别定布局（导航 Flex、产品 Flex、页脚 Grid）；
3. **细节层**：给卡片加背景 / 阴影，按钮加样式，标题加颜色；
4. **适配层**：移动端卡片占满宽度，页脚 Grid 换行。





## css概念

- 网页的“化妆品”和“装修工”
- 用来控制HTML元素的外观
- 三大引入方式

## css三种写法

分别是**行内样式**、**内部样式表**、**外部样式表**

1. 行内样式（内联样式）

   核心特点

   - 直接写在 HTML 标签的`style`属性中，仅作用于当前标签；
   - 优先级最高（覆盖其他两种写法），但不利于代码复用和维护，仅适合临时样式调整。

   语法示例

   ```html
   <!-- 行内样式：仅作用于当前<p>标签 -->
   <p style="color: red; font-size: 16px; margin: 10px 0;">这是行内样式示例</p>
   
   <!-- 结合之前的可编辑div -->
   <div contenteditable="true" style="border: 1px solid #ccc; padding: 10px; width: 300px;">
       可编辑的div（行内样式美化）
   </div>
   ```

2. 内部样式表（内嵌样式）

   核心特点

   - 写在 HTML 页面的`<head>`标签内的`<style>`标签中；
   - 作用于整个当前页面，代码集中，适合单页面的样式管理，无需额外加载文件。

   语法示例

   ```html
   <!DOCTYPE html>
   <html lang="zh-CN">
   <head>
       <meta charset="UTF-8">
       <title>内部样式表示例</title>
       p{
       font-family:1px;
       }
       </style>
   </head>
   <body>
           <p>内部样式表作用于整个页面</p>
   </body>
   </html>
   ```

3. 外部样式表（外联样式）

​	核心特点

- 将 CSS 代码单独写在`.css`后缀的外部文件中，通过`<link>`标签引入 HTML 页面；
- 可被多个页面复用，利于大型项目的样式统一管理和维护，浏览器会缓存 CSS 文件，提升加载效率，是开发中最常用的方式。

步骤示例

1. 创建外部 CSS 文件（如`style.css`）

```css
/* style.css - 外部样式表文件 */
/* 折叠内容样式 */
details {
    border: 1px solid #eee;
    border-radius: 4px;
    padding: 8px 16px;
    margin: 10px 0;
    cursor: pointer;
}
summary {
    font-weight: bold;
    margin-bottom: 8px;
}
/* 可编辑div样式 */
.editable-div {
    contenteditable: true;
    border: 1px solid #ccc;
    padding: 10px;
    width: 300px;
    outline: none;
    transition: border-color 0.3s; /* 过渡效果 */
}
.editable-div:focus {
    border-color: #409eff; /* 编辑时边框变色 */
}
```

2. 在 HTML 中引入外部 CSS 文件

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>外部样式表示例</title>
    <!-- 引入外部样式表：href为CSS文件路径 -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <details>
        <summary>点击查看详情（外部样式美化）</summary>
        <p>外部样式表可复用多个页面</p>
    </details>
    <div class="editable-div">你可以编辑这段文字</div>
</body>
</html>
```



对比：

| 写法       | 优点                 | 缺点                 | 优先级（高→低） |
| ---------- | -------------------- | -------------------- | --------------- |
| 行内样式   | 精准控制单个标签     | 不利于维护、无复用性 | 1（最高）       |
| 内部样式表 | 单页面样式集中管理   | 无法跨页面复用       | 2               |
| 外部样式表 | 可复用、易维护、缓存 | 需要额外加载文件     | 3（最低）       |

1. 小型单页面 / 临时调试：可用内部样式表；
2. 仅修改单个标签样式：临时用行内样式；
3. 中大型项目 / 多页面：优先用外部样式表，按模块（如`reset.css`、`common.css`）拆分 CSS 文件，提升可维护性。



## css文字样式基础及颜色样式

### CSS 文字样式速查表

| 分类         | 属性名            | 常用值 / 说明                                                | 示例                                        |
| ------------ | ----------------- | ------------------------------------------------------------ | ------------------------------------------- |
| **字体基础** | `font-family`     | 字体列表（逗号分隔，最后加通用族：`sans-serif`/`serif`/`monospace`） | `font-family: "微软雅黑", sans-serif;`      |
|              | `font-size`       | 字号：`px`（固定）/`em`（父元素倍数）/`rem`（根元素倍数）/`%` | `font-size: 16px;`/`font-size: 1.2rem;`     |
|              | `font-weight`     | 字重：`normal`(400)/`bold`(700)/`100-900`/`lighter`/`bolder` | `font-weight: 600;`                         |
|              | `font-style`      | 样式：`normal`/`italic`（斜体）/`oblique`（倾斜）            | `font-style: italic;`                       |
|              | `font`（简写）    | 顺序：`style weight size family`（`size`+`family`必填）      | `font: italic 600 16px "微软雅黑";`         |
| **颜色**     | `color`           | 颜色值：十六进制（`#333`/`#2c3e50`）/RGB（`rgb(51,51,51)`）/RGBA（`rgba(51,51,51,0.8)`）/ 颜色名（`red`） | `color: #2c3e50;`                           |
| **排版**     | `line-height`     | 行高：`px`/ 倍数（推荐`1.5-1.8`）/ 百分比                    | `line-height: 1.6;`                         |
|              | `text-align`      | 水平对齐：`left`/`center`/`right`/`justify`（两端对齐）      | `text-align: center;`                       |
|              | `text-indent`     | 首行缩进：`em`（常用`2em`=2 字符）/`px`                      | `text-indent: 2em;`                         |
| **装饰**     | `text-decoration` | 装饰：`none`（无）/`underline`（下划线）/`overline`（上划线）/`line-through`（删除线） | `text-decoration: underline;`               |
|              | `text-shadow`     | 阴影：`水平偏移 垂直偏移 模糊半径 颜色`（多阴影用逗号分隔）  | `text-shadow: 1px 1px 2px rgba(0,0,0,0.3);` |
| **其他**     | `letter-spacing`  | 字间距：`px`/`em`（正数加宽，负数收紧）                      | `letter-spacing: 2px;`                      |
|              | `word-spacing`    | 词间距（英文）：`px`/`em`                                    | `word-spacing: 4px;`                        |
|              | `white-space`     | 空白处理：`normal`（默认）/`nowrap`（不换行）/`pre`（保留空格换行） | `white-space: nowrap;`                      |



## 盒模型概念

#### 一、盒模型的组成

CSS 盒模型是网页布局的核心概念，它定义了网页中每个元素（如 div、p、span 等）都会生成一个矩形的 “盒子”，页面布局本质上就是对这些盒子的排列、大小和位置的控制。

每个盒子包含4个核心部分：

| 组成部分              | 作用                                                         |
| --------------------- | ------------------------------------------------------------ |
| **Content（内容区）** | 元素的实际内容（文本、图片等），宽高由 `width`/`height` 控制（标准模型下）。 |
| **Padding（内边距）** | 内容区与边框之间的空白区域，会继承元素的背景（背景色 / 背景图），不可为负。 |
| **Border（边框）**    | 围绕内边距的线条，会占据空间，样式由 `border` 系列属性控制。 |
| **Margin（外边距）**  | 盒子与其他盒子之间的空白区域，透明且不会继承背景，可设负值（用于调整布局）。 |

#### 二、两种盒模型

##### 1. 标准盒模型（W3C 标准）

- **默认行为**：浏览器默认采用标准盒模型（除了 IE6/7/8 怪异模式）。
- **宽高计算**：`width/height` 仅等于**内容区**的宽度 / 高度。
- **总宽度 / 高度** = `width/height` + padding（左右 / 上下） + border（左右 / 上下） + margin（左右 / 上下）（margin 是外间距，不算盒子本身大小，仅影响布局）。

示例

```css
.box {
  width: 200px;    /* 内容区宽度 */
  height: 100px;   /* 内容区高度 */
  padding: 10px;   /* 上下左右内边距各10px */
  border: 5px solid #000; /* 上下左右边框各5px */
  margin: 20px;    /* 上下左右外边距各20px */
}
```

- 盒子自身宽度 = 200（weight） + 10×2（左右内边距） + 5×2（边框左右） = 230px
- 盒子占据的布局宽度 = 230 + 20×2 （外边距左右宽度）= 270px

##### 2. IE 盒模型（怪异盒模型 / 边框盒模型）

- **触发方式**：通过 `box-sizing: border-box;` 手动设置（现代开发中最常用）。
- **宽高计算**：`width/height` 包含**内容区 + padding + border**。
- **总宽度 / 高度** = `width/height` + margin（左右 / 上下）。

示例（同上参数，仅改盒模型）：

```css
.box {
  box-sizing: border-box; /* 启用IE盒模型 */
  width: 200px;    /* 包含内容+padding+border */
  height: 100px;
  padding: 10px;
  border: 5px solid #000;
  margin: 20px;
}
```

- 盒子自身宽度 = 200px（内容区宽度 = 200 - 10×2 - 5×2 = 170px）
- 盒子占据的布局宽度 = 200 + 20*2 = 240px

#### 三、关键属性

##### 1. box-sizing（控制盒模型类型）

| 值            | 说明                      |
| ------------- | ------------------------- |
| `content-box` | 默认值，标准盒模型        |
| `border-box`  | IE 盒模型（推荐开发使用） |
| `inherit`     | 继承父元素的 box-sizing   |

**开发技巧**：全局设置 border-box，避免布局计算麻烦：

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; /* 所有元素默认IE盒模型 */
}
```

##### 2. 内边距（padding）

- 简写：`padding: 上 右 下 左;`（顺时针），如 `padding: 10px 20px;`（上下 10，左右 20）。
- 单方向：`padding-top`/`padding-right`/`padding-bottom`/`padding-left`。
- 注意：行内元素（如 span）的 padding 上下不会影响行高，但会覆盖周围元素。

##### 3. 边框（border）

- 简写：`border: 宽度 样式 颜色;`，如 `border: 1px solid #ccc;`。
- 样式（必填）：`solid`（实线）、`dashed`（虚线）、`dotted`（点线）、`none`（无）等。
- 单方向：`border-top: 1px solid red;`。
- 圆角：`border-radius: 5px;`（可设百分比，如 50% 实现圆形）。

##### 4. 外边距（margin）

- 简写规则同 padding。
- 单方向：`margin-top`/`margin-right`/`margin-bottom`/`margin-left`。
- 核心特性：
  - **外边距合并（塌陷）**：垂直方向上，两个相邻元素的 margin 会合并为较大的那个（如上面元素 margin-bottom:20px，下面元素 margin-top:10px，实际间距为 20px）。
  - **居中对齐**：块级元素（定宽）水平居中：`margin: 0 auto;`。
  - 行内元素的 margin 上下无效，左右有效。

#### 四、常见应用场景

1. **定宽布局**：用 `box-sizing: border-box` 确保元素宽度不受 padding/border 影响。
2. **元素间距**：用 margin 控制盒子之间的距离，padding 控制内容与边框的距离。
3. **圆角卡片**：`border-radius + padding + border` 实现卡片样式。
4. **水平居中**：`margin: 0 auto`（块级元素定宽）。

#### 五、注意事项

1. 行内元素（如 span、a）的盒模型特性：
   - width/height 无效（需转块级 / 行内块 `display: inline-block`）。
   - padding 上下不影响行高，但会视觉上延伸。
   - margin 上下无效，左右有效。
2. 浮动元素、绝对定位 / 固定定位元素的 margin 不会合并。
3. `box-sizing` 不影响 margin，margin 始终是盒子外的间距。



## display属性

#### 一、核心分类（按布局行为）

`display` 的值可分为几大类：**基础显示类型**、**布局模式类型**、**隐藏类**，以下是最常用的取值及特性：

| 取值                 | 元素类型     | 核心特性                                                 | 宽高设置 | 换行规则             | 边距 / 内边距      | 常见应用场景                         |
| -------------------- | ------------ | -------------------------------------------------------- | -------- | -------------------- | ------------------ | ------------------------------------ |
| `block`              | 块级元素     | 独占一行；可设置 width/height；默认宽度撑满父容器        | 有效     | 自动换行（独占一行） | 上下左右都有效     | 容器（div、section）、按钮（自定义） |
| `inline`             | 行内元素     | 不独占一行；宽高由内容决定（设置 width/height 无效）     | 无效     | 同行排列             | 左右有效，上下无效 | 文本包裹（span、a、em）              |
| `inline-block`       | 行内块元素   | 不独占一行；可设置 width/height；对齐方式可调整          | 有效     | 同行排列             | 上下左右都有效     | 导航栏、表单控件（input）            |
| `none`               | 隐藏元素     | 元素完全隐藏（不占布局空间），DOM 仍存在                 | -        | -                    | -                  | 动态隐藏元素（如弹窗关闭）           |
| `flex`               | 弹性容器     | 子元素按弹性布局排列（一维），可控制对齐、分布、方向     | -        | 子元素同行 / 列排列  | -                  | 响应式布局、垂直居中、均分列         |
| `grid`               | 网格容器     | 子元素按网格布局排列（二维），可定义行 / 列数量、大小    | -        | 网格排列             | -                  | 复杂布局（卡片网格、表单布局）       |
| `inline-flex`        | 行内弹性容器 | 弹性容器本身行内显示（不独占一行），子元素仍按 flex 布局 | -        | 同行排列             | -                  | 行内弹性布局（如按钮组）             |
| `inline-grid`        | 行内网格容器 | 网格容器本身行内显示，子元素按 grid 布局                 | -        | 同行排列             | -                  | 行内网格布局                         |
| `table`/`table-cell` | 表格布局     | 模拟 HTML 表格行为（table 为容器，table-cell 为单元格）  | -        |                      |                    |                                      |

#### 二、基础类型详解（最常用）

##### 1. display: block（块级元素）

- **默认元素**：div、p、h1-h6、ul/li、section、footer 等。

- 核心特性

  - 独占一行，即使设置宽度小于父容器，右侧仍无其他元素；
  - 默认宽度为父容器的 100%（撑满），高度由内容决定；
  - 可自由设置 width/height、margin/padding（上下左右都生效）；
  - 支持 `margin: 0 auto` 实现水平居中（需定宽）。

- 示例：

  ```css
  .box {
    display: block;
    width: 200px;
    height: 100px;
    margin: 0 auto; /* 水平居中 */
    padding: 10px;
    background: #f0f0f0;
  }
  ```

  

##### 2. display: inline（行内元素）

- **默认元素**：span、a、em、strong、label、br 等。

- 核心特性

  - 不独占一行，与其他行内元素同行排列，直到行宽不足才换行；
  - width/height 设置无效（宽高由内容（文字 / 图片）决定）；
  - padding 上下生效（视觉上覆盖周围元素），但不影响行高；margin 上下无效，左右有效；
  - 无法通过 `margin: 0 auto` 居中（需转 block/inline-block）。

- 示例：

  ```css
  .text {
    display: inline;
    width: 200px; /* 无效 */
    height: 50px; /* 无效 */
    margin: 10px; /* 上下无效，左右有效 */
    padding: 10px; /* 上下视觉延伸，不影响行高 */
    background: #ff0;
  }
  ```

  

##### 3. display: inline-block（行内块元素）

- 核心特性

  ：融合 block 和 inline 的优点：

  - 不独占一行（inline 特性）；
  - 可自由设置 width/height、margin/padding（block 特性）；
  - 同行排列时，元素间会有**默认空白间隙**（因 HTML 换行 / 空格导致，可通过父容器 `font-size: 0` 消除）。

- **默认元素**：input、button、img、select 等。

- 示例（消除行内块间隙）：

  ```css
  .container {
    font-size: 0; /* 消除子元素间隙 */
  }
  .item {
    display: inline-block;
    width: 100px;
    height: 50px;
    font-size: 14px; /* 恢复文字大小 */
    margin: 5px;
    background: #00f;
  }
  ```

  

##### 4. display: none（隐藏元素）

- 核心特性

  - 元素完全从页面中消失，**不占据任何布局空间**（区别于 `visibility: hidden`，后者隐藏但占空间）；
  - 子元素也会被隐藏，无法通过子元素 `display: block` 恢复；
  - DOM 结构仍存在，可通过 JS 动态修改 `display` 显示。

- 对比

  ```
  visibility: hidden
  ```

  | 属性        | display: none | visibility: hidden |
  | ----------- | ------------- | ------------------ |
  | 布局空间    | 不占          | 占用               |
  | 子元素继承  | 强制隐藏      | 可通过子元素覆盖   |
  | 动画 / 过渡 | 不支持        | 支持               |

  

#### 三、布局模式类型（现代布局核心）

##### 1. display: flex（弹性布局）

- **核心作用**：父容器设为 flex 后，子元素（flex 项）按弹性规则排列，解决传统布局的垂直居中、均分列、自适应等痛点。

- 关键特性

  - 子元素默认横向排列（`flex-direction: row`）；
  - 子元素可自动伸缩（`flex: 1` 均分空间）；
  - 轻松实现垂直居中：`align-items: center` + `justify-content: center`。

- 示例（垂直水平居中）：

  ```css
  .flex-container {
    display: flex;
    width: 300px;
    height: 200px;
    background: #f0f0f0;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
  }
  .flex-item {
    width: 100px;
    height: 50px;
    background: #f00;
  }
  ```

##### 2. display: grid（网格布局）

- **核心作用**：二维布局（行 + 列），适合复杂的网格结构（如卡片墙、表单网格）。

- 关键特性

  - 可定义列数 / 行数：`grid-template-columns: 1fr 1fr 1fr`（三列均分）；
  - 可设置行列间距：`grid-gap: 10px`；

- 示例（三列网格）：

  ```css
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3列均分 */
    grid-gap: 10px; /* 行列间距 */
    width: 300px;
  }
  .grid-item {
    height: 80px;
    background: #0f0;
  }
  ```

  

#### 四、常见问题与技巧

1. **行内块元素的空白间隙**：
   - 原因：HTML 中 inline-block 元素之间的换行 / 空格被解析为空白字符；
   - 解决：父容器设 `font-size: 0`，子元素恢复 `font-size`；或元素间无换行；或用 flex 替代。
2. **inline 元素设置宽高无效**：
   - 解决方案：转为 `inline-block` 或 `block`；或用 `padding`/`line-height` 间接控制大小。
3. **display: none 与 visibility: hidden 区别**：
   - 隐藏且不占空间：用 `display: none`；
   - 隐藏但保留空间：用 `visibility: hidden`；
   - 动画过渡：visibility 支持过渡（`visibility: hidden; opacity: 0;`），display 不支持。
4. **块级元素居中 vs 行内元素居中**：
   - 块级元素（定宽）：`margin: 0 auto`；
   - 行内 / 行内块元素：父容器设 `text-align: center`；
   - 任意元素垂直居中：flex 布局（最推荐）。

#### 五、总结

`display` 是控制元素布局的核心，不同取值对应完全不同的布局行为：

- 基础布局：`block`/`inline`/`inline-block` 满足简单排版；
- 现代布局：`flex`（一维）/`grid`（二维）是主流，解决 90% 的布局问题；
- 隐藏元素：`none`（不占空间）/`visibility: hidden`（占空间）按需选择；
- 特殊场景：`inline-flex`/`table-cell` 适配小众布局需求。



## css基本布局控制

#### 一、基础排版控制（流布局）

网页默认是「文档流布局」：块级元素垂直排列（独占一行），行内 / 行内块元素水平排列（随内容换行）。基础布局先掌握「元素大小、间距、对齐」的控制。

##### 1. 元素大小控制

| 场景                | 实现方式                                                     |
| ------------------- | ------------------------------------------------------------ |
| 固定大小            | `width: 200px; height: 100px;`（块级 / 行内块有效，行内元素无效） |
| 自适应父容器        | `width: 100%; height: auto;`（height:auto 由内容撑开）       |
| 最大 / 最小限制     | `max-width: 1200px; min-height: 500px;`（适配响应式，避免元素过大 / 过小） |
| 比例容器（如 16:9） | 利用 padding-top 百分比（基于父容器宽度）：`.box { width: 100%; padding-top: 56.25%; height: 0; }` |

##### 2. 间距控制（margin/padding）

间距是布局的「呼吸感」核心，区分「内间距（padding）」和「外间距（margin）」：

- **padding**：控制「内容与边框」的距离（如卡片内边距），不会导致布局塌陷；
- **margin**：控制「元素与元素」的距离（如两个盒子的间距），需注意垂直外边距合并。

**常用技巧**：

```css
/* 全局重置默认间距（开发必做） */
* { margin: 0; padding: 0; box-sizing: border-box; }

/* 块级元素水平居中（定宽） */
.container { width: 1200px; margin: 0 auto; }

/* 垂直间距（避免塌陷：用 padding 替代 margin，或父容器加 overflow: hidden） */
.card { margin-bottom: 20px; }

/* 行内元素左右间距 */
.text-item { margin: 0 10px; }
```

3. 文本 / 行内元素对齐

针对行内 / 行内块元素（文字、span、img、input 等），通过父容器控制对齐：

```css
/* 水平居中 */
.parent { text-align: center; }

/* 垂直对齐（基线/顶部/底部/居中） */
img { vertical-align: middle; } /* 图片与文字居中对齐 */
.input { vertical-align: top; } /* 输入框与标签顶部对齐 */
```

#### 二、定位布局（脱离文档流）

当需要元素「脱离默认文档流」（如弹窗、悬浮按钮、侧边栏），使用 `position` 属性，核心是「定位方式 + 偏移量（top/right/bottom/left）」。

| 定位值     | 脱离文档流 | 参考坐标系                     | 核心特性                                                     | 应用场景                         |
| ---------- | ---------- | ------------------------------ | ------------------------------------------------------------ | -------------------------------- |
| `static`   | 否（默认） | -                              | 无定位，遵循文档流，top/right 等属性无效                     | 普通元素                         |
| `relative` | 否         | 自身原本在文档流的位置         | 偏移后仍保留原位置（不影响其他元素），可作为绝对定位的「参考容器」 | 微调元素位置、作为绝对定位父容器 |
| `absolute` | 是         | 最近的已定位祖先（非 static）  | 脱离文档流，不占空间，偏移基于参考容器的「padding 盒」（border 外） | 弹窗、悬浮元素、精准定位         |
| `fixed`    | 是         | 浏览器视口（viewport）         | 脱离文档流，滚动页面时位置固定，参考视口边界                 | 导航栏、回到顶部按钮             |
| `sticky`   | 半脱离     | 滚动到阈值时固定（参考父容器） | 结合 relative 和 fixed 特性，滚动                            | 吸顶导航、表格表头               |

效果预览：[效果预览](./效果预览.html)

#### 现代布局:[几种布局的效果展示](./布局效果预览)

##### 1. Flex 弹性布局（一维布局：行 / 列）

**核心**：给父容器设置 `display: flex`，子元素（flex 项）按弹性规则排列，无需脱离文档流，适配性极强。

| 核心属性（父容器） | 作用                                 | 常用值                                                       |
| ------------------ | ------------------------------------ | ------------------------------------------------------------ |
| `flex-direction`   | 排列方向                             | `row`（默认，横向）、`column`（纵向）、`row-reverse`/`column-reverse` |
| `justify-content`  | 主轴（flex-direction 方向）对齐      | `flex-start`（左 / 上）、`center`（居中）、`space-between`（两端对齐）、`space-around`（均匀分布） |
| `align-items`      | 交叉轴（垂直主轴）对齐               | `center`（居中）、`flex-start`、`flex-end`、`stretch`（拉伸填满） |
| `flex-wrap`        | 子元素是否换行                       | `nowrap`（默认，不换行）、`wrap`（换行）                     |
| `align-content`    | 多行时交叉轴整体对齐（仅 wrap 生效） | `center`、`space-between`、`stretch`                         |

| 核心属性（子元素） | 作用                                                 | 常用值                                                       |
| ------------------ | ---------------------------------------------------- | ------------------------------------------------------------ |
| `flex`             | 伸缩比例（简写：flex-grow flex-shrink flex-basis）   | `flex: 1`（均分空间）、`flex: 0 0 200px`（固定 200px，不伸缩） |
| `align-self`       | 单独设置子元素的交叉轴对齐（覆盖父容器 align-items） | `center`、`flex-start`、`flex-end`                           |

##### 2. Grid 网格布局（二维布局：行 + 列）

适合「多行多列」的复杂布局（如卡片墙、表单网格、仪表盘），核心是定义「行和列的规则」，子元素自动填充网格。

**核心属性（父容器）**：

```css
.grid-container {
  display: grid;
  /* 定义列：3列，第一列200px，后两列均分 */
  grid-template-columns: 200px 1fr 1fr;
  /* 定义行：2行，每行100px */
  grid-template-rows: 100px 100px;
  /* 行列间距（替代 margin） */
  grid-gap: 10px; /* 简写：grid-row-gap + grid-column-gap */
  /* 对齐：justify-items（水平）、align-items（垂直） */
  justify-items: center;
  align-items: center;
}

/* 子元素指定网格位置 */
.grid-item-1 {
  /* 从第1列到第3列，从第1行到第2行 */
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
```

**高频应用**：

```css
/* 自适应网格（每行4列，响应式自动换行） */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

#### 四、传统布局（Float）

Float 是早期多列布局的核心（如图文环绕、两栏布局），但易出现「高度塌陷」，现在已被 Flex 替代，仅需了解基础用法和坑点。

##### 1. 核心特性

- `float: left/right/none`：元素向左 / 右浮动，脱离文档流（但仍影响行内元素排版）；
- 浮动元素的父容器会「高度塌陷」（父容器高度为 0，因为子元素脱离流）；
- 浮动元素会被块级元素忽略，但行内 / 行内块元素会环绕它。

##### 2. 高度塌陷解决（清除浮动）

```css
/* 方法1：父容器加 overflow: hidden（简单，但可能隐藏溢出内容） */
.parent { overflow: hidden; }

/* 方法2：伪元素清除（通用，推荐） */
.clearfix::after {
  content: "";
  display: block;
  clear: both; /* 清除左右浮动 */
  visibility: hidden;
  height: 0;
}
.clearfix { zoom: 1; } /* 兼容IE6/7 */

/* 方法3：末尾加空元素（不推荐，冗余DOM） */
<div class="clear"></div>
.clear { clear: both; }
```



#### 五、布局控制核心技巧

1. **优先级**：现代布局（Flex > Grid）优先于定位（position），定位优先于传统 float；
2. **响应式适配**：用 `max-width/min-width` + 百分比 /rem + 媒体查询，Flex/Grid 天然适配；
3. **盒模型配合**：全局设置 `box-sizing: border-box`，避免 padding/border 改变元素大小；
4. 居中总结
   - 块级元素水平居中：`margin: 0 auto`（定宽）；
   - 行内元素水平居中：父容器 `text-align: center`；
   - 任意元素垂直水平居中：Flex（`justify-content: center + align-items: center`）；
5. 避免布局塌
   - margin 塌陷：父容器加 `padding/border/overflow: hidden`，或用 Flex 布局；
   - float 塌陷：清除浮动（伪元素法）；
   - 绝对定位塌陷：父容器设 `height` 或用 Flex 替代。

#### 六、总结

CSS 基本布局控制的核心逻辑是：

- 简单排版（单行 / 单列、居中、间距）：用「流布局 + margin/padding/text-align」；
- 脱离文档流的精准定位（弹窗、悬浮）：用 `position`（relative/absolute/fixed/sticky）；
- 自适应、多列、垂直居中：优先用 Flex（一维）/Grid（二维）；
- 传统 float 仅用于图文环绕等小众场景，需注意清除浮动。[浮动相关效果](./浮动相关效果.html)



## flexbox布局

Flexbox（弹性盒布局）是 CSS 中用于一维（行或列）布局的模块，通过给**父容器**设置 `display: flex` 即可开启，能轻松实现子元素的对齐、分布和自适应。

#### 1. 核心概念

- **弹性容器**：设置 `display: flex` 的父元素，所有直接子元素会变成**弹性项目**。
- **主轴**：弹性项目的排列方向，默认是水平方向（`flex-direction: row`）；可通过 `flex-direction` 改为垂直方向（`column`）。
- **侧轴**：与主轴垂直的方向，用于定义项目在侧轴上的对齐方式。

#### 2. 容器常用属性

| 属性              | 作用                 | 常用值                                                       |
| ----------------- | -------------------- | ------------------------------------------------------------ |
| `flex-direction`  | 定义主轴方向         | `row`（默认）/ `column` / `row-reverse` / `column-reverse`   |
| `justify-content` | 主轴上的对齐方式     | `flex-start`（默认）/ `center` / `space-between` / `space-around` |
| `align-items`     | 侧轴上的单行对齐方式 | `stretch`（默认）/ `center` / `flex-start` / `flex-end`      |
| `flex-wrap`       | 项目是否换行         | `nowrap`（默认）/ `wrap` / `wrap-reverse`                    |
| `align-content`   | 侧轴上的多行对齐方式 | 需配合 `flex-wrap: wrap` 使用，值同 `justify-content`        |

#### 3. 项目常用属性

| 属性          | 作用                  | 常用值                                                 |
| ------------- | --------------------- | ------------------------------------------------------ |
| `flex-grow`   | 项目的放大比例        | 默认为 `0`（不放大），值越大占比越高                   |
| `flex-shrink` | 项目的缩小比例        | 默认为 `1`（空间不足时缩小），`0` 则不缩小             |
| `flex-basis`  | 项目的初始宽度 / 高度 | 默认为 `auto`（自身宽高），可设具体值如 `200px`        |
| `flex`        | 简写属性              | `flex: 0 1 auto`（默认），常用 `flex: 1` 表示 `1 1 0%` |
| `align-self`  | 单个项目的侧轴对齐    | 覆盖容器的 `align-items`，值同 `align-items`           |