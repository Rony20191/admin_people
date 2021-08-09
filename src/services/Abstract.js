import http from '../plugins/axios'
import { setLoading } from '../utils'

export default class Abstract {
  constructor () {
    this._http = http
    this._loading = setLoading
  }

  async get (uri, params) {
    try {
      this._loading(true)
      const response = await this._http.get(uri, { params: params })
      return Promise.resolve(response)
    } catch (error) {
      return Promise.reject(error)
    } finally {
      this._loading(false)
    }
  }

  async post (uri, params) {
    try {
      const response = await this._http.post(uri, params)
      return Promise.resolve(response)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async put (uri, params) {
    try {
      const response = await this._http.put(uri, params)
      return Promise.resolve(response)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async delete (uri, params) {
    try {
      const response = await this._http.delete(uri, params)
      return Promise.resolve(response)
    } catch (error) {
      return Promise.reject(error)
    }
  }
}
