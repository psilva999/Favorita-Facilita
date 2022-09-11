import React from 'react'

import Linkedin from '../assets/svg/2-linkedin.svg'
import Github from '../assets/svg/3-github.svg'
import Telegram from '../assets/svg/4-telegram.svg'

const Footer = () => {
  return (
    <footer>
      <span>@ todos os direitos reservados</span>

      <div>
        <a href="https://www.linkedin.com/in/psilva999/">
          <img src={ Linkedin }/> </a>

        <a href="https://github.com/psilva999">
          <img src={ Github }/> </a>

        <a href="https://t.me/psilva999">
          <img src={ Telegram }/> </a>
      </div>
    </footer>

  )
}

export default Footer
