import axios from 'axios'
const request  = axios.create({
  method:'post',
  timeout:3000,
})
export default request