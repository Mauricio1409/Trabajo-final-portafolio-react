import React from 'react';
import NombreHeader from './NombreHeader';
import NavHeader from './NavHeader';
import Redes from './Redes';
import { Flex, Box } from "@chakra-ui/react";

function Header() {
  return (
    <Box
      as="header"
      display="flex"
      justifyContent="space-around"
      fontWeight="900"
      position="fixed"
      w="100vw"
      h="10vh"
      bg="#141A12"
      top="0"
      zIndex="1000" // Puedes ajustar el zIndex si es necesario
    >
      <NombreHeader></NombreHeader>
      <NavHeader></NavHeader>
      <Redes></Redes>

    </Box>
  )
}

export default Header
