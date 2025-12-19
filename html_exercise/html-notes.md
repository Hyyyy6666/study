# HTMl基础学习笔记
## 2024年1月15日

### 学到的知识点

### HTML标签分类详解（01-02）

1. **文档结构标签**

   | 基础结构             |              |
   | -------------------- | ------------ |
   | header   | 网站页眉     |
   | nav       | 导航栏       |
   | main        | 主要内容区   |
   | article   | 独立文章内容 |
   | section| 内容区块     |
   | aside     | 侧边栏       |
   | footer   | 页脚         |

2. **段落与文本标签**

   1. 标题标签

      | ————  | ————         |
      | ----- | ------------ |
      | h1~h6 | 一到六级标题 |

   2. 段落文本

      | ————                                        |          |
      | ------------------------------------------- | -------- |
      | p                                           | 段落     |
      | p文本内容br文本内容第二行br文本内容第三行/p | 换行     |
      | hr                                          | 水平线   |
      | blockquote cite=“来源url”                   | 引用     |
      | strong（粗体），em（斜体）                  | 强调     |
      | mark                                        | 高亮     |
      | small                                       | 小号文字 |

   3. 列表标签

      <img src="D:\Git\study\html_excercise\img\笔记.jpg" alt="笔记" style="zoom:50%;" />

   4. 链接与锚点标签
   
      | -                          | ——             |
      | -------------------------- | -------------- |
      | herf                       | 基本链接       |
      | target                     | 打开方式       |
      | h2 id=“锚点”；herf=“#锚点” | 页面内转跳     |
      | href=“mailto:邮箱”                | 发送邮件       |
      | href=“下载文件名” download | 下载文件       |
      | href=“page.html#chapter2”  | 转跳到页面章节 |

   5. 图片标签
   
      img src=“图片url”  alt=“图片描述” width=“图片宽” height=“图片高”  title=“鼠标悬停提示” loading=“lazy（延迟加载）”

3. **路径概念**

   | ——         | ——                           |
   | ---------- | ---------------------------- |
   | 同一文件夹 | cat.jpg                      |
   | 子文件夹   | imges/cat.jpg                |
   | 上级文件夹 | ../cat/jpg                   |
   | 绝对路径   | C:/website/imges/cat.jpg     |
   | 网络路径   | h ttps://example.com/cat.jpg |

   

### html表格（03）

#### 一、表格的核心结构（基础语法）

HTML 表格的最小组成单元是 **行（`<tr>`）** 和 **单元格（`<td>`/`<th>`）**，外层用 `<table>` 包裹，核心结构如下：

| 标签      | 作用                                   | 层级关系                                    |
| --------- | -------------------------------------- | ------------------------------------------- |
| `<table>` | 表格容器，包裹所有表格内容             | 根容器（最外层）                            |
| `<tr>`    | Table Row（表格行），包裹单元格        | 直接子元素：`<table>` 的子元素              |
| `<td>`    | Table Data（数据单元格），存放具体数据 | 直接子元素：`<tr>` 的子元素                 |
| `<th>`    | Table Header（表头单元格），存放列标题 | 直接子元素：`<tr>` 的子元素（通常在第一行） |

用法示例：

```html
<table border="1"> <!-- border="1" 仅用于显示边框（调试用），实际用CSS控制 -->
  <!-- 表头行 -->
  <tr>
    <th>姓名</th>
    <th>年龄</th>
    <th>城市</th>
  </tr>
  <!-- 数据行1 -->
  <tr>
    <td>张三</td>
    <td>25</td>
    <td>北京</td>
  </tr>
  <!-- 数据行2 -->
  <tr>
    <td>李四</td>
    <td>30</td>
    <td>上海</td>
  </tr>
</table>
```

