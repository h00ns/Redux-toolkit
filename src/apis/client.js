import axios from "axios"

const baseURL = `${process.env.REACT_APP_BASE_URL}`

const api = axios.create({
  baseURL: baseURL,
  timeout: 180000,
  headers: {
    'Content-Type': 'application/json',
  }
})

export default api