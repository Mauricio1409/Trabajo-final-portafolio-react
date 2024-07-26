import React from 'react'
import { Box, Heading } from '@chakra-ui/react'

export default function TituloFormulario() {
  return (
    <Box
      className="titulo-contactme"
      w="100%"
      fontSize="30px"
      textAlign="center"
    >
      <Heading as="h2">Contactame</Heading>
    </Box>
  )
}

