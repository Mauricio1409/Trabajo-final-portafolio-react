import React from 'react';
import { Flex } from '@chakra-ui/react';
import TituloFormulario from './TituloFormulario';
import ContenedorFormulario from './ContenedorFormulario';

export default function ContenedorContactame() {
  return (
    <Flex
      className="contenedor-contactame"
      textAlign="center"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      w={{ base: '90%', md: '50%' }}
      minH="70vh"
      bg="#262626"
      borderRadius="20px"
      p="20px"
      color="#BEBBA8"
    >
      <TituloFormulario />
      <ContenedorFormulario />
    </Flex>
  );
}
