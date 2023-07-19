import axios from 'axios'
import apiConfig from '@/configs/apiConfig'
import { UserLoginPayload } from '@/redux/user/type'

const create = () => {
  const api = axios.create({
    baseURL: apiConfig.API_URL,
    timeout: apiConfig.API_TIMEOUT_MS,
    headers: apiConfig.HEADERS,
  })

  api.interceptors.request.use(async config => config)
  api.interceptors.response.use(
    response => {
      if (response && response.data) {
        return response.data
      }
      return response
    },
    error => {
      throw error
    },
  )

  const login = (payload: UserLoginPayload) => api.post('/driver/login', payload)

  return {
    login
  }
}

export default {create}
