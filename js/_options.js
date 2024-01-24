import { links } from "/js/_menu.js"

export const optionsCheck = () => {
  let r
  document.querySelectorAll('nav input[type="radio"]').forEach (op => {
    if (op.checked) {
      r = op.id
    }
  })
  return r
}

export const optionsChange = e => {
  function changeRadio(o) {
    document.getElementById('h1-selected').textContent = getById(o, 'name')
    document.querySelector('.button-result').id = o
    document.getElementById('label-1').textContent = getById(o, 'label1')
    document.getElementById('label-2').textContent = getById(o, 'label2')
    document.getElementById('input-1').value = ''
    document.getElementById('input-2').value = ''
    document.getElementById('result').value = ''
    document.getElementById(`select-${o}`).checked
    if (!document.getElementById('copy-span').classList.contains('no-press')) {
      document.getElementById('copy-span').classList.add('no-press')
    }
  }
  document.getElementsByName('options').forEach(option => {
    if (e.target.type == 'radio') {
      if (option.checked) {
        changeRadio(option.id)
        document.getElementById('input-1').focus()
      }
    }
  })
  if (e.target.id.slice(0, 7) == 'select-') {
    changeRadio(e.target.id.slice(7))
  }
}

export function getById(id, option) {
  const foundObject = links.find(item => item.id === id);
  if (foundObject) {
    switch (option) {
      case 'name':
        return foundObject.name
      case 'label1':
        return foundObject.label1

      case 'label2':
        return foundObject.label2

      case 'description':
        return foundObject.description

        default:
          console.error('clave no encontrada')
    }
  } else {
    console.error('Error')
    return 'Error'
  }
}