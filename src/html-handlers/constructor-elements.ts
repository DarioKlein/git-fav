import { removeFav } from '../functions/remove-fav'

export interface UserData {
  avatar_url: string
  name: string
  login: string
  public_repos: number
  followers: number
  id: number
}

export function constructHTML({ avatar_url, name, login, public_repos, followers, id }: UserData) {
  const body = document.querySelector('.body') as HTMLDivElement

  const user = document.createElement('div') as HTMLDivElement
  user.className = 'user'
  user.id = id.toString()

  const infoUser = document.createElement('div') as HTMLDivElement
  infoUser.className = 'info-users'

  const img = document.createElement('img') as HTMLImageElement
  img.src = avatar_url

  const info = document.createElement('div') as HTMLDivElement
  info.className = 'info'

  const titleInfo = document.createElement('h2') as HTMLHeadElement
  titleInfo.textContent = name

  const descriptionInfo = document.createElement('p') as HTMLParagraphElement
  descriptionInfo.textContent = login

  const repositories = document.createElement('p') as HTMLParagraphElement
  repositories.className = 'repositories'
  repositories.textContent = public_repos.toString()

  const follow = document.createElement('p') as HTMLParagraphElement
  follow.className = 'followers'
  follow.textContent = followers.toString()

  const actions = document.createElement('div') as HTMLDivElement
  actions.className = 'actions'

  const buttonActions = document.createElement('button') as HTMLButtonElement
  buttonActions.textContent = 'Remover'

  buttonActions.addEventListener('click', () => removeFav(id.toString()))

  actions.append(buttonActions)
  infoUser.append(img, info)
  info.append(titleInfo, descriptionInfo)
  user.append(infoUser, repositories, follow, actions)
  body.append(user)
}