- `<th>` 默认样式：文字加粗、居中对齐（语义化标签，利于 SEO 和无障碍访问）；
- `<td>` 默认样式：文字左对齐、无加粗；
- `border="1"` 是 HTML 原生属性（不推荐生产环境使用），仅用于快速看到表格边框，实际开发用 CSS `border` 控制。

#### 二、表格的进阶结构（语义化 + 复杂布局）

1. 语义化标签（推荐使用）

   用于明确表格的 “表头区、表体区、表脚区”，即使表格内容很长，结构也清晰，且利于屏幕阅读器等辅助工具解析：

| 标签      | 作用                                 | 位置关系                                 |
| --------- | ------------------------------------ | ---------------------------------------- |
| `<thead>` | 表格头部（包裹表头行 `<tr>`+`<th>`） | `<table>` 的子元素（可选，通常在最上方） |
| `<tbody>` | 表格主体（包裹数据行 `<tr>`+`<td>`） | `<table>` 的子元素（可选，可多个）       |
| `<tfoot>` | 表格底部（包裹汇总行，如合计、说明） | `<table>` 的子元素（可选，通常在最下方） |

2. 单元表格合并

   当需要实现 “跨行 / 跨列” 的单元格时，使用 `colspan`（跨列）和 `rowspan`（跨行）属性，**属性值为 “合并的单元格数量”**。

   **常用属性**

   | 属性名    | 作用                   | 适用标签      | 示例                    |
   | --------- | ---------------------- | ------------- | ----------------------- |
   | `colspan` | 横向合并单元格（跨列） | `<td>`/`<th>` | `colspan="2"` 合并 2 列 |
   | `rowspan` | 纵向合并单元格（跨行） | `<td>`/`<th>` | `rowspan="3"` 合并 3 行 |

3. 表格美化（css属性）

   HTML 原生表格样式（如 `border="1"`）简陋且不灵活，实际开发中用 CSS 控制表格的边框、间距、对齐、背景等，核心属性如下：

   1. 边框与间距（最常用）

   - `border-collapse: collapse;`：合并单元格边框（默认 `separate` 是分开的，有缝隙）；
   - `border-spacing: 0;`：设置单元格之间的间距（仅 `border-collapse: separate` 时生效）；
   - `border`：控制表格 / 行 / 单元格的边框（如 `table { border: 1px solid #ccc; }`）。

   css示例

   ```css
   table {
     width: 80%; /* 表格宽度（占父容器80%） */
     margin: 20px auto; /* 水平居中 */
     border-collapse: collapse; /* 合并边框 */
     text-align: center; /* 单元格文字居中 */
   }
   
   th, td {
     border: 1px solid #e0e0e0; /* 单元格边框 */
     padding: 12px 8px; /* 内边距（上下12px，左右8px） */
   }
   
   th {
     background-color: #f5f5f5; /* 表头背景色 */
     font-weight: 600; /* 表头文字加粗 */
     color: #333;
   }
   
   tbody tr:nth-child(even) {
     background-color: #fafafa; /* 偶数行背景色（斑马纹） */
   }
   
   tbody tr:hover {
     background-color: #f0f8ff; /* 鼠标悬浮行变色 */
   }
   ```

   - `width`/`height`：控制表格、单元格的宽高；
   - `text-align`：单元格文字水平对齐（`left`/`center`/`right`）；
   - `vertical-align`：单元格文字垂直对齐（`top`/`middle`/`bottom`，表格特有的垂直对齐属性）；
   - `background-color`：单元格 / 行 / 表格的背景色；
   - `padding`：单元格内边距（避免文字紧贴边框）；

4. 响应式表格（适配移动端）

   默认表格在小屏幕（如手机）上会溢出屏幕，解决方案：

   - 外层包裹 `<div style="overflow-x: auto;">`，让表格可横向滚动；
   - 复杂场景：用 CSS 媒体查询（`@media`）在移动端隐藏次要列，或转为 “卡片式” 布局。

   响应式示例

   ```html
   <div style="overflow-x: auto; margin: 20px;">
     <table>
       <!-- 表格内容（同上） -->
     </table>
   </div>
   ```





