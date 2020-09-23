const wrapper = document.querySelector('.wrapper')
const buttons = document.querySelectorAll('.stop')
const submit = document.querySelector('.submit')
const register = document.querySelector('.register')
let span
let isIn = true
let isOut = false

wrapper.addEventListener('mouseenter', (e) => {
    if (isIn) {
        let inX = e.offsetX
        let inY = e.offsetY
        let el = document.createElement('span')
        el.style.left = inX + 'px'
        el.style.top = inY + 'px'
        wrapper.appendChild(el)
        el.classList.add('in')
        el.classList.remove('out')
        span = document.querySelector('.wrapper span')
        isIn = false
        isOut = true
    }
}, false)

wrapper.addEventListener('mouseleave', (e) => {
    if (isOut) {
        let inX = e.offsetX
        let inY = e.offsetY
        span = document.querySelector('.wrapper span')
        span.classList.remove('in')
        span.classList.add('out')
        let out = document.querySelector('.out')
        out.style.left = inX + 'px'
        out.style.top = inY + 'px'
        isOut = false
        setTimeout(() => {
            wrapper.removeChild(span)
            isIn = true
        }, 500)
    }
}, false)



buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.stopPropagation()
    }, false)
})


submit.addEventListener('click', (e) => {
    e.stopPropagation()
    location.href = './index.html'

}, false)
register.addEventListener('click', (e) => {
    e.stopPropagation()
    location.href = './register.html'
}, false)

document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        location.href = './index.html'
    }
})
