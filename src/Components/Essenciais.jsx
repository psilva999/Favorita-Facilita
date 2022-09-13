import React from 'react'

import Quora from '../assets/imgs/1-essenciais/1.png'
import Medium from '../assets/imgs/1-essenciais/2.png'
import Linkedin from '../assets/imgs/1-essenciais/3.jpg'

import Dev from '../assets/imgs/1-essenciais/4.png'
import Exame from '../assets/imgs/1-essenciais/5.png'

import Infomoney from '../assets/imgs/1-essenciais/6.png'
import Canva from '../assets/imgs/1-essenciais/7.png'

const Essenciais = () => {
  return (
    <main>
      <a href="https://www.quora.com/" target='_blank'>
        <img src={ Quora }/>
        <span>Quora</span> 
      </a>

      <a href="https://medium.com/" target='_blank'>
        <img src={ Medium }/>
        <span>Medium</span> 
      </a>

      <a href="https://www.linkedin.com/in/psilva999/" target='_blank'>
        <img src={ Linkedin }/>
        <span>Linkedin</span> 
      </a>

      <a href="https://dev.to/" target='_blank'>
        <img src={ Dev }/>
        <span>Dev</span> 
      </a>

      <a href="https://exame.com/" target='_blank'>
        <img src={ Exame }/>
        <span>Exame</span> 
      </a>

      <a href="https://www.infomoney.com.br/" target='_blank'>
        <img src={ Infomoney }/>
        <span>Infomoney</span> 
      </a>

      <a href="https://www.canva.com/pt_br/" target='_blank'>
        <img src={ Canva }/>
        <span>Canva</span> 
      </a>
    </main>
  )
}

export default Essenciais