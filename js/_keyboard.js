export const numberics = e => {
if (e.target.tagName == 'INPUT') {
    switch (e.target.id) {
      case 'n-quantity':
        document.getElementById('quantity-span').textContent = document.getElementById('n-quantity').value
      break

      case 'n-percent':
        document.getElementById('percent-span').textContent = document.getElementById('n-percent').value
      break

      case 'n-total':
        document.getElementById('total-span').textContent = document.getElementById('n-total').value
      break
    }
  }
}


export const arrows = e => {
  if (e.target.type == 'number' && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
    e.preventDefault();
}}