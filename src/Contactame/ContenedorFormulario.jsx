import React from 'react'
import { Box, FormControl, FormLabel, Input, Flex } from '@chakra-ui/react'

export default function ContenedorFormulario() {
  return (
    <Box
      className="contenedor-formulario"
      h="60%"
      w="100%"
      display="flex"
      justifyContent="center"
      alignItems="start"
      flexDirection="column"
    >
      <form
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <Flex direction="column" w="100%" h="20%" my="50px">
          <FormControl id="nombre" mb="50px">
            <FormLabel>Nombre</FormLabel>
            <Input
              type="text"
              placeholder="Ingrese su nombre"
              borderRadius="30px"
              p="20px"
              boxSizing="border-box"
            />
          </FormControl>
          <FormControl id="email" mb="50px">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Ingrese su mail"
              borderRadius="30px"
              p="20px"
              boxSizing="border-box"
            />
          </FormControl>
          <FormControl id="telefono">
            <FormLabel>Telefono</FormLabel>
            <Input
              type="number"
              placeholder="Ingrese su numero de telefono"
              borderRadius="30px"
              p="20px"
              boxSizing="border-box"
            />
          </FormControl>
        </Flex>
      </form>
    </Box>
  )
}
