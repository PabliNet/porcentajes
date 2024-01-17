export const inputsRequires = () => {
  if (document.querySelector('INPUT')) {
    document.querySelectorAll('INPUT').forEach (input => {
      input.required
    })
  }
}