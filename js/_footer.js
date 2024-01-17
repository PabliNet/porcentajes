export const createFooter = () => {
  const menu = document.createElement('span')
  const footer = document.createElement('footer')
  menu.id = 'svg-container'
  footer.appendChild(menu)
  document.querySelectorAll('body script')[0].insertAdjacentElement('beforebegin', footer)
}

export const loadLogo = fileSVG => {
  fetch(fileSVG)
  .then(response => response.text())
  .then(data => {
    // Crear un elemento SVG en el contenedor
    const container = document.getElementById('svg-container');
    container.innerHTML = data;
  })
  .catch(error => console.error('Error al cargar el SVG:', error));
}