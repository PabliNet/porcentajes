//import { optionsCheck } from "/js/_options.js";
export const numberics = e => {
  if (/[0-9.]/.exec(e.key)) {
    if (e.target.classList.contains('err')) {
      e.target.classList.remove('err')
    }
  }
  /*
  if (optionsCheck() != 'increased-percent' && /input-[1-2]/.exec(e.target.id)) {
    document.getElementById(`${e.target.id}-span`).textContent = document.getElementById(e.target.id).value
  }
  //*/
}

//*
export const arrows = e => {
  if (e.target.type == 'number' && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
    e.preventDefault();
}}
//*/