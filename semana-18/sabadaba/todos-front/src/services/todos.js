import axios from 'axios';

const isProduction = process.env.NODE_ENV === "production"
const base_url = isProduction ? "url_de_heroku" : "http://localhost:3000/api";

export const getTodos = () => {};

export const createTodo = todo => {
    return axios.post(`${base_url}/todos`, todo)
    .then(res => res.data.todo)
    .catch(err => err)
};