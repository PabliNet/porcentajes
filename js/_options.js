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
  document.getElementsByName('options').forEach(op => {
    if (e.target.type == 'radio') {
      if (op.checked) {
        document.getElementById('h1').textContent = getById(op.id)
        document.querySelector('.button-result').id = op.id
        document.getElementById('label-1').textContent = getById(op.id, 'label1')
        document.getElementById('label-2').textContent = getById(op.id, 'label2')
        document.getElementById('input-1').value = ''
        document.getElementById('input-2').value = ''
        document.getElementById('result').value = ''
        if (!document.getElementById('copy-span').classList.contains('no-press')) {
          document.getElementById('copy-span').classList.add('no-press')
        }
      }
    }
  })
}

export function getById(id, option) {
  const foundObject = links.find(item => item.id === id);
  if (foundObject) {
    switch (option) {
      case undefined:
        return foundObject.name
//*
      case 'label1':
        return foundObject.label1

      case 'label2':
        return foundObject.label2
//*/
    }

  } else {
    return 'Error'
  }
}