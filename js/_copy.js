export default function copy (element) {
  // Crear un área de transferencia (Clipboard)
  var clipboard = navigator.clipboard;

  // Copiar el texto al portapapeles
  clipboard.writeText(element.value).then(() => {
  }).catch(err => {
    console.error('Error al copiar al portapapeles:', err);
  });
}

export const loadCopy = fileSVG => {
  //*
  const container = document.getElementById('copy-span')
  //container.classList.add('copy')
  fetch(fileSVG)
  .then(response => response.text())
  .then(data => {
    // Crear un elemento SVG en el contenedor
    container.innerHTML = data;
  })
  .catch(error => console.error('Error al cargar el SVG:', error));
  document.getElementById('button-div').insertAdjacentElement('beforeend', container)
  //*/
}