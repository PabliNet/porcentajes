export const createrHeader = text => {
  const header = document.createElement('HEADER')
  const h1 = document.createElement('h1')
  h1.textContent = text
  header.appendChild(h1)
  document.body.insertAdjacentElement('afterbegin', header)
}