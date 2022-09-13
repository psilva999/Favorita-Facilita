import React from 'react'

import Origamid from '../assets/imgs/3-codar/1.png'
import Alura from '../assets/imgs/3-codar/2.png'
import DesignCourse from '../assets/imgs/3-codar/3.png'

import ReactJs from '../assets/imgs/3-codar/4.png'
import Tableless from '../assets/imgs/3-codar/5.png'
import DeveloperMozilla from '../assets/imgs/3-codar/6.png'

import Regex from '../assets/imgs/3-codar/7.png'
import Tricks from '../assets/imgs/3-codar/8.png'

const Codar = () => {
  return (
    <main>
      <a href="https://www.origamid.com/" target='_blank'>
        <img src={ Origamid }/>
        <span>Origamid</span> 
      </a>

      <a href="https://www.alura.com.br/" target='_blank'>
        <img src={ Alura }/>
        <span>Alura</span> 
      </a>

      <a href="https://designcourse.com/" target='_blank'>
        <img src={ DesignCourse }/>
        <span>Design Course</span> 
      </a>

      <a href="https://reactjs.org/" target='_blank'>
        <img src={ ReactJs }/>
        <span>React.Js</span> 
      </a>

      <a href="https://tableless.com.br/" target='_blank'>
        <img src={ Tableless }/>
        <span>Tableless</span> 
      </a>

      <a href="https://developer.mozilla.org/pt-BR/" target='_blank'>
        <img src={ DeveloperMozilla }/>
        <span>Developer Mozilla</span> 
      </a>

      <a href="https://regexr.com/" target='_blank'>
        <img src={ Regex }/>
        <span>Regex</span> 
      </a>

      <a href="https://css-tricks.com/" target='_blank'>
        <img src={ Tricks }/>
        <span>css-tricks</span> 
      </a>
    </main>
  )
}

export default Codar