### 布局概念（04）

布局（Layout）是前端开发的核心环节，指**将 HTML 元素按照设计要求，有序、美观地排列在页面的指定位置**，本质是控制元素的 “位置” 和 “大小”，以及元素之间的 “空间关系”。

布局的核心目标：让页面在不同设备（PC、平板、手机）、不同屏幕尺寸下，都能保持结构清晰、视觉协调，同时满足交互需求。

一、布局的核心维度

理解布局，先掌握三个核心维度，所有布局技巧都是围绕这三点展开：

| 维度         | 核心问题                                           | 控制手段                                        |
| ------------ | -------------------------------------------------- | ----------------------------------------------- |
| **位置**     | 元素出现在页面的哪个地方（上下左右 / 居中 / 浮动） | 定位、浮动、Flex/Grid 对齐、margin/padding      |
| **大小**     | 元素的宽高、占父容器的比例、是否自适应             | width/height、百分比、min/max-width、box-sizing |
| **空间关系** | 元素之间的间距、换行规则、层叠顺序                 | margin/padding、gap、white-space、    z-ind     |

二、常用布局

1. 浮动布局（Float Layout）

   - **原理**：利用 CSS `float` 属性（`left`/`right`）让元素脱离普通文档流，向左右浮动，实现多列排列（如 “左导航 + 右内容” 的两栏布局）。

   - 核心属性

     - `float: left/right/none`：控制元素浮动方向；
     - `clear: both/left/right`：清除浮动（解决父元素高度塌陷问题）；

   - 经典示例（两栏布局）

     css示例

     ```css
     .left {
       float: left;
       width: 200px;
       height: 500px;
       background: #f5f5f5;
     }
     .right {
       margin-left: 200px; /* 避开左侧浮动元素 */
       height: 500px;
       background: #eee;
     }
     .container::after { /* 清除浮动，让容器包裹子元素 */
       content: "";
       display: block;
       clear: both;
     }
     ```

     

   - **优点**：兼容性极好（支持所有浏览器）；

   - **缺点**：需手动清除浮动、无法轻松实现垂直居中、复杂布局（如多列等高）实现繁琐；

   - **现状**：仅在兼容老旧浏览器时使用，现代布局已极少用。

2. 定位布局（Position Layout）

   - **原理**：利用 CSS `position` 属性控制元素的定位方式，脱离普通文档流或在文档流中精准定位。

   - 核心属性值

     | 值         | 定位规则                                     | 适用场景                             |
     | ---------- | -------------------------------------------- | ------------------------------------ |
     | `static`   | 默认值，遵循普通文档流（无定位）             | 常规元素排列                         |
     | `relative` | 相对自身原位置偏移（不脱离文档流）           | 微调元素位置、作为绝对定位的参考容器 |
     | `absolute` | 相对最近的已定位祖先元素偏移（脱离文档流）   | 弹窗、悬浮按钮、精准定位的元素       |
     | `fixed`    | 相对浏览器视口偏移（脱离文档流，滚动时固定） | 导航栏、回到顶部按钮、弹窗遮罩       |
     | `sticky`   | 粘性定位（滚动到阈值时固定）                 | 表格表头、侧边栏导航                 |

   - 示例（固定导航栏）

     css示例

     ```css
     .header {
       position: fixed;
       top: 0;
       left: 0;
       width: 100%;
       height: 60px;
       background: #fff;
       box-shadow: 0 2px 4px rgba(0,0,0,0.1);
       z-index: 999; /* 控制层叠顺序，避免被其他元素覆盖 */
     }
     .content {
       margin-top: 60px; /* 避开固定导航栏 */
     }
     ```

     

   - **优点**：精准控制单个元素的位置；

   - **缺点**：脱离文档流的元素会 “不占空间”，容易导致布局错乱，不适合大面积页面布局；

   - **现状**：用于局部元素的精准定位（如弹窗、悬浮按钮），不用于整体页面布局。

