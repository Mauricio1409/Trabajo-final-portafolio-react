import React from 'react';
import { Box, Heading, Text, Image, Flex, Link, Icon} from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

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
        </Flex>
      </Flex>
      <Box 
        width="100%" 
        display="flex" 
        justifyContent="end" 
        alignItems="center" 
        textAlign="end"
      >
        
        <Image  as="img" src={props.urlimg} alt="Mi foto" width="70%" height="70%"/>


      </Box>
      <Box display={{ base: 'block', md: 'none' }}>
      <Link href="https://www.linkedin.com/in/mauricioiv%C3%A1ntorti/" isExternal>
          <Flex
            backgroundColor="white"
            height="30px"
            width="30px"
            margin="10px"
            borderRadius="50%"
            justifyContent="center"
            alignItems="center"
          >
            <Icon as={FaLinkedin} width="16px" height="16px" fill="black" />
          </Flex>
        </Link>
        <Link href="https://github.com/Mauricio1409" isExternal>
          <Flex
            backgroundColor="white"
            height="30px"
            width="30px"
            margin="10px"
            borderRadius="50%"
            justifyContent="center"
            alignItems="center"
          >
            <Icon as={FaGithub} width="16px" height="16px" fill="black" />
          </Flex>
        </Link>
        <Link href="https://www.instagram.com/mauri_torti/" isExternal>
          <Flex
            backgroundColor="white"
            height="30px"
            width="30px"
            margin="10px"
            borderRadius="50%"
            justifyContent="center"
            alignItems="center"
          >
            <Icon as={FaInstagram} width="16px" height="16px" fill="black" />
          </Flex>
        </Link>
      </Box>
    </Flex>
  );
}
