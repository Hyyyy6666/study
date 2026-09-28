# 学习笔记

## object

### 什么是对象
1. 是一种数据类型
2. 是一个无序的集合
3. 可以描述某个事物

### object使用
#### 声明
1. 声明方法
 - 法一：let 对象名 = {}
 - 法二： let 对象名 = new object()

2. 组成
- 属性：属性值
- 方法：函数
- 例：
 - let 对象名 = {
    属性名：属性值,
    方法名：函数
 }
#### 使用：增删改查
1. 查
 - 用法：对象.属性名/对象[' 属性名 ']
 - 对象名若是遇到字符串，只能用第二种方法

2. 改
 - 用法：重新赋值覆盖原属性值（赋值操作）

3. 增
 - 同上2

4. 删
 - 语法：delete 对象名.属性名

#### 方法
1. 书写:
    - let obj = {
    - - uname:'刘德华',
    - - song:function(x,y){
        console.log('冰雨')
    }}
    - - obj.song(1,2)
    - - document.write()

2. 调用:对象名.方法名

### object遍历
1. for in遍历对象
 - for(let k in arr){console.log(k)}//得到属性名
 - for(let k in arr){console.log(obj[ k ])}//得到属性值


### 内置对象-Math
1. 生成随机数
 - Math.random(),随机生成 0-1 之间的小数，左闭右开。
   - - 生成0-10的随机数：Math.floor(Math.random()*(10 + 1))
   - - 数组中随机抽取一个元素：Math.floor(Math*random()*arr.length)
   - - 生成N - M之间的随机数：MAth.floor(Math.random()*(M - N +1))+N
   - - 生成随机数函数：function getRandom(N,M){
    retrun Math.floor(Math.random()(M-N+1)) + N
   }