import axios from 'axios'

axios.defaults.headers = {
  Authorization: localStorage.getItem('TOKEN'),
  'Content-Type': 'multipart/form-data'
}

const isProduction = process.env.NODE_ENV === 'production'
const base_url = isProduction ? 'url_de_heroku' : 'http://localhost:3000/api'

export const getTodos = () => {
  return axios
    .get(`${base_url}/todos`)
    .then(res => res.data.todos)
    .catch(err => err)
}

export const createTodo = todo => {
  return axios
    .post(`${base_url}/todos`, todo)
    .then(res => res.data.todo)
    .catch(err => err)
}

export const deleteTodo = id => {
  return axios
    .delete(`${base_url}/todos/${id}`)
    .then(res => res.data.todo)
    .catch(err => err)
}

export const editTodo = todo => {
  return axios
    .patch(`${base_url}/todos/${todo._id}`, todo)
    .then(res => res.data.todo)
    .catch(err => err)
}
