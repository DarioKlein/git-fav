export function placeholderEdit(message: string, isError: boolean) {
  const input = document.querySelector('input') as HTMLInputElement
  input.value = ''
  input.placeholder = message
  if (isError) {
    input.classList.add('error')
  } else {
    input.classList.remove('error')
  }
}
