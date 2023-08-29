import axios from 'axios'
import dotenv from 'dotenv';
dotenv.config({ path: '../../../env' }); 

const API_URL = process.env.API_URL_ENV + "/api/users/";

// const API_URL = "https://notifybeta.onrender.com/api/users/"; OK!!!
// const API_URL = '/api/users/'

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
}

export default authService
