import { calculations } from "/js/_consts.js"
import percent from "/js/_percent.js"
import quantity from "/js/_quantity.js"
import addPercent from "/js/_add-percent.js"
import subtractPercent from "/js/_subtract-percent.js"
import subtractAddedPercent from "/js/_subtract-added-percent.js"
import increasedPercent from "/js/_increased-percent.js"
import total from "/js/_total.js"
import copy from "/js/_copy.js"

export const clic = e => {
  if (e.target.tagName.toLowerCase() == 'a' && e.target.getAttribute('target') != '_blank') {
    e.preventDefault()
  }
  if (e.target.tagName.toLowerCase() == 'button' && calculations.includes(e.target.id)) {
    const input1 = document.getElementById('input-1') ? document.getElementById('input-1').value : undefined
    const input2 = document.getElementById('input-2') ? document.getElementById('input-2').value : undefined
    calculations.forEach(el => {
      if (e.target.id === el) {
        let c = 0
        document.querySelectorAll('INPUT[type="number"]').forEach (input => {
          if (input.value == '') {
            c++
            if (!input.classList.contains('err')) {
              input.classList.add('err')
            }
          } else {
            if (input.classList.contains('err')) {
              input.classList.remove('err')
            }
          }
        })
      }
    })
    let res
    switch (e.target.id) {
      case 'percent':
        res = `${percent(input1, input2)}%`
      break

      case 'quantity':
        res = `${quantity(input1, input2)}`
      break

      case 'add-percent':
        res = `${addPercent(input1, input2)}`
      break

      case 'subtract-percent':
        res = `${subtractPercent(input2, input1)}`
      break

      case 'subtract-added-percent':
        res = `${subtractAddedPercent(input2, input1)}`
      break

      case 'increased-percent':
        res = `${increasedPercent(input2, input1)}%`
      break

      case 'total':
        res = `${total(input2, input1)}`
      break
    }
    if (input1.length !== 0 && input2.length !== 0) {
    document.getElementById('result').value = res
      if (document.getElementById('copy-span').classList.contains('no-press')) {
        document.getElementById('copy-span').classList.remove('no-press')
      }
    }
  }
  if (e.target.classList.contains('logo-colors')) {
    document.querySelector('body > nav').classList.toggle('menu-show')
  } else {
    if (document.querySelector('body > nav').classList.contains('menu-show')) {
      document.querySelector('body > nav').classList.remove('menu-show')
    }
  }
  if (['h1', 'h1-selected'].includes(e.target.id)) {
    document.querySelector('.select').classList.toggle('select-show')
  } else {
    if (document.querySelector('.select').classList.contains('select-show')) {
      document.querySelector('.select').classList.remove('select-show')
    }
  }
  if (e.target.id == 'remove') {
    document.querySelectorAll('.form input').forEach(el => {
      el.value = ''
      if (el.classList.contains('err')) {
        el.classList.remove('err')
      }
    })
    if (!document.getElementById('copy-span').classList.contains('no-press')) {
      document.getElementById('copy-span').classList.add('no-press')
    }
  }
  if (e.target.getAttribute('href') == '#copy') {
    copy(document.getElementById('result'))
  }
},
//
wheelScroll = e => {
  if (e.target.type == 'number') {
    e.preventDefault()
  }
}