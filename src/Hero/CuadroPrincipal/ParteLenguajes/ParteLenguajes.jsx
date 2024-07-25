import React from 'react';
import { Box } from '@chakra-ui/react';
import NombresLenguajes from './DivisionLenguajes/NombresLenguajes';
import TextoLenguajes from './DivisionLenguajes/TextoLenguajes';

export default function ParteLenguajes() {
  return (
    <Box 
      width="70%" 
      backgroundColor="#262626" 
      display="flex" 
      flexDirection="column" 
      justifyContent="end" 
      letterSpacing="0" 
      height="100%"
    >
      <NombresLenguajes />
      <TextoLenguajes />
    </Box>
  );
}
