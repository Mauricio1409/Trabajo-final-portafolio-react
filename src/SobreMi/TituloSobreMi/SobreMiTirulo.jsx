import React from 'react';
import { Box, Text, Heading, Flex } from '@chakra-ui/react';

export default function SobreMiTitulo() {
  return (
    <Flex justifyContent="center">
      <Box
        className="sobre-mi-titulo"
        display="flex"
        alignItems="center"
        margin={{ base: '30px', md: '60px' }}
        width={{ base: '100%', md: '20%' }}
        textAlign={{ base: 'center', md: 'left' }}
      >
        <Box className="sobre-mi-titulo-texto" marginRight={{ base: '0', md: '10px' }}>
          <Text fontSize="10px">Conoce más</Text>
          <Heading as="h2" size="lg">SOBRE MI</Heading>
        </Box>
      </Box>
    </Flex>
  );
}
