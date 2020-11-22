import axios from 'axios'

const client = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com/',
  timeout: 1000,
})

export default client
