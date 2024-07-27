import React from 'react';
import ParteIconosRedes from './DivisionRedes/ParteIconosRedes';
import ParteTituloRedes from './DivisionRedes/ParteTituloRedes';
import { Flex } from '@chakra-ui/react';

export default function ParteRedes() {
  return (
    <Flex
      flexDirection="column"
      w={{ base: '100%', md: '30%' }}
      display={{ base: 'none', md: 'flex' }}
      fontWeight="1000"
    >
      <ParteTituloRedes />
      <ParteIconosRedes />
    </Flex>
  );
}
