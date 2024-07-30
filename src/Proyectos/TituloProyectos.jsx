import React from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';

export default function TituloProyectos() {
  return (
    <Box
      className="titulo-trabajos"
      display="flex"
      textAlign="start"
      flexDirection="column"
      w="80%"
      color="#FAFBFA"
      mt={{ base: '30px', md: '50px' }}
      fontSize={{ base: '16px', md: '20px' }}
      mb={{base: '3vh', md: '5vh'}}
    >
      <Text fontSize={{ base: '10px', md: '12px' }}>Conoce</Text>
      <Heading as="h2" size={{ base: 'md', md: 'lg' }}>
        MIS PROYECTOS
      </Heading>
    </Box>
  );
}
