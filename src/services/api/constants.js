import { objectToQueryString } from 'utils/objectToQueryString'

const authParams = {
  client_id: process.env.REACT_APP_VK_CLIENT_ID,
  display: 'page',
  redirect_uri: `${process.env.REACT_APP_HOSTNAME}/oauth_callback`,
  response_type: 'token',
  v: '5.67',
  scope: 'offline',
}

const authQuery = objectToQueryString(authParams)

export const oAuthUrl = `https://oauth.vk.com/authorize?${authQuery}`
export const apiHost = process.env.REACT_APP_API_HOSTNAME
