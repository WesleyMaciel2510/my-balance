import axios from 'axios'

export const sendDataToServer = async (
  name: string,
  email: string,
  username: string,
  password: string,
) => {
  console.log('chamou sendDataToServer')
  const dataToSend = {
    ID: 11,
    Name: name,
    UserName: username,
    Password: password,
    Email: email,
    AccessLevel: 1,
    IsActive: true,
  }
  console.log('DATA = ', dataToSend)
  try {
    const response = await axios.post(
      'http://192.168.100.2:3001/api/users',
      dataToSend,
    )
    console.log('Server response:', response.data)
    return true
  } catch (error: any) {
    console.error('Error sending data to server:', error)
    return false
  }
}
