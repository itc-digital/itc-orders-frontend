export const vkTokenKey = 'vkToken'

export const maybeReadToken = () => localStorage.getItem(vkTokenKey)

export const writeToken = (token) => {
  localStorage.setItem(vkTokenKey, token)
}

export const eraseToken = () => {
  localStorage.removeItem(vkTokenKey)
}
