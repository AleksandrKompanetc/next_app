import axios from 'axios'
import { User } from '../types'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

export const submitUser = async (user: User) => {
  const response = await axios.post(API_URL, user)
  return response.data
}