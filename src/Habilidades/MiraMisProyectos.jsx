import React from 'react'
import { Box, Flex, Text, Icon } from '@chakra-ui/react'
import { ArrowDownIcon, ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'

export default function MiraMisProyectos() {
  return (
    <Flex
      className="mira-proyectos"
      bg="#262626"
      justifyContent="space-between"
      alignItems="center"
      h="12vh"
      mb="15px"
      p="10px"
      color="#BFE6AD"
    >
      <Box>
        <Icon as={ArrowDownIcon} w={6} h={6} />
      </Box>
      <Flex className="texto-central" alignItems="center">
        <Icon as={ChevronRightIcon} w={6} h={6} />
        <Text mx="10px">Mira mis proyectos</Text>
        <Icon as={ChevronLeftIcon} w={6} h={6} />
      </Flex>
      <Box>
        <Icon as={ArrowDownIcon} w={6} h={6} />
      </Box>
    </Flex>
  )
}
