import React from 'react'

import './Css/app.min.css'

import Header from './Components/Header'
import Footer from './Components/Footer'

import { closeMenuFromOutside, resizeWindow } from './Components/Events/handleMenu'

function App() {
  window.addEventListener("click", closeMenuFromOutside)

  window.addEventListener("resize", resizeWindow)

  window.addEventListener("load", resizeWindow)

  return (
    <>
      <Header/>
      
      <Footer/>
    </>
  )
}

export default App
