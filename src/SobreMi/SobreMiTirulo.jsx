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
    <Box borderTopColor= "#F8FAF9" 
    borderRightColor="#F8FAF9" 
    borderLeftColor="#F8FAF9" 
    border= "solid 5px" 
    w="80%" 
    borderBottomColor="#141A12" h="30%"> 

    </Box>
    
    </Flex>
    
    
  )
}
