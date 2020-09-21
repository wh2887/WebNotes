# 本地 AJAX 演示

使用 node.js 搭建一个本地服务，运行如下命令开启服务器。

1. 全局安装 `node-dev`,便于开发。
    `yarn global add  node-dev`

2. 本地运行服务器。

    ```javascript
    node serve.js 8888
    ```

3. 修改 serve.js 文件
修改serve.js中的 `if...else...` 请求路径，从而完成需求。

    > 注意设置请求头的类型

4. AJAX 的全部内容以及代码
AJAX 就是用 JavaScript 发请求和收响应

    ```javascript
    const request = new XMLHttpRequest()
    request.open('GET','/style.css')   //第二个参数为请求资源的路径，其他参数能不用就不用！
    request.onload=()=>{
        // doSomething
    }
    request.onerror=()=>{
        // doSomething
    }
    request.send()
    ```
