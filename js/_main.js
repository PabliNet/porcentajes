import { calculations } from "/js/_consts.js"
import { links } from "/js/_menu.js"

export const result = () => {
  calculations.forEach(e => {
    if (document.querySelector(`#${e}`)){
      const result = document.createElement('P')
      result.id = 'result'
      document.querySelector('div button').insertAdjacentElement('afterend', result)
      result.classList.add('result')
    }
  })
}

export const resultP = () => {
  switch (location.pathname) {
    case '/percent.html':
      document.getElementById('result').innerHTML = '<span id="quantity-span"></span> de <span id="total-span"></span> es <span id="result-span"></span>%.'
    break

    case '/quantity.html':
      document.getElementById('result').innerHTML = 'El <span id="percent-span"></span>% de <span id="total-span"></span> es <span id="result-span"></span>.'
    break

    case '/add-percent.html':
      document.getElementById('result').innerHTML = '<span id="percent-span"></span>% + <span id="total-span"></span> = <span id="result-span"></span>'
    break

    case '/subtract-percent.html':
      document.getElementById('result').innerHTML = '<span id="total-span"></span> - <span id="percent-span"></span>% = <span id="result-span"></span>'
    break

    case '/subtract-added-percent.html':
      document.getElementById('result').innerHTML = '<span id="total-span"></span> - <span id="percent-span"></span>% agregado = <span id="result-span"></span>'
    break
  
    case '/increased-percent.html':
      document.getElementById('result').innerHTML = 'Se incrementó el <span id="result-span"></span>%.'
    break

    case '/total.html':
      document.getElementById('result').innerHTML = 'Si <span id="quantity-span"></span> es el <span id="percent-span"></span>%, el 100% es <span id="result-span"></span>.'
    break
  }
}

export const loadClose = fileSVG => {
  if (!['/', 'index', 'index.html'].includes(location.pathname)) {
    fetch(fileSVG)
    .then(response => response.text())
    .then(data => {
      // Crear un elemento SVG en el contenedor
      const container = document.createElement('DIV')
      container.id = 'svg-close'
      container.innerHTML = data
      document.querySelector('main').appendChild(container)
    })
    .catch(error => console.error('Error al cargar el SVG:', error));
  }
}

export const index = () => {
  if (['/', 'index', 'index.html'].includes(location.pathname)) {
    links.forEach(({href, name, description}) => {
      const p = document.createElement('P')
      p.innerHTML = '<a href="' + href + `">${name}</a><br />${description}.`
      document.querySelector('main').classList.add('index')
      document.querySelector('main').appendChild(p)
    })
  }
}