import React from 'react'
import { Box, Text, Heading, Flex } from '@chakra-ui/react'

export default function SobreMiTirulo() {
  return (
    <Flex 

    >
      
      <Box className="sobre-mi-titulo" display="flex" alignItems="center" margin="60px" width="20%">
      <Box className="sobre-mi-titulo-texto" marginRight="10px">
        <Text fontSize="10px">Conoce más</Text>
        <Heading as="h2" size="lg">SOBRE MI</Heading>
      </Box>  
    </Box>
    
    </Flex>
    
    
  )
}
