import { UserData } from '../html-handlers/constructor-elements'

export function verifyExistsFavorite({ id }: UserData) {
  const body = document.querySelector('.body') as HTMLDivElement
  const [, ...arr] = body.children
  const isExistsFav = arr.some(item => {
    const login = item.id
    return login === id.toString()
  })

  if (isExistsFav) {
    throw new Error('Este usuário já foi adicionado')
  }
}
