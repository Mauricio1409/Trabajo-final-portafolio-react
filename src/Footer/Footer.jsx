import React from 'react'
import { Flex } from '@chakra-ui/react'
import NombreFooter from './NombreFooter'
import NavFooter from './NavFooter'
import RedesFooter from './RedesFooter'

export default function Footer() {
  return (
    <Flex
      as="footer"
      bg="#262626"
      justifyContent="space-around"
      textAlign="center"
      alignItems="center"
      h="25vh"
      w="100%"
    >
      <NombreFooter />
      <NavFooter/>
      <RedesFooter />
    </Flex>
  )
}
