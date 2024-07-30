import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'

export default function NombreFooter() {
  return (
    <Flex
      className="nombre"
      color="#BFE6AD"
      w="130px"
      h="50px"
      alignItems="center"
    >
      <Box
        className="nombre-imagen"
        h={{base: "20px", md: "25px"}}
        w={{base: "40px", md: "50px"}}
        bg="#BFE6AD"
        m="5px"
        borderTopRightRadius="25%"
        borderBottomRightRadius="25%"
      />
      <Box
        className="nombre-texto"
        w="50%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text>Mauricio Torti</Text>
      </Box>
    </Flex>
  )
}
