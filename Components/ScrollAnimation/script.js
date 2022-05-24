const boxes = document.querySelectorAll('.box')

showBox()

document.addEventListener('scroll', showBox)



function showBox() {
    let scrollPoint = window.innerHeight * 4 / 5
    console.log(scrollPoint)
    boxes.forEach(box => {
    let boxTop = box.getBoundingClientRect().top

    if (boxTop < scrollPoint) {
        box.classList.add('show')
    } else {
        box.classList.remove('show')
    }
    } 
)}







    