3. 弹性布局（Flex Layout）

   - **原理**：给父容器设置 `display: flex`，将子元素转为 “弹性项”，通过控制父容器的对齐、方向、间距，实现灵活的一维布局（行 / 列）。

   - 核心优势

     - 一维布局（行或列）极致灵活，轻松实现居中、均分、自适应；
     - 无需清除浮动，天然支持元素等高；
     - 适配性好，是移动端布局的首选；

   - 核心属性（父容器）

     | 属性              | 作用                            | 常用值                                                       |
     | ----------------- | ------------------------------- | ------------------------------------------------------------ |
     | `display: flex`   | 开启弹性布局                    | -                                                            |
     | `flex-direction`  | 弹性项排列方向                  | `row`（行）/`column`（列）                                   |
     | `justify-content` | 主轴（排列方向）对齐方式        | `center`（居中）/`space-between`（两端对齐）/`space-around`（均匀分布） |
     | `align-items`     | 交叉轴（垂直于主轴）对齐方式    | `center`（居中）/`flex-start`（顶部）/`flex-end`（底部）     |
     | `flex-wrap`       | 弹性项是否换行                  | `wrap`（换行）/`nowrap`（不换行）                            |
     | `gap`             | 弹性项之间的间距（替代 margin） | `10px`/`20px`                                                |

   - 核心属性（子元素）

     | 属性         | 作用                                | 常用值                        |
     | ------------ | ----------------------------------- | ----------------------------- |
     | `flex: 1`    | 占满剩余空间（等价于 flex-grow: 1） | 数值（如 `flex: 2` 占比更高） |
     | `align-self` | 单独设置当前元素的交叉轴对齐方式    | `center`/`flex-end` 等        |

   - 经典示例（移动端适配的三栏布局）

     css

     ```css
     .nav {
       display: flex;
       justify-content: space-between; /* 两端对齐 */
       align-items: center; /* 垂直居中 */
       padding: 0 15px;
       height: 50px;
       background: #333;
       color: #fff;
     }
     .nav .logo { width: 80px; }
     .nav .menu { flex: 1; text-align: center; } /* 占满中间空间 */
     .nav .user { width: 60px; }
     ```

     

   - **适用场景**：移动端布局、导航栏、卡片排列、居中对齐、一维的行 / 列布局（如 “左 - 中 - 右”“上 - 中 - 下”）。

4. 网格布局（Grid Layout）

   - **原理**：给父容器设置 `display: grid`，将页面划分为 “行 + 列” 的二维网格，子元素可放置在任意网格单元格中，实现复杂的二维布局。

   - 核心优势

     - 二维布局（同时控制行和列），适合大面积页面分区（如 PC 端 “头部 - 侧边 - 主体 - 底部”）；
     - 精准控制网格的行高、列宽、间距，支持跨行 / 跨列；

   - 核心属性（父容器）

     | 属性                    | 作用                     | 示例                                                         |
     | ----------------------- | ------------------------ | ------------------------------------------------------------ |
     | `display: grid`         | 开启网格布局             | -                                                            |
     | `grid-template-columns` | 定义列数和列宽           | `grid-template-columns: 200px 1fr;`（2 列：固定 200px + 占剩余） |
     | `grid-template-rows`    | 定义行数和行高           | `grid-template-rows: 60px 1fr 40px;`（3 行：头部 60px + 主体自适应 + 底部 40px） |
     | `grid-gap`/`gap`        | 网格间距（行 + 列）      | `gap: 10px;`                                                 |
     | `grid-template-areas`   | 命名网格区域（简化布局） | `grid-template-areas: "header header" "aside main" "footer footer";` |

   - 经典示例（PC 端页面布局）

     css

     ```css
     .container {
       display: grid;
       width: 100vw;
       height: 100vh;
       /* 定义列：侧边200px + 主体占剩余 */
       grid-template-columns: 200px 1fr;
       /* 定义行：头部60px + 主体自适应 + 底部40px */
       grid-template-rows: 60px 1fr 40px;
       /* 命名网格区域 */
       grid-template-areas:
         "header header"
         "aside main"
         "footer footer";
       gap: 0; /* 无间距 */
     }
     .header { grid-area: header; background: #333; color: #fff; }
     .aside { grid-area: aside; background: #f5f5f5; }
     .main { grid-area: main; background: #fff; }
     .footer { grid-area: footer; background: #666; color: #fff; }
     ```

     

   - **适用场景**：PC 端复杂页面布局、仪表盘、卡片网格（如电商商品列表）、需要精准控制行和列的二维布局。

