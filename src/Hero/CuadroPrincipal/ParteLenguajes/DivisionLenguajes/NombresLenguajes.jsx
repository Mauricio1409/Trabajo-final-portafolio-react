import React from 'react';
import { Box, Heading, Text, Image, Flex, Divider } from '@chakra-ui/react';

export default function NombresLenguajes(props) {
  return (
    <Flex 
      textAlign="left" 
      color="#BEBBA8" 
      fontSize="20px" 
      padding="10px" 
      alignItems="end" 
      height="100%" 
      boxSizing="border-box"
    >
      <Flex direction="column" flex="1">
        <Heading as="h2" margin="5px 0" fontWeight="1000">PYTHON</Heading>
        <Heading as="h2" margin="5px 0" fontWeight="1000">JAVASCRIPT</Heading>
        <Flex width="50%" alignItems="center">
          <Text fontSize="12px" marginTop="30px" fontWeight="1000">Y MAS</Text>
          <Divider orientation="vertical" height="20px" backgroundColor="#a0cfa0" marginLeft="10px" />
          <Divider orientation="horizontal" flex="1" backgroundColor="#a0cfa0" marginLeft="10px" />
        </Flex>
      </Flex>
      <Box 
        width="100%" 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        textAlign="end"
      >
        <Image src={props.foto} alt="" width="50%" height="50%" />
      </Box>
    </Flex>
  );
}
