import axios from 'axios'

const isProduction = process.env.NODE_ENV === 'production'
const base_url = isProduction
  ? 'https://proyecto-m3.herokuapp.com/api'
  : 'http://localhost:3000/api'

export const getTodos = () => {
  return axios
    .get(`${base_url}/todos`, {
      headers: {
        Authorization: localStorage.getItem('TOKEN')
      }
    })
    .then(res => res.data.todos)
    .catch(err => err)
}

export const createTodo = todo => {
  return axios
    .post(`${base_url}/todos`, todo, {
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(res => res.data.todo)
    .catch(err => err)
}

export const deleteTodo = id => {
  return axios
    .delete(`${base_url}/todos/${id}`, {
      headers: {
        Authorization: localStorage.getItem('TOKEN')
      }
    })
    .then(res => res.data.todo)
    .catch(err => err)
}

export const editTodo = todo => {
  return axios
    .patch(`${base_url}/todos/${todo._id}`, todo, {
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(res => res.data.todo)
    .catch(err => err)
}
