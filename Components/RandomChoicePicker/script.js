const textarea = document.getElementById('textarea')
const choices = document.querySelector('.choices')


//cursor on text area upon loading
textarea.focus()


textarea.addEventListener('keyup', e => {
    //create choices
    makeTags(e.target.value)

    //Start randomizer
    if (e.code === "Enter") {
        highlighPicks()
        clearInput()
    }
})

function makeTags(input) {
    const picks = input.split(',').filter(pick => pick.trim() !== "").map(pick => pick.trim())

    choices.innerHTML = ''

    picks.forEach(pick => {
        const pickEl = document.createElement('span')
        choices.appendChild(pickEl)
        pickEl.innerHTML = pick
        pickEl.classList.add('choice')
    });
}


function highlighPicks() {
    //how many highlights
    const repeat = 25
    

    //every 100ms add 'active' class to a random choice
    const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * choices.childNodes.length)
        const randomChoice = choices.childNodes[randomIndex]
        randomChoice.classList.add('active')
        setTimeout(()=> {
            randomChoice.classList.remove('active')
        }, 100)
    }, 100)

    // pick final choice
    setTimeout(() => {
        clearInterval(interval)
        const randomIndex = Math.floor(Math.random() * choices.childNodes.length)
        const randomChoice = choices.childNodes[randomIndex]
        randomChoice.classList.add('active')
    }, repeat * 100);

}


function clearInput() {
    textarea.value = ""
}

