import React from 'react'
import Logo from '../assets/svg/0-logo.svg'
import { handleMenu } from './Events/handleMenu'

const Header = () => {
  return (
    <header>
      <img src={ Logo } alt="logo"/>

      <nav>
        <div className='toggle-menu' id='toggle-menu' onClick={ handleMenu }>
          <div id='line'></div>
          <div id='line'></div>
          <div id='line'></div>
        </div>

        <ul className='menu' id='menu'>
          <li>essenciais</li>
          <li>invest-serviços</li>

          <li>codar</li>
          <li>galio</li>
        </ul>
      </nav>

      <button>contact</button>
    </header>
  )
}

export default Header
