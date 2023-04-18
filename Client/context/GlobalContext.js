import React, { createContext, useState } from 'react'

export const GlobalContext = createContext()
const GlobalContextProvider = (props) => {

  const [token, setToken] = useState('')
  const [user, setUser] = useState({
    'avatar': '',
    'email': '',
    'id': '',
    'lastName': '',
    'name': '',
    'token': '',
  })

  const [contextDataGlobal, setContextDataGlobal] = useState({
    navbarTheme: 'dark',
    showModal: false,
    modalActive: '',
  })

  return (
    <GlobalContext.Provider value={{ contextDataGlobal, setContextDataGlobal, token, setToken, user, setUser }}>
      {props.children}
    </GlobalContext.Provider>
  )
}
export default GlobalContextProvider
