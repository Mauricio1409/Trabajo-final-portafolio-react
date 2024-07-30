import React from 'react';
import { Box, Image } from '@chakra-ui/react';

export default function ImagenesProyectos(props) {
  return (
    <>
      <Box display="flex" flexDirection={{ base: 'column', md: 'row' }} flexWrap="wrap" justifyContent="center">
        <Image
          src={props.linkuno}
          alt=""
          className="imagen-trabajos"
          w={{ base: '70vw', md: '35vw' }}
          h={{ base: 'auto', md: '37vh' }}
          m="15px"
          cursor="pointer"
          transition="1.5s"
          _hover={{ transform: 'scale(1.05)' }}
        />
        <Image
          src={props.linkuno}
          alt=""
          className="imagen-trabajos"
          w={{ base: '70vw', md: '35vw' }}
          h={{ base: 'auto', md: '37vh' }}
          m="15px"
          cursor="pointer"
          transition="1.5s"
          _hover={{ transform: 'scale(1.05)' }}
        />
      </Box>
      <Box display="flex" flexDirection={{ base: 'column', md: 'row' }} flexWrap="wrap" justifyContent="center">
        <Image
          src={props.linkuno}
          alt="Imagen de proyectos"
          className="imagen-trabajos"
          w={{ base: '70vw', md: '35vw' }}
          h={{ base: 'auto', md: '37vh' }}
          m="15px"
          cursor="pointer"
          transition="1.5s"
          _hover={{ transform: 'scale(1.05)' }}
        />
        <Image
          src={props.linkuno}
          alt=""
          className="imagen-trabajos"
          w={{ base: '70vw', md: '35vw' }}
          h={{ base: 'auto', md: '37vh' }}
          m="15px"
          cursor="pointer"
          transition="1.5s"
          _hover={{ transform: 'scale(1.05)' }}
        />
      </Box>
    </>
  );
}
