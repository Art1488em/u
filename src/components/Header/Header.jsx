import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    
    <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/About'}>About</Link>


    </nav>
    
    </>
  )
}

export default Header