import React from 'react';
import { Box } from '@chakra-ui/react';
import ParteLenguajes from './ParteLenguajes/ParteLenguajes';
import ParteRedes from './ParteRedes/ParteRedes';

export default function CuadroPrincipal() {
  return (
    <Box
      width="75%"
      height="50vh"
      backgroundColor="#BFE6AD"
      display="flex"
      margin="30px"
      marginTop="50px"
    >
      <ParteRedes />
      <ParteLenguajes />
    </Box>
  );
}
