export default function increasedPercent (quantity, total) {
  let r = quantity / total,
  decimal = r.toString().split('.')[1] || '0',
  decimals = decimal.length
  return (r - 1).toFixed(decimals) * 100
}