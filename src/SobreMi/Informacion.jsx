import React from 'react'
import { Box, Text } from '@chakra-ui/react'

export default function Informacion(props) {
  return (
    <Box p="0 15px">

      <Box as="h2" fontSize="20px" mb="5px" fontWeight="1000">{props.subtitulo}</Box>
        <Text as="p">{props.texto}</Text>
    </Box>
        
  )
}
