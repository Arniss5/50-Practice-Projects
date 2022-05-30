const joke = document.querySelector('.joke')
const button = document.querySelector('.next-btn')


const config = {
    headers: {
        "Accept": "application/json"
    }
}


function generateJoke() {
    fetch('https://icanhazdadjoke.com/', config)
    .then(response => response.json())
    .then(data => {
        joke.innerText = data.joke
    })
}

generateJoke()

button.addEventListener('click', generateJoke)
