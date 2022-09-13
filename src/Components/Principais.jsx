import React from 'react'

import Email from '../assets/imgs/0-principais/1.png'
import Youtube from '../assets/imgs/0-principais/2.png'
import Github from '../assets/imgs/0-principais/3.png'

import Clear from '../assets/imgs/0-principais/4.png'
import Codepen from '../assets/imgs/0-principais/5.png'
import Roadmap from '../assets/imgs/0-principais/6.png'

const Principais = () => {
  return (
    <main>
      <a href="https://mail.google.com/mail/u/0/h/dzzthrgw0may/?&" target='_blank'>
        <img src={ Email }/>
        <span>Email lite</span> 
      </a>

      <a href="https://www.youtube.com/" target='_blank'>
        <img src={ Youtube }/>
        <span>Youtube</span> 
      </a>

      <a href="https://github.com/psilva999" target='_blank'>
        <img src={ Github }/>
        <span>Github</span> 
      </a>

      <a href="https://login.clear.com.br/pit/login" target='_blank'>
        <img src={ Clear }/>
        <span>Clear corretora</span> 
      </a>

      <a href="https://codepen.io/your-work/" target='_blank'>
        <img src={ Codepen }/>
        <span>Codepen</span> 
      </a>

      <a href="https://roadmap.sh/" target='_blank'>
        <img src={ Roadmap }/>
        <span>Roadmap</span> 
      </a>
    </main>
  )
}

export default Principais
