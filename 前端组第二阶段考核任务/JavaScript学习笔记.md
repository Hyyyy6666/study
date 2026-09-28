# JavaScript学习笔记

> 资料课程来源：黑马程序员前端 JavaScript 入门到精通全套视频（B 站 pink 老师）
> 学习进度：覆盖 **JS 基础语法 \+ Web APIs \(DOM\+BOM\) \+ 大量综合案例**
>

## 总知识框架

JavaScript = **ECMAScript（基础语法） \+ Web APIs（DOM \+ BOM）**

- ECMAScript：语言本身规则（变量、循环、函数、对象）

- DOM：操作页面 HTML 元素

- BOM：操作浏览器窗口

---

# 第一部分 JavaScript 基础语法（JS 基础 Day1 \~ Day7）

## 1\. JS 入门基础

1. **JS 三种书写位置**

    - 行内式：`<button onclick="alert('hi')">`

    - 内嵌式：`<script> 代码 </script>`

    - 外部式：`<script src="xxx.js"></script>`（推荐，不能写内部代码）

2. **输入输出语句**

```js
alert('弹出消息框');
console.log('控制台打印');
prompt('接收用户输入，返回字符串');
document.write('页面输出内容');
```

3. **注释**

    - 单行 `//`

    - 多行 `/*  */`

## 2\. 变量与数据类型

### 2\.1 变量声明

- `let`：块级作用域，推荐使用，不能重复声明，存在暂时性死区

- `const`：常量，声明必须赋值，不能修改引用地址（基础值不可变；对象属性可修改）

- `var`：旧语法，函数作用域，存在变量提升，允许重复声明（尽量不用）

> 规范：优先 `const`，需要修改数据再用 `let`
>

### 2\.2 数据类型

✅ **原始类型（简单类型）**

1. `Number` 数字：整数、小数、`Infinity`、`NaN`（非数字）

2. `String` 字符串：单引号 / 双引号 /```模板字符串

    ```js
    let name = '小明';
    let str = `名字：${name}`; // 模板字符串支持换行、插值
    ```

3. `Boolean` 布尔：`true / false`

4. `undefined`：变量声明未赋值

5. `null`：空对象（手动赋值空）

> 区分：`undefined` 系统默认；`null` 开发者主动清空变量
>

✅ **引用类型（复杂类型）**

- `Object` 对象、`Array` 数组、`Function` 函数

### 2\.3 类型检测与转换

```js
typeof 变量; // 检测数据类型
```

1. **显式转换（主动）**

```js
Number('123'); // 转数字
parseInt('12px'); // 获取整数
parseFloat('3.14'); // 获取小数
String(变量); // 转字符串
Boolean(变量); // 转布尔
```

2. **隐式转换（运算自动触发）**

```js
console.log('12' - 1); // 11 字符串自动转数字
console.log('12' + 1); // '121' +优先拼接字符串
```

## 3\. 运算符

1. **算术运算符** `+ - * / % ++ --`

    - `++a` 先自增再运算；`a++` 先运算再自增

2. **赋值运算符** `= += -= *= /= %=`

3. **比较运算符** `> >= < <= == === != !==`

    - `==` 只比较值（自动类型转换）

    - `===` 全等：值 \+ 类型全部一致（开发推荐）

4. **逻辑运算符 ****`&& || !`****（重点：逻辑短路）**

```js
// 逻辑与 &&：左边false，直接返回左边，不执行右侧
// 逻辑或 ||：左边true，直接返回左边，不执行右侧
let res = 0 || 'hello'; // 'hello'
```

5. **三元表达式**

```js
条件 ? 满足执行 : 不满足执行;
let num = age >=18 ? '成年' : '未成年';
```

## 4\. 流程控制（分支 \+ 循环）

### 4\.1 分支语句

```js
// if 判断
if(条件){}
else if(条件){}
else{}

