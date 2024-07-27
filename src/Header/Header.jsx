import React from 'react';
import NombreHeader from './NombreHeader';
import NavHeader from './NavHeader';
import Redes from './Redes';
import HamburgerMenu from './HamburgerMenu';
import { Box, Flex } from '@chakra-ui/react';

function Header() {
  return (
    <Box
      as="header"
      display="flex"
      justifyContent=""
      alignItems="center"
      position="fixed"
      w="100vw"
      h="10vh"
      bg="#141A12"
      fontWeight="600"
      top="0"
      zIndex="1000"
      fontSize="12px"
      py="3vh"

    >
      <NombreHeader />
      <Box display={{ base: 'none', md: 'flex' }} justifyContent="space-around" w="66%">
        <NavHeader />
        <Redes />
      </Box>
      
      <HamburgerMenu />
    </Box>
  );
}

export default Header;
