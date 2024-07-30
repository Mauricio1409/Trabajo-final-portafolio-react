import React from 'react';
import { Box } from '@chakra-ui/react';
import { Link } from 'react-scroll';

export default function NavFooter() {
  return (
    <Box
      as="nav"
      display={{ base: "none", md: 'flex' }}
      margin="0 5px"
      color="#BFE6AD"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        p="2px 5px"
        _hover={{ bg: '#BEE5AC', color: '#141A12' }}
        transition="1.5s"
      >
        <Link to="Hero" smooth={true} duration={500} style={{ textDecoration: 'none' }}>
          Hero
        </Link>
      </Box>
      <Box
        p="2px 5px"
        _hover={{ bg: '#BEE5AC', color: '#141A12' }}
        transition="1.5s"
      >
        <Link to="Sobre mi" smooth={true} duration={500} style={{ textDecoration: 'none' }}>
          Sobre mi
        </Link>
      </Box>
      <Box
        p="2px 5px"
        _hover={{ bg: '#BEE5AC', color: '#141A12' }}
        transition="1.5s"
      >
        <Link to="Habilidades" smooth={true} duration={500} style={{ textDecoration: 'none' }}>
          Habilidades
        </Link>
      </Box>
      <Box
        p="2px 5px"
        _hover={{ bg: '#BEE5AC', color: '#141A12' }}
        transition="1.5s"
      >
        <Link to="Proyectos" smooth={true} duration={500} style={{ textDecoration: 'none' }}>
          Proyectos
        </Link>
      </Box>
      <Box
        p="2px 5px"
        _hover={{ bg: '#BEE5AC', color: '#141A12' }}
        transition="1.5s"
      >
        <Link to="Contactame" smooth={true} duration={500} style={{ textDecoration: 'none' }}>
          Contactame
        </Link>
      </Box>
    </Box>
  );
}
