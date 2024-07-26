import React from 'react'
import { Box, Text, Heading } from '@chakra-ui/react'

export default function TituloProyectos() {
  return (
    <Box
      className="titulo-trabajos"
      h="15%"
      display="flex"
      textAlign="start"
      flexDirection="column"
      w="80%"
      color="#FAFBFA"
      mt="50px"
      fontSize="20px"
    >
      <Text fontSize="12px">Conoce</Text>
      <Heading as="h2" size="lg">MIS PROYECTOS</Heading>
    </Box>
  )
}

