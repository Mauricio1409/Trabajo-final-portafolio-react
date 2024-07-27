import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import SobreMiContenido from './SobreMiContenido'
import SobreMiTirulo from './SobreMiTirulo'

export default function SobreMi() {
  return (
    <Flex justifyContent="center"
     flexDirection="column"
     color="#F8FAF9"
     bg= "#141A12"
     px= "10%"
     pb="10vh">
        <SobreMiTirulo />
        <SobreMiContenido />
    </Flex>
  )
}