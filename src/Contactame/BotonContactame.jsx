import React from 'react'
import { Box, Link } from '@chakra-ui/react'

export default function BotonContactame() {
  return (
    <Box
      className="boton"
      w="80%"
      h="20%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Link
        href=""
        display="flex"
        justifyContent="center"
        alignItems="center"
        w="100%"
        h="30%"
        bg="#BEBBA8"
        color="#262626"
        borderRadius="20px"
        fontSize="15px"
        _hover={{
          color: "#BEBBA8",
          bg: "#7B946F",
          transition: "1s"
        }}
        p="10px"
        textAlign="center"
        textDecoration="none"
      >
        Enviar
      </Link>
    </Box>
  )
}
