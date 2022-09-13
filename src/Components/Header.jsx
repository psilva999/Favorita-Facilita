import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom"

import Logo from '../assets/svg/0-logo.svg'

import { handleMenu } from './Events/handleMenu'
import { links } from './Events/link'

const Header = () => {

  return (
    <header>
      <Router>
        <Link to='/' className='no-style'>
        <img src={ Logo } alt="logo"/> </Link>
      </Router>

      <nav>
        <div className='toggle-menu' id='toggle-menu' onClick={ handleMenu }>
          <div id='line'></div>
          <div id='line'></div>
          <div id='line'></div>
        </div>

        <ul className='menu' id='menu'>
          <Router>
            <Link to='/essenciais' className='no-style'>
              <li onClick={ links }>essenciais</li> </Link>

            <Link to='/invest-servicos' className='no-style'>
              <li>invest-serviços</li> </Link>

            <Link to='/codar' className='no-style'>
              <li>codar</li> </Link>

            <Link to='/galio' className='no-style'>
              <li>galio</li> </Link>
          </Router>

          
        </ul>
      </nav>

      <button>contact</button>
    </header>
  )
}

export default Header
