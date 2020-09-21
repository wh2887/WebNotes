console.log('我是 main.js 的内容！')
const getCss = document.querySelector('#getCss')
getCss.onclick = () => {
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