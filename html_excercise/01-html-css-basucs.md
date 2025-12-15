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
