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
          w="500px"
          h="35vh"
          m="15px 5px"
          cursor="pointer"
          transition="1.5s"
          _hover={{ w: '530px', h: '37vh' }}
          bg="blue"
        />
        <Image
          src={props.linkuno}
          alt=""
          className="imagen-trabajos"
          w="500px"
          h="35vh"
          m="15px 5px"
          cursor="pointer"
          transition="1.5s"
          _hover={{ w: '530px', h: '37vh' }}
          bg="blue"
        />
      </Box>
      <Box display="flex">
        <Image
          src={props.linkuno}
          alt=""
          className="imagen-trabajos"
          w="500px"
          h="35vh"
          m="15px 5px"
          cursor="pointer"
          transition="1.5s"
          _hover={{ w: '530px', h: '37vh' }}
          bg="blue"
        />
        <Image
          src={props.linkuno}
          alt=""
          className="imagen-trabajos"
          w="500px"
          h="35vh"
          m="15px 5px"
          cursor="pointer"
          transition="1.5s"
          _hover={{ w: '530px', h: '37vh' }}
          bg="blue"
        />
      </Box>
    </>
  )
}
