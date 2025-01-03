// import { useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import home from './Pages/home.jsx'
import userLogin from './Pages/userLogin'
import userSignup from './Pages/userSignup'
import captainLogin from './Pages/captainLogin'
import captainSignup from './Pages/captainSignup'
import Start from './Pages/start.jsx'
import UserProtectWrapper from './Pages/UserProtectWrapper.jsx'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" Component={Start} />
        <Route path="/userLogin" Component={userLogin} />
        <Route path="/userSignup" Component={userSignup} />
        <Route path="/captainLogin" Component={captainLogin } />
        <Route path="/captainSignup" Component={captainSignup} />
        <Route path="/home" Component={
          <UserProtectWrapper>
            <home />
          </UserProtectWrapper>
        } />
      </Routes>
    </div>
  )
}

export default App
