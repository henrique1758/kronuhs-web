import axios, { AxiosError } from 'axios'
import { parseCookies, setCookie } from 'nookies'
import { signOut } from '../contexts/AuthContext'


export function setupApiClient(ctx = undefined) {
let cookies = parseCookies(ctx)
const { '@kronuhs:token': token } = cookies

const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization: `Bearer ${token}`
  }
})

api.interceptors.response.use(response => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      if (error.response.data?.code === 'token.expired') {
        cookies = parseCookies();

        const { '@kronuhs:refresh_token': refresh_token } = cookies;

        api.post("/blog/session/refresh-token", {
          refresh_token
        }).then(response => {
          const newToken = response.data.token;

          setCookie(undefined, '@kronuhs:token', newToken, {
            maxAge: 60 * 60 * 24 * 30,
            path: '/'
          });

          setCookie(undefined, '@kronuhs:refresh_token', response.data.refresh_token, {
              maxAge: 60 * 60 * 24 * 30,
              path: "/"
          });

          api.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
        })
      } else {
        signOut();        
      }
    }

    return Promise.reject(error)
  }
)

return api;
}