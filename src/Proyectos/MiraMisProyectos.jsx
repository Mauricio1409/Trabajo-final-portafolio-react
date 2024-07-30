import React from 'react';
import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import {ChevronRightIcon, ChevronLeftIcon, ChevronDownIcon } from '@chakra-ui/icons';

export default function MiraMisProyectos({ onClick, isVisible }) {
  return (
    <Flex
      className="mira-proyectos"
      bg="#262626"
      justifyContent="space-between"
      alignItems="center"
      h="10vh"
      p="10px"
      color="#BFE6AD"
      onClick={onClick}
      cursor="pointer"
    >
      <Box>
        <Icon as={isVisible ? ChevronDownIcon : ChevronRightIcon} w={6} h={6} />
      </Box>
      <Flex className="texto-central" alignItems="center">
        {isVisible ? (
          <>
            <Icon as={ChevronRightIcon} w={6} h={6} />
            <Text mx="10px">Mira mis proyectos</Text>
            <Icon as={ChevronLeftIcon} w={6} h={6} />
          </>
        ) : (
          <>
            <Icon as={ChevronRightIcon} w={6} h={6} />
            <Text mx="10px">Mira mis proyectos</Text>
            <Icon as={ChevronLeftIcon} w={6} h={6} />
          </>
        )}
      </Flex>
      <Box>
        <Icon as={isVisible ? ChevronDownIcon : ChevronLeftIcon} w={6} h={6} />
      </Box>
    </Flex>
  );
}
