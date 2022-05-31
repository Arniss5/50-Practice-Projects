
const container = document.querySelector('.container')

window.addEventListener("keydown", event => {
    const element = `<div class="table">
    <div class="box">
      ${event.key}
      <small>event.key</small>
    </div>
    <div class="box">
      ${event.keyCode}
      <small>event.keyCode</small>
    </div>
    <div class="box">
      ${event.code}
      <small>event.code</small>
    </div>
  </div>`

  container.innerHTML = element
})

