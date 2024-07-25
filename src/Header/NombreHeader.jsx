import React from 'react'
import { Box, Flex } from '@chakra-ui/react'

export default function NombreHeader() {
  return (
    <Flex color = "#BFE6AD"
      width= "130px"
      height = "50px">

      <Box width = "50%"
        font-size = "10px"
        >
          <p>Mauricio Torti</p>

      </Box>
      <Box height = "20px"
        width = "50%"
        background-color = "#BFE6AD"
        margin = "5px"
        border-top-right-radius = "25%"
        border-bottom-right-radius = "25%">

      </Box>
      
    </Flex>
      

  )
}
