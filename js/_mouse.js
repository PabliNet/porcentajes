import { calculations } from "/js/_consts.js"
import percent from "/js/_percent.js"
import quantity from "/js/_quantity.js"
import addPercent from "/js/_add-percent.js"
import subtractPercent from "/js/_subtract-percent.js"
import subtractAddedPercent from "/js/_subtract-added-percent.js"
import increasedPercent from "/js/_increased-percent.js"
import total from "/js/_total.js"

export const clic = e => {
  e.preventDefault()
  if (e.target.tagName.toLowerCase() == 'a' && e.target.getAttribute('target') != '_blank') {
    e.preventDefault()
    location.replace(e.target.getAttribute('href'))
  }
  if (e.target.classList.contains('close-color')) {
    location.replace('/')
  }
  calculations.forEach(el => {
    if (e.target.id === el) {
      const p = document.getElementById('n-percent') ? document.getElementById('n-percent').value : 0
      const q = document.getElementById('n-quantity') ? document.getElementById('n-quantity').value : 0
      const t = document.getElementById('n-total') ? document.getElementById('n-total').value : 0

      let c = 0
      document.querySelectorAll('INPUT').forEach (input => {
        if (input.value == '') {
          c++
          if (!input.classList.contains('error')) {
            input.classList.add('error')
          }
        } else {
          if (input.classList.contains('error')) {
            input.classList.remove('error')
          }
        }
      })

      let res
      switch (e.target.id) {
        case 'percent':
          res = percent(q, t)
        break

        case 'quantity':
          res = quantity(p, t)
        break

        case 'add-percent':
          res = addPercent(p, t)
        break

        case 'subtract-percent':
          res = subtractPercent(p, t)
        break

        case 'subtract-added-percent':
          res = subtractAddedPercent(p, t)
        break

        case 'increased-percent':
          res = increasedPercent(q, t)
        break

        case 'total':
          res = total(p, q)
        break
      }
      document.getElementById('result-span').textContent = res
  }
  })

  if (e.target.classList.contains('logo-colors')) {
    document.querySelector('nav').classList.toggle('menu-show')
  } else if (e.target.tagName.toLowerCase() != 'a') {
    if (document.querySelector('nav').classList.contains('menu-show')) {
      document.querySelector('nav').classList.remove('menu-show')
    }
  }
},
//
wheelScroll = e => {
  if (e.target.type == 'number') {
    e.preventDefault()
  }
}