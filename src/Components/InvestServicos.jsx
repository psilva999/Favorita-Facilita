import React from 'react'

import Suno from '../assets/imgs/2-invest-servicos/1.png'
import MercadoLivre from '../assets/imgs/2-invest-servicos/2.png'
import Rico from '../assets/imgs/2-invest-servicos/3.png'

import Insider from '../assets/imgs/2-invest-servicos/4.png'
import Amazon from '../assets/imgs/2-invest-servicos/5.png'

import Barba from '../assets/imgs/2-invest-servicos/6.png'
import Manual from '../assets/imgs/2-invest-servicos/7.png'

const InvestServicos = () => {
  return (
    <main>
      <a href="https://investidor.suno.com.br" target='_blank'>
        <img src={ Suno }/>
        <span>Suno</span> 
      </a>

      <a href="https://www.mercadolivre.com.br/" target='_blank'>
        <img src={ MercadoLivre }/>
        <span>Mercado Livre</span> 
      </a>

      <a href="https://www.rico.com.vc/" target='_blank'>
        <img src={ Rico }/>
        <span>Rico</span> 
      </a>

      <a href="https://www.insiderstore.com.br/" target='_blank'>
        <img src={ Insider }/>
        <span>Insider</span> 
      </a>

      <a href="https://www.amazon.com.br/" target='_blank'>
        <img src={ Amazon }/>
        <span>Amazon</span> 
      </a>

      <a href="https://www.barbabrava.com.br/" target='_blank'>
        <img src={ Barba }/>
        <span>Barba Brava</span> 
      </a>

      <a href="https://www.manual.com.br/" target='_blank'>
        <img src={ Manual }/>
        <span>Manual</span> 
      </a>
    </main>
  )
}

export default InvestServicos