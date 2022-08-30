import React from 'react'
import {Navbar} from "react-bootstrap"

function Header() {
  return (
    <div>
       <Navbar className="navbar shadow-lg">
          <Navbar.Brand className='navbar-brand'>House-Price-Predictor</Navbar.Brand>
       </Navbar>
    </div>
  )
}

export default Header