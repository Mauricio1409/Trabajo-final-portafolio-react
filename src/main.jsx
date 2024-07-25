import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header/Header.jsx'
import Hero from './Hero/Hero.jsx'
import Skills from './Habilidades/Skills.jsx'
import Footer from './Footer/Footer.jsx'
import Contactame from './Contactame/Contactame.jsx'
import SobreMi from './SobreMi/SobreMi.jsx'
import Proyectos from './Proyectos/Proyectos.jsx'
import { ChakraProvider } from "@chakra-ui/react";


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <React.StrictMode>
    <Header />
    <Hero />
    <SobreMi/>
    <Skills />
    <Proyectos/>
    <Contactame />
    <Footer />
  </React.StrictMode>,
  </ChakraProvider>
  
)
