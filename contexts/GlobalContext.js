import { createContext, useState } from 'react'

export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
  const [hideNav, setHideNav] = useState(false)

  const value = {
    hideNav,
    setHideNav,
  }
  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
}
