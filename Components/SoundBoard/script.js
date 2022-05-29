const buttons = document.querySelector('.buttons')


sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

const buttonElements = sounds.forEach(sound => {
    let button = document.createElement("button")
    button.classList.add('sound-btn')
    buttons.appendChild(button)
    button.innerText = sound
   
    let audioToPlay = document.getElementById(sound)
    button.addEventListener('click', () => {
        stopAudios()
        audioToPlay.play()
        
    })
});

function stopAudios() {
    sounds.forEach(sound => {
        let audioToStop = document.getElementById(sound)
        audioToStop.pause()
        audioToStop.currentTime = 0
    });
}