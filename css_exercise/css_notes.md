# css学习笔记

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
|              | `font-weight`     | 字重：`normal`(400)/`bold`(700)（粗体）/`100-900`/`lighter`/`bolder` | `font-weight: 600;`                         |
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

### 

