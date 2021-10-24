window.onload = function() {

  document.querySelectorAll('.paragraph').forEach(par => {
    par.addEventListener('click', () => {
      const inner_content = par.querySelectorAll('p, img')
      for(const p of inner_content) {
        p.classList.toggle('hidden')
      }
    })
  })

  document.getElementById('alert').addEventListener('click', e => {
    e.stopImmediatePropagation()
    alert("Wow! You clicked the button!")
  })
  
  let counter = 0
  const display = document.getElementById('display')
  document.getElementById('counter').addEventListener('click', e => {
    e.stopImmediatePropagation()
    counter++
    display.innerHTML = `Clicked: ${counter}`
  })

  document.getElementById('bomb').addEventListener('click', e => {
    e.stopImmediatePropagation()
    alert('Boom! What have you done?')
    e.target.remove()
  })

}