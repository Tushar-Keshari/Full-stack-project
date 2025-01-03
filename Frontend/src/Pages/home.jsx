import React from 'react'
import { Link } from 'react-router-dom'

const home = () => {
  return (
    <div >
    <div >
      <div >
        <h2>Get Started with Uber</h2>
        <Link to='/userLogin' >Continue</Link>
      </div>
    </div>
    </div>
  )
}

export default home