import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'

export default function PartesHabilidades(props) {
  return (
    <Flex h="23%" justifyContent="space-between" alignItems="end" bg={props.colorfondo} color={props.colorletras} px="1vw">
        <Box class="nombre-seccion color-lenguajes" width="33%"><Text as="h3">{props.titulo}</Text></Box>
                
                <Flex class="lenguajes" justifyContent="center" alignItems="center" width="33%" textAlign="center" mb="1vh">
                    <Box class="seccion-media-habilidades">
                        <Box
                        w="5vw"
                        h="5vh"
                        mb="7vh"
                        mx="2vw"
                        >{props.urlsvguno}

                        </Box>
                        
 
                        <p class="color-lenguajes">{props.lenguajeuno}</p>
                    </Box>
                    <Box class="seccion-media-habilidades">
                    <Box
                        w="5vw"
                        h="5vh"
                        mb="7vh"
                        mx="2vw"
                        >{props.urlsvgdos}

                        </Box>
                        <p class="color-lenguajes">{props.lenguajedos}</p>
                    </Box>
                </Flex>
                <Box class="numero-de-seccion color-lenguajes" width="33%" textAlign="end">
                    <h3>{props.numero}</h3>
                </Box>
                
    </Flex>
  )
}