***总结**：

1. 布局的本质是控制元素的 “位置、大小、空间关系”；
2. 布局技术从 “表格→浮动→定位→Flex→Grid” 迭代，现代布局优先用 Flex（一维）和 Grid（二维）；
3. 响应式布局是必备能力，结合媒体查询、相对单位、弹性容器实现多设备适配；
4. 语义化 HTML + 合理的 CSS 布局属性，是实现 “结构清晰、维护性高” 布局的核心。





#### 表单（05）

##### 1. 基本概念：

表单是前端与用户交互的核心组件，用于**收集用户输入的信息**（如登录、注册、提交订单、问卷调查等），并将数据发送到后端服务器处理。一个完整的表单包含「表单容器」「表单控件」「提交 / 重置按钮」三大部分，配合 HTML 语义化标签和 CSS 样式，可实现功能完整、体验友好的交互效果。

##### 2. 核心属性

| 属性名         | 作用                                         | 常用值                                                       |
| -------------- | -------------------------------------------- | ------------------------------------------------------------ |
| `action`       | 表单数据提交的后端接口地址（URL）            | 相对路径（`/api/login`）、绝对路径（`https://xxx.com/api/submit`） |
| `method`       | 表单提交的 HTTP 方法                         | `GET`（默认，数据拼在 URL 后，适合少量数据）、`POST`（数据在请求体，适合敏感 / 大量数据） |
| `enctype`      | 表单数据的编码方式（仅 `POST` 有效）         | `application/x-www-form-urlencoded`（默认，普通文本）、`multipart/form-data`（文件上传） |
| `target`       | 提交后响应的打开方式                         | `_self`（当前页）、`_blank`（新标签页）、`_parent`（父框架） |
| `autocomplete` | 是否开启自动填充（浏览器记住之前输入的内容） | `on`（默认）、`off`（关闭，如登录密码框）                    |

##### 3. 表单控件

表单控件是收集用户输入的 “交互元素”，包括输入框、单选框、复选框、下拉框等，核心分为以下类别：

###### （1）文本类输入：`<input>` 核心类型

`<input>` 是表单最常用的控件，通过 `type` 属性切换输入类型，适配不同场景：

| `type` 值     | 作用                                | 适用场景       | 关键属性                                                     |
| ------------- | ----------------------------------- | -------------- | ------------------------------------------------------------ |
| `text`        | 单行文本输入框                      | 用户名、昵称   | `placeholder`（提示文字）、`maxlength`（最大长度）、`required`（必填） |
| `password`    | 密码输入框（内容隐藏）              | 登录密码       | `autocomplete="off"`（关闭自动填充）、`pattern`（正则验证）  |
| `email`       | 邮箱输入框（自动验证格式）          | 绑定邮箱       | `required`、`multiple`（允许多个邮箱）                       |
| `tel`         | 电话号码输入框                      | 手机号         | `pattern="^1[3-9]\d{9}$"`（手机号正则）                      |
| `number`      | 数字输入框（仅允许输入数字）        | 年龄、数量     | `min`（最小值）、`max`（最大值）、`step`（步长，如`step="1"`） |
| `range`       | 滑块输入（可视化选择数字）          | 评分、音量调节 | `min`、`max`、`value`（默认值）                              |
| `date`/`time` | 日期 / 时间选择框（浏览器原生控件） | 生日、预约时间 | `min`、`max`（限制可选范围）                                 |
| `search`      | 搜索框（样式优化，如右侧清除按钮）  | 站内搜索       | `placeholder="请输入关键词"`                                 |
| `file`        | 文件上传框                          | 上传图片、文档 | `accept`（限制文件类型，如`accept="image/*"`）、`multiple`（允许多文件） |

