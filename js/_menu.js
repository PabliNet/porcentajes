import { getById, optionsCheck } from "/js/_options.js"

export function createMenu (data, el=document.body) {
  document.getElementById('h1-selected').textContent = getById('percent', 'name')
  const menu = document.createElement('nav')
  data.forEach(({id, name}) => {
    const linkDiv = document.createElement('DIV')
    const radio = document.createElement('INPUT')
    const label = document.createElement('LABEL')
    radio.type = 'radio'
    if (el.tagName.toLowerCase() == 'body') {
      radio.name = "options"
      radio.id = id
      label.setAttribute('for', id)
    } else {
      radio.name = "options-select"
      radio.id = `select-${id}`
      label.setAttribute('for', `select-${id}`)
    }
    label.textContent = name
    linkDiv.appendChild(radio)
    linkDiv.appendChild(label)
    menu.appendChild(linkDiv)
  })
  if (el.tagName.toLowerCase() == 'body') {
    menu.classList.add('menu')
    el.insertAdjacentElement('afterbegin', menu)
  } else {
    menu.classList.add('select')
    el.insertAdjacentElement('beforeend', menu)
  }
  document.querySelectorAll('input[type="radio"]')[0].checked = true
  document.getElementById('label-1').textContent = getById(optionsCheck(), 'label1')
  document.getElementById('label-2').textContent = getById(optionsCheck(), 'label2')
  document.querySelector('.button-result').id = document.querySelectorAll('input[type="radio"]')[0].id
}

export const links = await fetch('/js/_menu.json')
  .then(response => response.json())
  .then(data => data)
  .catch(error => {
    console.error('Error al cargar el archivo JSON:', error)
})