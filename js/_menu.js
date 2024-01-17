export function createMenu (data) {
  const menu = document.createElement('nav')
  data.forEach(({href, name}) => {
    const linkDiv = document.createElement('DIV')
    const link = document.createElement('A')
    link.href = href
    link.textContent = name
    linkDiv.appendChild(link)
    menu.appendChild(linkDiv)
  })
  document.querySelector('body').insertAdjacentElement('afterbegin', menu)
}

export const links = await fetch('/js/_menu.json')
  .then(response => response.json())
  .then(data => data)
  .catch(error => {
    console.error('Error al cargar el archivo JSON:', error)
  })