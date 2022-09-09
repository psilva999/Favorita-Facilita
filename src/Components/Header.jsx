import React from 'react'
import Logo from '../assets/svg/0-logo.svg'

const Header = () => {
  return (
    <header>
      <img src={ Logo } alt="logo"/>

      <ul>
        <li>essenciais</li>
        <li>invest-serviços</li>

        <li>codar</li>
        <li>galio</li>
      </ul>

      <button>contact</button>
    </header>
  )
}

export default Header
