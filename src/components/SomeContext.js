import {useState, createContext, useContext} from 'react'

export const SomeContext = createContext({})
export const useSomeContext = () => useContext(SomeContext)

const SomeContextProvider = ({ children }) => {
  const [state, setState] = useState({ key: 'value' })
  return <SomeContext.Provider value={{ state, setState }}>
    {children}
  </SomeContext.Provider>
}

export default SomeContextProvider
