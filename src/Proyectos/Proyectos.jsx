import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import TituloProyectos from './TituloProyectos'
import ImagenesProyectos from './ImagenesProyectos'

export default function Proyectos() {
  return (
    <Flex className="seccion-trabajos" justifyContent="center" alignItems="center" bg="#141A12" color=" #BFE6AD">
      <Box className="trabajos" h="120vh" w="80vw" display="flex" justifyContent="center" alignItems="center" flexDirection="column" pt="30px">
        <TituloProyectos />
        <ImagenesProyectos linkuno="https://img.freepik.com/foto-gratis/experiencia-programacion-persona-que-trabaja-codigos-computadora_23-2150010125.jpg"/>
      </Box>
    </Flex>
  )
}
