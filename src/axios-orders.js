import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://react-burger-builder-3bab7.firebaseio.com/'
})

export default instance