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
