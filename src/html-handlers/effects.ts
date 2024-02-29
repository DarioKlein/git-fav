const buttonSearch = document.querySelector('#button-search') as HTMLButtonElement
const imgSearch = document.querySelector('#button-search > img') as HTMLImageElement

buttonSearch.addEventListener('mouseover', () => {
  imgSearch.src = '../assets/active-star.svg'
})

buttonSearch.addEventListener('mouseout', () => {
  imgSearch.src = '../assets/star.svg'
})
