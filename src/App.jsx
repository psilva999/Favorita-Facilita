import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './Components/Header'
import Principais from './Components/Principais'

import Essenciais from './Components/Essenciais'
import InvestServicos from './Components/InvestServicos'

import Codar from './Components/Codar'
import Galio from './Components/Galio'

import Footer from './Components/Footer'
import Nan from './Components/Nan'

import { closeMenuFromOutside, resizeWindow } from './Components/Events/handleMenu'
import './Css/app.min.css'

function App() {
  window.addEventListener("click", closeMenuFromOutside)

  window.addEventListener("resize", resizeWindow)

  window.addEventListener("load", resizeWindow)

  return (
    <>
      <Header/>

      <Routes>
        <Route path='/' element={ <Principais/> }/>
        <Route path='essenciais' element={ <Essenciais/> }/>

        <Route path='invest-servicos' element={ <InvestServicos/> }/>
        <Route path='codar' element={ <Codar/> }/>

        <Route path='galio' element={ <Galio/> }/>
        <Route path='*' element={ <Nan/> }/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App