###### （2）选择类控件

用于让用户从预设选项中选择，而非手动输入：

| 控件标签                  | 作用                               | 关键属性                                                     | 示例                                                         |
| ------------------------- | ---------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `<input type="radio">`    | 单选框（互斥选择，一组只能选一个） | `name`（必须相同，标识同一组）、`value`（选项值）、`checked`（默认选中） | `<input type="radio" name="gender" value="male" checked> 男` |
| `<input type="checkbox">` | 复选框（多选）                     | `name`（同一组可相同）、`value`、`checked`                   | `<input type="checkbox" name="hobby" value="reading"> 阅读`  |
| `<select>` + `<option>`   | 下拉选择框                         | `name`、`multiple`（多选）、`disabled`（禁用）               | `<select name="city"><option value="bj">北京</option></select>` |
| `<optgroup>`              | 下拉框分组（优化多选项体验）       | `label`（分组名称）                                          | `<optgroup label="一线城市"><option>北京</option></optgroup>` |

###### （3）多行文本：`<textarea>`

用于输入大段文字（如留言、备注），支持换行，核心属性：

- `rows`：默认显示的行数（如`rows="5"`）；
- `cols`：默认显示的列数；
- `placeholder`：提示文字；
- `maxlength`：最大输入长度；
- `resize`：CSS 属性，控制是否允许拖动调整大小（`resize: none` 禁用拖动）。

###### （4）按钮类控件

用于触发表单操作（提交、重置）或自定义交互：

| 控件类型                | 作用                              | 关键属性                                             |
| ----------------------- | --------------------------------- | ---------------------------------------------------- |
| `<input type="submit">` | 提交按钮（点击后触发表单提交）    | `value`（按钮文字，如`value="登录"`）                |
| `<input type="reset">`  | 重置按钮（清空表单所有输入）      | `value="重置"`                                       |
| `<button>`              | 通用按钮（更灵活，可嵌套 HTML）   | `type="submit/reset/button"`（默认`submit`）         |
| `<input type="button">` | 普通按钮（无默认行为，需绑定 JS） | `onclick`（点击事件，如`onclick="alert('点击了')"`） |

#### 4. 辅助标签：提升语义化和体验

表单的辅助标签不直接收集数据，但能优化可访问性（如屏幕阅读器）和用户体验：

| 标签         | 作用                                                    | 示例                                                         |
| ------------ | ------------------------------------------------------- | ------------------------------------------------------------ |
| `<label>`    | 绑定控件的文字说明（点击文字可聚焦控件，提升交互）      | `<label for="username">用户名：</label><input id="username">` |
| `<fieldset>` | 表单分组（可视化区分不同模块，如 “个人信息”“收货地址”） | `<fieldset><legend>个人信息</legend>...</fieldset>`          |
| `<legend>`   | 配合 `<fieldset>` 使用，定义分组标题                    | 如上示例                                                     |
| `<datalist>` | 给输入框绑定预设建议列表（输入时提示）                  | `<input list="cityList"><datalist id="cityList"><option>北京</option></datalist>` |
| `<output>`   | 显示表单计算结果（如滑块评分的实时数值）                | `<output for="range">80</output>`                            |

##### 5. 表单验证

