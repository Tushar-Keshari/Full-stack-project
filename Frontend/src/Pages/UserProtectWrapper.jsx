import React from 'react'
import { useContext } from 'react'
// import { UserDataContext } from '../Context/userContext'
import { useNavigate } from 'react-router-dom'

const UserProtectWrapper = ({children}) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    if(!token){
        navigate('/userLogin')
    }

  return (
    <>
        {children}
    </>
  )
}

export default UserProtectWrapper