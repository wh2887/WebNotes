# JavaScript 对象

定义：是无序的数据集合、键值对集合。
注意：键名一定是字符串！

## 增加属性

`let obj = {}`

1. 中括号语法
`obj['name'] = 'McCall'`
2. 点语法
`obj.age = 18`
3. 中括号 + 变量

```javascript
let sex = 'gender'
obj[sex] = man
```

<div align=center>
<img src='https://gitee.com/hellow2887/blogimage/raw/master/img/_GOQ%60K9S$YEJ~I%5B4KM5%7B%7B2J.png'/>
</div>

<center> 结果 </center>

## 删除属性

1. delete obj.xxx

    此方法直接删除 obj 的属性，包括属性以及属性名。

    ```javascript
    let obj = {name:'McCall',age:18}
    delete obj.name
    ```

2. obj.xxx = undefined

    ```javascript
    let obj = {name:'McCall',age:18}
    obj.name = undefined
    ```

    <div align=center>
    <img src='https://gitee.com/hellow2887/blogimage/raw/master/img/20201011125453.png'/>
    </div>
    <center> 结果 </center>

3. 区分键值的 undefined 与 null

## 改属性

- 直接赋值

- 批量赋值

  `Object.assign(obj,{p1:1,p2:2,p3:3,p4:4})`   //ES6新出的API

- 修改或增加共有属性？

  js做了优化，在读的时候会走原型，在写的时候不会走原型  
  如果偏要修改的话：`obj.__proto__.toString = 'xxx'`    这个方法不推荐，用这个： `window.Object.prototype.toString = 'xxx' `   ，这个也不推荐，用下一点的图片上的方法
  一般来说永远不要修改原型，会引起很多问题，代码崩溃或者异常

## 查属性

### 1. 查所有属性

- 查看自身所有属性名 ：`Object.keys(obj)`

  查看自身所有属性值：`Object.values(obj)`

  查看自身所有属性名和值：`Object.entres(obj)`

- 查看自身+共有属性  

  `console.dir(obj)`

- 判断一个属性是不是自己的？

  `obj.hasOwnProperty('toString')` 返回true就是自身的

### 2. 查单个属性

两种方法：

1. 中括号语法：`obj['key']`

2. 点语法：`obj.key`

3. 坑新人语法：`obj[key]` //变量key值一般不为'key'     算是错误的做法吧？也不是错误的做法，只不过这个是变量容易混淆
