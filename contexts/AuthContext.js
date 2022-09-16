import axios from 'axios'
import { createContext, useEffect, useReducer } from 'react'
import { LOCAL_STORAGE_TOKEN_NAME } from '../constants'
import { authReducer } from '../reducer/authReducer'
import setAuthToken from '../utils/setAuthToken'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {
    authLoading: false,
    isAuthenticated: false,
    user: null,
  })

  async function loadUser() {
    if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
      setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME])
    }

    try {
      const response = await axios.get('/api/user/auth', {
        headers: {
          Authorization: localStorage[LOCAL_STORAGE_TOKEN_NAME],
        },
      })
      if (response.data.success) {
        dispatch({
          type: 'SET_AUTH',
          payload: {
            isAuthenticated: true,
            user: response.data.user,
          },
        })
      }
    } catch (error) {
      console.log(error)
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
      setAuthToken(null)
      dispatch({
        type: 'SET_AUTH',
        payload: { isAuthenticated: false, user: null },
      })
    }
  }

  useEffect(() => {
    loadUser()
  }, [])

  // Login
  const loginUser = async (userForm) => {
    try {
      const response = await axios.post(`/api/user/auth/login`, userForm)
      if (response.data.success) {
        localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.accessToken)
      }

      await loadUser()

      return response.data
    } catch (error) {
      if (error.response.data) return error.response.data
      else return { success: false, message: error.message }
    }
  }

  // Register
  const registerUser = async (userForm) => {
    try {
      const response = await axios.post(`/api/user/auth/register`, userForm)
      if (response.data.success)
        localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.accessToken)

      await loadUser()

      return response.data
    } catch (error) {
      if (error.response.data) return error.response.data
      else return { success: false, message: error.message }
    }
  }

  // Logout
  const logOutUser = () => {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
    console.log('Logged out')
    dispatch({
      type: 'SET_AUTH',
      payload: { isAuthenticated: false, user: null },
    })
  }

  // Context data
  const authContextData = {
    loginUser,
    registerUser,
    logOutUser,
    authState,
  }
  return (
    <>
      <AuthContext.Provider value={authContextData}>{children}</AuthContext.Provider>
    </>
  )
}
