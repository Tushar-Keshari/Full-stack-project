import React from 'react'
import { useState, createContext } from 'react'

export const UserDataContext = createContext()
const userContext = ({children}) => {

    const [user, setUser] = React.useState({
        email:'',
        fullname: {
            firstName:'',
            lastName:''
        }
    })

  return (
    <div>
        <UserDataContext.Provider value={{user, setUser}}>
            {children}
        </UserDataContext.Provider>
    </div>
  )
}

export default userContext