表单验证用于**确保用户输入的数据符合规则**（如手机号格式、必填项不能为空），分为「前端验证」（提升体验）和「后端验证」（安全兜底），前端验证又分两种方式：

###### 1. HTML 原生验证（简单场景）

通过控件属性实现基础验证，无需写 JS，兼容性好：

- `required`：标记控件为必填项（提交时为空则提示）；
- `pattern`：正则表达式验证（如手机号 `pattern="^1[3-9]\d{9}$"`）；
- `min`/`max`：数字 / 日期的范围验证；
- `maxlength`：文本长度限制；
- `type="email"`/`type="url"`：内置格式验证。

###### 2. JavaScript 自定义验证（复杂场景）

原生验证样式和提示语不可定制，复杂场景（如异步验证用户名是否存在）需用 JS 实现：

- 监听表单 `submit` 事件，阻止默认提交行为；
- 手动校验每个控件的输入值；
- 自定义错误提示（如红色文字、弹窗）；
- 验证通过后手动提交表单。

##### 表单美化css

1. ###### 基础样式示例

   ```css
   /* 重置表单控件默认样式 */
   input, select, textarea, button {
     box-sizing: border-box;
     outline: none; /* 去掉聚焦时的默认外边框 */
     border: 1px solid #ccc;
     padding: 8px 12px;
     border-radius: 4px; /* 圆角 */
     font-size: 14px;
   }
   
   /* 聚焦时样式 */
   input:focus, select:focus, textarea:focus {
     border-color: #409eff; /* 蓝色边框 */
     box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.2); /* 外发光 */
   }
   
   /* 禁用状态 */
   input:disabled, button:disabled {
     background-color: #f5f5f5;
     color: #999;
     cursor: not-allowed;
   }
   ```

   ###### 2. 自定义单选 / 复选框

   原生单选 / 复选框样式难以修改，通常用「隐藏原生控件 + 伪元素模拟」的方式：

   ```css
   /* 隐藏原生控件 */
   input[type="radio"], input[type="checkbox"] {
     display: none;
   }
   
   /* 模拟单选框 */
   input[type="radio"] + label::before {
     content: "";
     display: inline-block;
     width: 16px;
     height: 16px;
     border: 1px solid #ccc;
     border-radius: 50%; /* 圆形 */
     margin-right: 5px;
     vertical-align: middle;
   }
   
   /* 选中状态 */
   input[type="radio"]:checked + label::before {
     background-color: #409eff;
     border-color: #409eff;
     box-shadow: inset 0 0 0 4px #fff; /* 内部白色圆点 */
   }
   ```

   ###### 3. 适配移动端

   - 表单控件宽度设为 `100%`（`width: 100%;`），适配屏幕宽度；
   - 按钮用 `min-height: 44px`（移动端点击热区最小尺寸）；
   - 避免使用过小的控件（如单选框），提升触控体验。

##### 

### 多媒体和HTML5新特性

#### 多媒体标签

##### 音频标签学习`audio`

1. 核心属性

   | 属性       | 作用                                                         |
   | ---------- | ------------------------------------------------------------ |
   | `src`      | 指定音频文件路径（支持 MP3、WAV、OGG 等格式，MP3 兼容性最好） |
   | `controls` | 显示浏览器默认的播放控件（播放 / 暂停、进度条、音量、下载等） |
   | `autoplay` | 页面加载后自动播放（多数浏览器为了用户体验，需配合 `muted` 静音才能生效） |
   | `loop`     | 循环播放音频                                                 |
   | `muted`    | 默认静音播放                                                 |
   | `preload`  | 预加载策略：- `auto`：自动预加载全部音频- `metadata`：仅预加载元数据（时长、大小等）- `none`：不预加载 |

2. 基本语法

   ```html
   <audio src="音频文件路径" controls>
     您的浏览器不支持音频播放，请升级浏览器！
   </audio>
   ```