// switch 判断（匹配全等===）
switch(变量){
  case 值1: 代码; break;
  case 值2: 代码; break;
  default: 默认代码;
}
```

> switch 适合**固定等值匹配**；if 适合区间判断
>

### 4\.2 循环语句

1. `while(条件){}` 先判断后执行

2. `do{}while(条件)` 先执行一次再判断

3. `for(初始化;条件;自增){}`（最常用）

4. 关键字：

    - `break`：跳出整个循环

    - `continue`：跳出本次循环，继续下一轮

> 经典案例：九九乘法表、ATM 取款机
>

## 5\. 数组 Array

```js
// 创建数组
let arr = [10,20,30];
let arr2 = new Array();
```

### 常用 API

|方法|作用|是否修改原数组|
|---|---|---|
|`push()`|尾部添加元素|✅|
|`pop()`|删除最后一个元素|✅|
|`unshift()`|头部添加元素|✅|
|`shift()`|删除第一个元素|✅|
|`splice(起始,数量)`|删除 / 插入元素|✅|
|`slice(start,end)`|截取数组|❌|
|`join('分隔符')`|数组转字符串|❌|
|`indexOf(值)`|查找下标，找不到返回 \- 1|❌|
|`includes(值)`|判断是否存在，返回布尔|❌|

遍历数组：

```js
for(let i = 0; i < arr.length; i++){}
// 增强for循环
for(let item of arr){}
```

## 6\. 函数 Function

### 6\.1 函数三种写法

```js
// 1.声明式
function fn(){}
// 2.表达式
let fn = function(){}
// 3.箭头函数（ES6，后续进阶）
let fn = ()=>{}
```

### 6\.2 参数与返回值

- 形参默认值：`function fn(a=0){}`

- `return`：返回结果，终止函数；没有 return 默认返回`undefined`

- 实参 \> 形参：多余参数丢弃；实参 \< 形参：未传入的值为`undefined`

### 6\.3 作用域

1. **全局作用域**：整个脚本可用

2. **局部（函数）作用域**：函数内部

3. **块级作用域** `{}`：`let / const` 生效，var 不生效

> 作用域查找规则：**由内向外查找，就近原则**
>

### 6\.4 匿名函数自执行

```js
(function(){
  // 隔离变量，防止全局污染
})()
```

## 7\. 对象 Object

### 7\.1 对象基础

```js
let obj = {
  name: '张三',
  sayHi:function(){} // 对象方法
}
// 访问
obj.name
obj['name'] // 支持变量访问
```

遍历对象：

```js
for(let k in obj){
  console.log(k, obj[k])
}
```

### 7\.2 内置对象

1. **Math** 数学对象

```js
Math.random() // [0,1)随机小数
Math.floor() // 向下取整
Math.ceil() // 向上取整
Math.max() Math.min()
```

✅ 常用公式：生成 `[min,max]` 随机整数

```js
let num = Math.floor(Math.random()*(max-min+1)) + min
```

2. **Date** 日期对象

```js
let d = new Date();
d.getFullYear() //年
d.getMonth() //月（0~11）
d.getDate() //日
d.getDay() //星期（0周日）
d.getTime() //时间戳（毫秒）
```

3. **String** 字符串方法
`split()`、`substring()`、`replace()`、`indexOf()`

---

# 第二部分 Web APIs（DOM 文档操作，课程重点，悬浮下拉、弹窗案例）

> 核心：DOM 把 HTML 页面转为节点树，JS 操作页面元素
>

## 1\. 获取 DOM 元素

```js
// 1. ID获取（单个元素）
document.getElementById('id')
// 2. 选择器获取
document.querySelector('选择器') // 获取第一个匹配元素
document.querySelectorAll('选择器') // 获取全部，返回NodeList伪数组
```

## 2\. 操作元素内容

```js
// 可识别HTML标签，存在XSS风险
element.innerHTML = '<b>文字</b>'
// 纯文本，不会解析标签，安全
element.textContent = '普通文字'
```

## 3\. 操作元素属性

### 3\.1 普通属性（src、href、title）

```js
element.src = '图片地址';
element.setAttribute('属性','值');
element.getAttribute('属性');
element.removeAttribute('属性');
```

### 3\.2 表单属性

`value`、`checked`、`selected`、`disabled`

> 布尔属性直接赋值 `input.disabled = true`
>

### 3\.3 自定义属性

- `data-xxx` 规范自定义属性

```js
element.dataset.xxx // 获取data-xxx的值
```

## 4\. 操作样式（两种方式）

1. **行内样式（style）**

```js
box.style.backgroundColor = '#fff';
// 注意：css横杠 → 驼峰命名
```

2. **类名控制（推荐，大量样式切换）**

```js
// 添加类
box.classList.add('active')
// 删除类
box.classList.remove('active')
// 切换类（有就删，没有就加）
box.classList.toggle('active')
// 判断是否拥有类
box.classList.contains('active')
```

> 💡 之前做的导航下拉、二维码悬浮气泡，优先使用 `classList.toggle` \+ css hover 实现
>

## 5\. 事件基础

### 5\.1 事件三要素：事件源 \+ 事件类型 \+ 事件处理程序

```js
btn.addEventListener('click', function(){
  // 触发执行代码
})
```

### 5\.2 常见事件

- `click` 点击

- `mouseenter` / `mouseleave` 鼠标悬浮（**不冒泡！适合下拉菜单**）

- `mouseover` / `mouseout` 鼠标移入移出（冒泡）

- `input` 表单输入

- `blur` 失去焦点、`focus` 获取焦点

### 5\.3 this 指向

在事件处理函数中：`this === 事件源`

### 5\.4 排他思想（高频案例）

一组元素，选中一个，清除其他所有元素选中状态

```js
// 1.先全部取消active
for(let i=0;i<list.length;i++){
  list[i].classList.remove('active')
}
// 2.当前点击添加active
this.classList.add('active')
```

## 6\. DOM 节点操作（创建、新增、删除）

```js
// 创建节点
let li = document.createElement('li');
// 添加子节点
ul.appendChild(li);
// 插入到指定节点前面
ul.insertBefore(li,某个节点)
// 删除子节点
ul.removeChild(li)
// 克隆节点
li.cloneNode(true) //true深度克隆（包含子元素）
```

> 案例：动态渲染商品列表、表格
>

## 7\. 定时器（截图里「5 秒自动消失广告」案例）

```js
// 延时定时器：延迟执行一次
let timer = setTimeout(function(){
  box.style.display = 'none'
},5000)
clearTimeout(timer) //清除延时

