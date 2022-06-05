const joke = document.querySelector('.joke')
const button = document.querySelector('.next-btn')
const loader = document.querySelector('.loader')


const config = {
    headers: {
        "Accept": "application/json"
    }
}


function generateJoke() {
    fetch('https://icanhazdadjoke.com/', config)
    .then(response => {
        loading()
        return response.json()})
    .then(data => {
        joke.innerText = data.joke
        complete()
    })
}

generateJoke()

button.addEventListener('click', generateJoke)

function loading() {
    loader.classList.remove('complete')
}

function complete() {
    loader.classList.add('complete')
}