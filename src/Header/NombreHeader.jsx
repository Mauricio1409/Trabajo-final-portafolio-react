import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

export default function NombreHeader() {
  return (
    <Flex
      className="nombre"
      color="#BFE6AD"
      alignItems="center"
      w="33%"
      pl="3vw"
    >
      <Box
        className="nombre-imagen"
        h="30px"
        w="60px"
        bg="#BFE6AD"
        m="5px"
        borderTopRightRadius="25%"
        borderBottomRightRadius="25%"
      />
      <Box
        className="nombre-texto"
        display="flex"
        w="60px"
        alignItems="center"
        justifyContent="center"
      >
        <Text>Mauricio Torti</Text>
      </Box>
    </Flex>
  );
}
