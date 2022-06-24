const numbers = document.querySelectorAll('.number')



numbers.forEach(number => {
    number.innerText = "0"

    const incrementCounter = () => {
        //+ works the same as Number()
        const target = +number.getAttribute('data-number')
        const increment = target / 100
        const counter = +number.innerText
        if (counter < target) {
            number.innerText = `${Math.ceil(counter + increment)}`
            setTimeout(incrementCounter, 1)
        } else {
            number.innerText = `${target}`
        }
    }
    incrementCounter()
})







