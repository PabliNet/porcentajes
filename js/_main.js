export const result = () => {
  const resultP = document.createElement('P')
  const result = document.createElement('INPUT')
  result.id = 'result'
  document.getElementById('button-div').insertAdjacentElement('afterend', resultP)
  resultP.insertAdjacentElement('afterend', result)
  result.classList.add('result')
}