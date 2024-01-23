import { getById, optionsCheck } from "/js/_options.js"

export function createMenu (data) {
  const menu = document.createElement('nav')
  data.forEach(({id, name}) => {
    const linkDiv = document.createElement('DIV')
    const radio = document.createElement('INPUT')
    const label = document.createElement('LABEL')
    radio.id = id
    radio.type = 'radio'
    radio.name = "options"
    label.setAttribute('for', id)
    label.textContent = name
    linkDiv.appendChild(radio)
    linkDiv.appendChild(label)
    menu.appendChild(linkDiv)
  })
  document.querySelector('body').insertAdjacentElement('afterbegin', menu)
  document.querySelectorAll('input[type="radio"]')[0].checked = true
  document.getElementById('h1').textContent = getById(document.querySelectorAll('input[type="radio"]')[0].id)
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