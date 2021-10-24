window.onload = function() {

  document.querySelectorAll('.paragraph').forEach(par => {
    par.addEventListener('click', () => {
      const inner_content = par.getElementsByTagName('p')
      for(const p of inner_content) {
        p.classList.toggle('hidden')
      }
    })
  })

  
}