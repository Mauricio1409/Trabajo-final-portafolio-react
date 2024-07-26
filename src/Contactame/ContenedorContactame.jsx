import React from 'react'
import { Flex } from '@chakra-ui/react'
import TituloFormulario from './TituloFormulario'
import ContenedorFormulario from './ContenedorFormulario'
import BotonContactame from './BotonContactame'

export default function ContenedroContactame() {
  return (
    <Flex
      className="contenedor-contactame"
      display="flex"
      textAlign="center"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      minW="300px"
      w="35%"
      h="85%"
      bg="#262626"
      borderRadius="20px"
      p="20px"
      color="#BEBBA8"
    >
      <TituloFormulario />
      <ContenedorFormulario />
      <BotonContactame></BotonContactame>
    </Flex>
  )
}
