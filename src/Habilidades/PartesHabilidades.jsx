import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

export default function PartesHabilidades(props) {
  return (
    <Flex
      h="23%"
      justifyContent="space-between"
      alignItems="end"
      bg={props.colorfondo}
      color={props.colorletras}
      px={{ base: '3vw', md: '1vw' }}
      py={{ base: '2vh', md: '0' }}
      flexDirection={{ base: 'column', md: 'row' }}
    >
      <Box
        display={{ base: 'none', md: 'flex' }}
        className="nombre-seccion color-lenguajes"
        width="33%"
      >
        <Text as="h3">{props.titulo}</Text>
      </Box>
      
      <Flex
        className="lenguajes"
        justifyContent="center"
        alignItems="center"
        width={{ base: '100%', md: '33%' }}
        textAlign="center"
        mb={{ base: '2vh', md: '1vh' }}
      >
        <Box className="seccion-media-habilidades">
          <Box
            w={{ base: '10vw', md: '5vw' }}
            h={{ base: '10vh', md: '5vh' }}
            mb={{ base: '3vh', md: '7vh' }}
            mx={{ base: '1vw', md: '2vw' }}
          >
            {props.urlsvguno}
          </Box>
          <Text className="color-lenguajes" fontSize={{ base: '12px', md: 'inherit' }}>{props.lenguajeuno}</Text>
        </Box>
        <Box className="seccion-media-habilidades">
          <Box
            w={{ base: '10vw', md: '5vw' }}
            h={{ base: '10vh', md: '5vh' }}
            mb={{ base: '3vh', md: '7vh' }}
            mx={{ base: '1vw', md: '2vw' }}
          >
            {props.urlsvgdos}
          </Box>
          <Text className="color-lenguajes" fontSize={{ base: '12px', md: 'inherit' }}>{props.lenguajedos}</Text>
        </Box>
      </Flex>
      
      <Box
        display={{ base: 'none', md: 'flex' }}
        className="numero-seccion color-lenguajes"
        width="33%"
        textAlign="end"
        justifyContent='end'
      >
        <Text as="h3">{props.numero}</Text>
      </Box>
    </Flex>
  );
}
