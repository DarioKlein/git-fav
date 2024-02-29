import './style.css'
import './html-handlers/effects'
import { showGitAccounts } from './functions/requests'
import { constructHTML } from './html-handlers/constructor-elements'
import { placeholderEdit } from './functions/placeholder-error'

const inputSearch = document.querySelector('#search > input') as HTMLInputElement
const buttonSearch = document.querySelector('#button-search') as HTMLButtonElement

buttonSearch.addEventListener('click', async () => {
  const accountName = inputSearch.value
  if (accountName) {
    const data = await showGitAccounts(accountName)
    if (data) {
      const noFav = document.querySelector('.no-fav') as HTMLDivElement
      noFav.style.display = 'none'
      constructHTML(data)
      placeholderEdit('Digite o Github username que quer favoritar', false)
    }
  } else {
    placeholderEdit('Digite um nome de usuário por favor', true)
  }
})
