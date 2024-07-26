import React from 'react'
import { Box, Image } from '@chakra-ui/react'

export default function ImagenesProyectos(props) {
  return (
    <>
      <Box display="flex">
        <Image
          src={props.linkuno}
          alt=""
          className="imagen-trabajos"
          w="300px"
          h="200px"
          m="15px 5px"
          cursor="pointer"
          transition="1.5s"
          _hover={{ w: '500px', h: '250px' }}
          bg="blue"
        />
        <Image
          src={props.linkdos}
          alt=""
          className="imagen-trabajos"
          w="300px"
          h="200px"
          m="15px 5px"
          cursor="pointer"
          transition="1.5s"
          _hover={{ w: '500px', h: '250px' }}
          bg="blue"
        />
      </Box>
      <Box display="flex">
        <Image
          src={props.linktres}
          alt=""
          className="imagen-trabajos"
          w="300px"
          h="200px"
          m="15px 5px"
          cursor="pointer"
          transition="1.5s"
          _hover={{ w: '500px', h: '250px' }}
          bg="blue"
        />
        <Image
          src={props.linkcuatro}
          alt=""
          className="imagen-trabajos"
          w="300px"
          h="200px"
          m="15px 5px"
          cursor="pointer"
          transition="1.5s"
          _hover={{ w: '500px', h: '250px' }}
          bg="blue"
        />
      </Box>
    </>
  )
}
