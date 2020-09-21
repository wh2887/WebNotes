console.log('我是 main.js 的内容！')
const button1 = document.querySelector('#button1')
button1.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', '/style.css')
    request.onload = () => {
        const style = document.createElement('style')
        style.innerHTML = request.response;
        document.head.appendChild(style)
    }
    request.onerror = () => {
        console.log('请求 style.css 失败！')
    }
    request.send()
}