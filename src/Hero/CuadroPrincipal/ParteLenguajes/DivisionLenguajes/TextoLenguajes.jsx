import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { BsArrowDown, BsCaretRightFill, BsCaretLeftFill } from 'react-icons/bs';

export default function TextoLenguajes() {
  return (
    <Flex
      backgroundColor="#F9F4DA"
      height="10%"
      textAlign="center"
      padding="5px"
      justifyContent="space-between"
      alignItems="center"
      color="#181B15"
      fontWeight="1000"
      fontSize={{ base: "10px", md: "12px" }}
    >
      <Box>
        <BsArrowDown size={16} />
      </Box>
      <Flex fontSize="12px" alignItems="center">
        <BsCaretRightFill size={16} />
        <Text margin="0 7px">Mira mis habilidades</Text>
        <BsCaretLeftFill size={16} />
      </Flex>
      <Box>
        <BsArrowDown size={16} />
      </Box>
    </Flex>
  );
}
