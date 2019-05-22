import axios from 'axios'

axios.defaults.headers = {
  Authorization: localStorage.getItem('TOKEN')
}

const isProduction = process.env.NODE_ENV === 'production'
const base_url = isProduction ? 'url_de_heroku' : 'http://localhost:3000/api'

export const login = auth => {
  return axios
    .post(`${base_url}/auth/login`, auth)
    .then(res => res.data)
    .catch(error => {
      throw error.response.data
    })
}

export const register = auth => {
  return axios
    .post(`${base_url}/auth/register`, auth)
    .then(res => res.data)
    .catch(error => {
      throw error.response.data
    })
}
