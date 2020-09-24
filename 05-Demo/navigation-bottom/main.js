const items = document.querySelectorAll('.item')
let current = 0
items.forEach((item, i) => {
    item.addEventListener('click', (e) => {
        if (current !== i) {
            items[i].setAttribute('data-state', 'selected')
            items[current].setAttribute('data-state', 'unselected')
        }
        current = i
    }, false)
})
