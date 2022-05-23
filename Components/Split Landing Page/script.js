const samsung = document.querySelector('.samsung-right');
const apple = document.querySelector('.apple-left');
const container = document.querySelector('.container');


samsung.addEventListener('mouseenter', () => {
    samsung.classList.add('expanded')
    apple.classList.add('expanded-other')
})

samsung.addEventListener('mouseleave', () => {
    samsung.classList.remove('expanded')
    apple.classList.remove('expanded-other')
})


apple.addEventListener('mouseenter', () => {
    apple.classList.add('expanded')
    samsung.classList.add('expanded-other')
})

apple.addEventListener('mouseleave', () => {
    apple.classList.remove('expanded')
    samsung.classList.remove('expanded-other')
})
