import React, { createContext,useState } from 'react'

export const Types = createContext()

const Context = ({children}) => {
    const [type,setType] = useState(null)

  return (
    <Types.Provider value={{type,setType}}>
        {children}
    </Types.Provider>
  )
}

export default Context