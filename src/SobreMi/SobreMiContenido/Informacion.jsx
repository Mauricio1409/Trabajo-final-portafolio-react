import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export default function Informacion(props) {
  return (
    <Box p={{ base: '15px', md: '0 15px' }} width={{ base: '100%', md: '50%' }}>
      <Box as="h2" fontSize="18px" mb="5px" fontWeight="1000">{props.subtitulo}</Box>
      <Text as="p">{props.texto}</Text>
    </Box>
  );
}
