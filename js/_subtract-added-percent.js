export default function subtractAddedPercent (percent, total) {
  return total / (1 + (percent / 100))
}