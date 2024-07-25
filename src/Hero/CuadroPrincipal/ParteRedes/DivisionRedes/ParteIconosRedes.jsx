import React from 'react';
import { Box, Flex, Text, Link, Icon } from '@chakra-ui/react';
import { BiRightArrow } from 'react-icons/bi';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function ParteIconosRedes() {
  return (
    <Flex
      height="50%"
      textAlign="end"
      color="#141A12"
      padding="0"
      fontSize="11px"
      letterSpacing="0"
    >
      <Flex
        width="75%"
        height="100%"
        justifyContent="center"
        alignItems="flex-end"
        flexDirection="column"
      >
        <Flex className="redes" margin="15px 5px">
          <Text marginRight="5px">LINKEDIN</Text>
          <Icon as={BiRightArrow} width="16px" height="16px" />
        </Flex>
        <Flex className="redes" margin="15px 5px">
          <Text marginRight="5px">GITHUB</Text>
          <Icon as={BiRightArrow} width="16px" height="16px" />
        </Flex>
        <Flex className="redes" margin="15px 5px">
          <Text marginRight="5px">INSTAGRAM</Text>
          <Icon as={BiRightArrow} width="16px" height="16px" />
        </Flex>
      </Flex>
      <Flex
        width="25%"
        height="100%"
        backgroundColor="#141A12"
        borderTopLeftRadius="45px"
        borderTopRightRadius="20px"
        borderBottomLeftRadius="25px"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
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
      </Flex>
    </Flex>
  );
}
