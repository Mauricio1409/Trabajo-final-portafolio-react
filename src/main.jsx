import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header/Header.jsx'
import Hero from './Hero/Hero.jsx'
import Skills from './Habilidades/Skills.jsx'
import Footer from './Footer/Footer.jsx'
import Contactame from './Contactame/Contactame.jsx'
import SobreMi from './SobreMi/SobreMi.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Hero />
    <SobreMi></SobreMi>
    <Skills />
    <Contactame />
    <Footer />
  </React.StrictMode>,
)
