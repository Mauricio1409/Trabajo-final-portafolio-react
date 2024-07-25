import React from 'react'
import ParteIconosRedes from './DivisionRedes/ParteIconosRedes'
import ParteTituloRedes from './DivisionRedes/ParteTituloRedes'
import { Flex } from '@chakra-ui/react'

export default function ParteRedes() {
  return (
    <Flex
      flexDirection= "column"
      w= "30%"
    >
        <ParteTituloRedes></ParteTituloRedes>
        <ParteIconosRedes></ParteIconosRedes>
        
    </Flex>
  )
}
