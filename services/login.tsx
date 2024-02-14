import axios, { AxiosRequestConfig } from 'axios'

export const setLogin = async (email: string, password: string) => {
  console.log('chamou setLogin')
  console.log(
    'ANTES DE ENVIAR OS DADOS = email = ',
    email,
    'password = ',
    password,
  )
  // Create an AxiosRequestConfig object with your credentials
  const requestConfig: AxiosRequestConfig = {
    method: 'get',
    url: 'http://192.168.100.2:3001/api/users/login',
    params: { Email: email, Password: password },
  }
  try {
    const response = await axios(requestConfig)
    console.log('Server response:', response.data)
    return true
  } catch (error: any) {
    console.error('Error sending data to server:', error)
    return false
  }
}
