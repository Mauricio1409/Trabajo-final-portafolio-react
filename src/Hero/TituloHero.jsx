import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';



export default function TituloHero() {
  let nombre = "Mauricio Torti {dev}"
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
        display="flex" 
        justifyContent="center"
        alignItems="center"
      >
        <Heading as="h1" fontWeight="900" fontSize="60px">DESARROLLADOR FULL STACK</Heading>
        <Box 
          backgroundColor="#BFE6AD" 
          width="20px" 
          height="10vh" 
        ></Box>
      </Box>
      <Box 
        display='flex'
        alignItems= "start"
        paddingLeft= "5%"
        fontSize="15px"
        color="#F9F4DA"
        w="130px"

      >
        <Text>{nombre}</Text>
      </Box>
    </Box>
  );
}

