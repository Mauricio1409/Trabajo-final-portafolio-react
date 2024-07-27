import React from 'react';
import { Box, Link } from '@chakra-ui/react';

export default function NavHeader() {
  return (
    <Box
      as='nav'
      display="flex"
      margin="0 5px"
      color="#BFE6AD"

      justifyContent="center"
      alignItems="center"
    >
      {['#Hero', '#Sobre-mi', '#Trabajos', '#Contactame'].map((href, index) => (
        <Box
          key={index}
          p="2px 5px"
          _hover={{ bg: '#BEE5AC', color: '#141A12' }}
          transition="1.5s"
          mx="10px"
        >
          <Link href={href} textDecor="none">
            {href.split('#')[1].replace('-', ' ')}
          </Link>
        </Box>
      ))}
    </Box>
  );
}
