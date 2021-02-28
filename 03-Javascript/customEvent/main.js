box.addEventListener('click', () => {
    const event = new CustomEvent('mccall', {   // 创建自定义事件
        detail: { name: 'McCall', age: 18 },
        bubbles: true,
        cancelable: false
    })
    button.dispatchEvent(event)  // 派发事件 event 给 ==> button
})

button.addEventListener('mccall', (e) => {
    console.log(e)
    console.log(e.detail)
})