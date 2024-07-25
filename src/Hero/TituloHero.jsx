import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

export default function TituloHero() {
  return (
    <Box 
      margin="30px" 
      width="70%" 
      display="flex" 
      flexDirection="column" 
      justifyContent="center" 
      textAlign="center"
    >
      <Box 
        color="#F9F4DA" 
        margin="5px" 
        fontSize="45px" 
        display="flex" 
        justifyContent="center"
        alignItems="center"
      >
        <Heading as="h1" fontWeight="900">DESARROLLADOR FULL STACK</Heading>
        <Box 
          backgroundColor="#BFE6AD" 
          width="20px" 
          height="40px" 
        ></Box>
      </Box>
      <Box 
        display='flex'
        alignItems= "start"
        paddingLeft= "20%"
        fontSize="20px"
        color="#F9F4DA" 

      >
        <Text>Mauricio Torti</Text>
      </Box>
    </Box>
  );
}