3. 多元兼容方案

   不同浏览器对音频格式支持不同，可通过 `<source>` 标签提供多个源：

   ```html
   <audio controls>
     <source src="music.mp3" type="audio/mpeg">
     <source src="music.ogg" type="audio/ogg">
     您的浏览器不支持音频播放！
   </audio>
   ```

##### 视频标签`video`

1. 核心属性

   | 属性                                                 | 作用                                                         |
   | ---------------------------------------------------- | ------------------------------------------------------------ |
   | `src`/`controls`/`autoplay`/`loop`/`muted`/`preload` | 同 `<audio>` 标签                                            |
   | `width`/`height`                                     | 设置视频播放区域的宽 / 高（单位：像素，只设一个会按比例缩放） |
   | `poster`                                             | 指定视频封面图（视频未播放时显示的图片）                     |

2. 基本语法

   ```html
   <video src="视频文件路径" controls width="600">
     您的浏览器不支持视频播放，请升级浏览器！
   </video>
   ```

3. 多源兼容

   ```html
   <video controls width="800" poster="cover.jpg">
     <source src="video.mp4" type="video/mp4">
     <source src="video.webm" type="video/webm">
     您的浏览器不支持视频播放！
   </video>
   ```

​	**注意事项**

- 自动播放限制：Chrome、Edge 等浏览器要求 `autoplay` 必须配合 `muted` 才能生效（防止自动播放声音干扰用户）；
- 文件路径：建议使用**相对路径（如 `./audio/music.mp3`），避免绝对路径**（如 `C:/xxx/music.mp3`）导致跨设备 / 服务器失效；
- 兼容性：IE8 及以下不支持 `<audio>`/`<video>`，可通过提示文本降级。

#### HTML5新标签（06）

###### 1.页面结构类语义标签（替代传统 `<div id="header">` 等）

| 标签        | 含义              | 典型用途                                                     |
| ----------- | ----------------- | ------------------------------------------------------------ |
| `<header>`  | 头部 / 页眉       | 页面头部（logo、导航、标题）、文章头部（标题、作者）         |
| `<nav>`     | 导航栏            | 页面主导航、侧边导航（如菜单列表）                           |
| `<main>`    | 页面主要内容      | 一个页面只能有一个，包含核心内容（排除页眉、页脚、侧边栏）   |
| `<section>` | 章节 / 区块       | 有主题的内容块（如 “产品介绍”“新闻列表”），需配合标题（h1-h6） |
| `<article>` | 独立文章 / 内容   | 博客文章、新闻、评论、论坛帖子（可独立分发）                 |
| `<aside>`   | 侧边栏 / 附加内容 | 相关推荐、作者信息、广告、目录（与主内容相关但非核心）       |
| `<footer>`  | 页脚              | 页面底部（版权、联系方式、备案信息）、文章底部（点赞、分享） |

###### 2.其他常用 HTML5 新标签

| 标签           | 用途                                                         |
| -------------- | ------------------------------------------------------------ |
| `<figure>`     | 包含插图 / 图表 / 代码块 + 说明（配合 `<figcaption>` 标签）  |
| `<figcaption>` | 为 `<figure>` 提供标题 / 说明（可放在 `<figure>` 内任意位置） |
| `<time>`       | 定义时间 / 日期（机器可读，利于 SEO），`datetime` 属性指定标准时间格式 |
| `<mark>`       | 高亮文本（如搜索结果关键词）                                 |
| `<progress>`   | 进度条（如文件上传进度），`value`（当前值）/`max`（最大值）属性 |
| `<meter>`      | 度量衡（如评分、磁盘使用率），支持 `min`/`max`/`value`/`low`/`high` 属性 |

###### 3.特殊元素

使用示例：

```html
<!-- 折叠内容 -->
<details>
    <summary>点击查看详情</summary>
    <p>这里是详细内容...</p>
</details>

<!-- 可编辑内容 -->
<div contenteditable="true">
    你可以编辑这段文字
</div>
```

