import React from 'react';
import { Box } from '@chakra-ui/react';
import ParteLenguajes from './ParteLenguajes/ParteLenguajes';
import ParteRedes from './ParteRedes/ParteRedes';

export default function CuadroPrincipal() {
  return (
    <Box
      width={{ base: "100%", md: '75%' }}
      height={{ base: "auto", md: "50vh" }}
      backgroundColor="#BFE6AD"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      margin="30px"
      marginTop="50px"
    >
      <ParteRedes />
      <ParteLenguajes />
    </Box>
  );
}
