import axios from 'axios'
import { verifyExistsFavorite } from './verify-exists-favorite'
import { placeholderEdit } from './placeholder-error'

export async function showGitAccounts(accountName: string) {
  try {
    const url = `https://api.github.com/users/${accountName}`
    const { data } = await axios.get(url)

    verifyExistsFavorite(data)

    return data
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      placeholderEdit('Este usuário não foi encontrado, digite outro!', true)
    } else {
      placeholderEdit(error.message, true)
    }
  }
}
