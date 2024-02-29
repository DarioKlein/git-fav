export function removeFav(id: string) {
  const body = document.querySelector('.body') as HTMLDivElement
  const user = document.getElementById(id) as HTMLDivElement
  body.removeChild(user)

  if (body.childElementCount === 1) {
    const noFav = document.querySelector('.no-fav') as HTMLDivElement
    noFav.style.display = 'flex'
  }
}
