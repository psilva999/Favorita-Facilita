import React from 'react'
import { NavLink } from "react-router-dom";

import Logo from '../assets/svg/0-logo.svg'

import { handleMenu } from './Events/handleMenu'
import { codar, essenciais, galio, investServicos, removeAll } from './Events/link'

const Header = () => {

  return (
    <header>
      <NavLink to='/' className='no-style'>
        <img src={ Logo } alt="logo" onClick={ removeAll }/> 
      </NavLink>

      <nav>
        <div className='toggle-menu' id='toggle-menu' onClick={ handleMenu }>
          <div id='line'></div>
          <div id='line'></div>
          <div id='line'></div>
        </div>

        <ul className='menu' id='menu'>
          <NavLink className='no-style' to="/essenciais">
            <li onClick={ essenciais }>essenciais</li> 
          </NavLink>

          <NavLink className='no-style' to="/invest-servicos">
            <li className='invest-servicos' onClick={ investServicos }>invest-serviços</li> 
          </NavLink>

          <NavLink className='no-style' to="/codar">
            <li className='codar' onClick={ codar }>codar</li> 
          </NavLink>

          <NavLink className='no-style' to="/galio">
              <li className='galio' onClick={ galio }>galio</li>
          </NavLink>
          
        </ul>
      </nav>

      <button>contact</button>
    </header>

  )
}

export default Header
