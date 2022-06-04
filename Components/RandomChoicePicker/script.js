const textarea = document.getElementById('textarea')
const choices = document.querySelector('.choices')


//cursor on text area upon loading
textarea.focus()


textarea.addEventListener('keyup', e => {
    //create choices
    makeTags(e.target.value)

    //Start randomizer
    if (e.key === "Enter") {
        setTimeout(() => {
            e.target.value = ''
        }, 10)
        highlighPicks()
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
        
        const randomChoice = pickRandomChoice()
        randomChoice.classList.add('active')

        setTimeout(()=> {
            randomChoice.classList.remove('active')
        }, 100)
    }, 100)

    // pick final choice
    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomChoice = pickRandomChoice()
            randomChoice.classList.add('active')
        }, 100)
    }, repeat * 100);

}

function pickRandomChoice() {
    const tags = document.querySelectorAll('.choice')
    return tags[Math.floor(Math.random() * tags.length)]
}


