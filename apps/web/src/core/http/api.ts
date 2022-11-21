import axios, { AxiosResponse } from 'axios'
import {
  AppError,
  ClientError,
  ErrorType,
  InternalError,
  RequestError,
} from './errors'

const api = axios.create({
  baseURL: 'http://localhost:3333',
})

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (err: any) => {
    console.log(err.response.data)
    throw handleError(err)
  }
)

// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token')
//     if (token) {
//       config.headers
//         ? (config.headers.Authorization = `Bearer ${token}`)
//         : (config.headers = { Authorization: `Bearer ${token}` })
//     }
//     return config
//   },
// )

const getHeaders = () => {
  return {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }
}

const handleError = (err: any): ErrorType => {
  if (!err.response) {
    return new AppError(err.message)
  }
  if (err.response.status == 500) {
    return new InternalError('Internal Server Error', 500)
  }
  if (err.response.status == 403) {
    return new ClientError('Not Authorized', 403)
  }
  return new RequestError(err.response.data.message, err.response.status)
}

export async function getRequest<T>(path: string) {
  return await api.get<T>(path, getHeaders())
}

export async function postRequest<T>(path: string, data: any) {
  return await api.post<T>(path, data, getHeaders())
}

export async function putRequest<T>(path: string, data: any) {
  return await api.put<T>(path, data, getHeaders())
}

export async function deleteRequest<T>(path: string) {
  return await api.delete<T>(path, getHeaders())
}
