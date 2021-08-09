import axios from 'axios'
import Vue from 'vue'
import swal from './sweetalert'
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*'
const http = axios.create({
  baseURL: 'https://api-test.cerensa.com/v3/talents/',
  withCredentials: false,
  crossDomain: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST',
    'Content-Type': 'application/json'
  }
})
http.interceptors.response.use(req => {
  return req
}, error => {
  if (error.response.status === 404) {
    swal.fire({ icon: 'warning', text: 'Recurso não encontrado' })
  }
  return error
})
http.interceptors.response.use(response => {
  return response
}, error => {
  if (error.status === undefined) {
    swal.fire({ icon: 'info', text: 'Rede indisponível' })
  }
  return error
})
Vue.prototype.$http = http
export default http
