const labels = document.querySelectorAll('.input-label')

console.log(labels)

labels.forEach(label => {
    let spanLabel = label.innerText.split('').map((letter, index) => {
        return `<span style="transition-delay:${index * 50}ms">${letter}</span>`
    }).join('')

    console.log(spanLabel)
    label.innerHTML = spanLabel

});