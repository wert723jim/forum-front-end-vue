import axios from 'axios'
import Swal from 'sweetalert2'

const baseURL = 'http://localhost:3000/api'

const axiosInstance = axios.create({
  baseURL
})

// 發送 request 之前，使用 interceptors 處理
axiosInstance.interceptors.request.use(
  config => {
    // 取出 token
    const token = localStorage.getItem('token')

    if(token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
  },
  err => Promise.reject(err)
)

export const apiHelper = axiosInstance

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})