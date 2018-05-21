import { store } from 'index'
import { vkTokenKey } from 'utils/storage'
import { logIn } from './actions'

window.addEventListener('storage', (event) => {
  if (event.key === vkTokenKey) {
    store.dispatch(logIn())
  }
})
