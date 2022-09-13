import React from 'react'

import Header from './Components/Header'
// import Principais from './Components/Principais'
import Essenciais from './Components/Essenciais'

// import InvestServicos from './Components/InvestServicos'
// import Codar from './Components/Codar'

// import Galio from './Components/Galio'
import Footer from './Components/Footer'

import { closeMenuFromOutside, resizeWindow } from './Components/Events/handleMenu'

import './Css/app.min.css'

function App() {
  window.addEventListener("click", closeMenuFromOutside)

  window.addEventListener("resize", resizeWindow)

  window.addEventListener("load", resizeWindow)

  return (
    <>
      <Header/>
      {/* <Principais/> */}

      <Essenciais/>
      {/* <InvestServicos/> */}
      {/* <Codar/> */}

      {/* <Galio/> */}
      <Footer/>
    </>
  )
}

export default App
