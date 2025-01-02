import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import captainSignup from './Pages/captainSignup'
import captainLogin from './Pages/captainLogin'
import userSignup from './Pages/userSignup'
import userLogin from './Pages/userLogin'
import Home from './Pages/Home'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/captainSignup" element={<captainSignup />} />
        <Route path="/captainLogin" element={<captainLogin />} />
        <Route path="/userSignup" element={<userSignup />} />
        <Route path="/userLogin" element={<userLogin />} />
      </Routes>
    </Router>
  )
}

export default App 