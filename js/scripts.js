import { clic, wheelScroll } from "/js/_mouse.js"
import { arrows, numberics } from "/js/_keyboard.js"
import { optionsChange } from "/js/_options.js"
import { result } from "/js/_main.js"
import { createMenu, links } from "/js/_menu.js"
import { createFooter, loadLogo } from "/js/_footer.js"
import { loadCopy } from "/js/_copy.js"

createMenu(links)
result()
createFooter()
loadLogo('/svg/logo.svg')
loadCopy('/svg/copy.svg')

addEventListener('click', clic)
addEventListener('wheel', wheelScroll, { passive:false })
addEventListener('keydown', arrows)
addEventListener('keyup', numberics)
addEventListener('change', optionsChange)