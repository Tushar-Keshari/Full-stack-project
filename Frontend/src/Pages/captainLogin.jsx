import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const captainLogin = () => {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [captain, setcaptain] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    setcaptain({ email:email, password:password })
    console.log(email, password)
    setEmail('')
    setPassword('')
  }

  return (
    <div>
       <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />

        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email"
            placeholder='email@example.com'
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

          <input
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            required type="password"
            placeholder='password'
          />

          <button
            className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
          >Login</button>

        </form>
        <p className='text-center'>New here? <Link to='/captainSignup' className='text-blue-600'>Create new Account</Link></p>
      </div>
      <div>
        <Link
          to='/userLogin'
          className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
        >Sign in as User</Link>
      </div>
    </div>
    </div>
  )
}

export default captainLogin