// 间歇定时器：每隔一段时间重复执行
let timer2 = setInterval(function(){},1000)
clearInterval(timer2) //清除间歇
```

> 焦点图轮播、倒计时广告核心 API
>

---

# 第三部分 BOM 浏览器对象模型

## 1\. window 顶级对象

所有全局变量、函数都是 window 属性；window 可以省略不写

## 2\. location 地址栏对象

```js
location.href // 获取/修改页面url（页面跳转）
location.search // 获取url参数
location.reload() // 刷新页面
```

## 3\. navigator 浏览器信息

`navigator.userAgent` 判断设备（移动端 / PC 端）

## 4\. history 历史记录

```js
history.back() //后退
history.forward() //前进
```

## 5\. 本地存储（localStorage /sessionStorage）

仅能存储**字符串**，对象需要 JSON 转换

```js
// 存储
localStorage.setItem('key','value')
// 获取
localStorage.getItem('key')
// 删除
localStorage.removeItem('key')
// 清空
localStorage.clear()

// 对象存储方案
localStorage.setItem('user', JSON.stringify(obj))
let user = JSON.parse(localStorage.getItem('user'))
```

- `localStorage`：永久存储，手动清除才消失

- `sessionStorage`：会话存储，关闭浏览器标签自动清空

---

# 第四部分 综合实战案例（课程配套）

1. 5 秒自动消失广告（定时器）

2. 轮播图焦点图

3. 随机点名

4. 猜数字游戏

5. 表格动态渲染

6. 导航栏下拉菜单

7. 二维码悬浮气泡弹窗

8. 移动端简单滑动效果

9. 表单验证基础案例
