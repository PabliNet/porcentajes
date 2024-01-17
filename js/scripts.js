import { clic, wheelScroll } from "/js/_mouse.js"
import { arrows, numberics } from "/js/_keyboard.js"
import { createrHeader } from "/js/_header.js"
import { index, result, resultP, loadClose } from "/js/_main.js"
import { createMenu, links } from "/js/_menu.js"
import { createFooter, loadLogo } from "/js/_footer.js"

addEventListener('click', clic)
addEventListener('wheel', wheelScroll, { passive:false })
addEventListener('keydown', arrows)
addEventListener('keyup', numberics)

//createrHeader('Bienvenidos a cálculos de porcentajes')
createMenu(links)
index(links)
result()
resultP()
loadClose('/svg/close.svg')
createFooter()
loadLogo('/svg/logo.svg')