export default function () {
  const resolution = document.createElement('SPAN')
  resolution.textContent = `${innerWidth} × ${innerHeight}`
  console.log(resolution.textContent)
  document.body.appendChild(resolution)
}