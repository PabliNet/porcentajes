function menuHider () {
  let m = document.createElement('DIV')
  m.classList.add('menu-hider')
  document.body.insertAdjacentElement('afterbegin', m)
  console.log(m)
}

menuHider()