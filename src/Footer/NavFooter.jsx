import React from 'react'
import { Box, Link } from '@chakra-ui/react'

export default function NavFooter() {
  return (
    <Box
      as='nav'
      display="Flex"
      margin="0 5px" // Corregido: espaciado correcto
      color="#BFE6AD"
      fontSize="10px" // Usar camelCase en lugar de guiones
      justifyContent="center"
      alignItems="center" 
    >
      <Box
          p="2px 5px"
         _hover={{ bg: '#BEE5AC', color: '#141A12' }}
          transition="1.5s"
      >
      <Link href="#hero" textDecor="none" >Home</Link> {/* Corregido: Usar Link de Chakra UI y props para estilos */}
      </Box>
      <Box
          p="2px 5px"
         _hover={{ bg: '#BEE5AC', color: '#141A12' }}
      transition="1.5s"
      >
      <Link href="#sobre-mi" textDecor="none" >Sobre mi</Link>
      </Box>
      <Box
          p="2px 5px"
         _hover={{ bg: '#BEE5AC', color: '#141A12' }}
      transition="1.5s"
      >
      <Link href="#seccion-trabajos" textDecor="none" >Mis proyectos</Link>
      </Box>
      <Box

          p="2px 5px"
         _hover={{ bg: '#BEE5AC', color: '#141A12' }}
      transition="1.5s"
      >
      <Link href="#Seccion-contactame" textDecor="none">Contactame</Link>
      </Box> 
    </Box>
  )
}
