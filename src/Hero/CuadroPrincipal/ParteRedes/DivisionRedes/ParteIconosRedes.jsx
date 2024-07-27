import React from 'react';
import { Flex, Text, Link, Icon } from '@chakra-ui/react';
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
        {["LINKEDIN", "GITHUB", "INSTAGRAM"].map((item, index) => (
          <Flex className="redes" margin="15px 5px" key={index}>
            <Text marginRight="5px">{item}</Text>
            <Icon as={BiRightArrow} width="16px" height="16px" />
          </Flex>
        ))}
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
        {[
          { href: "https://www.linkedin.com/in/mauricioiv%C3%A1ntorti/", icon: FaLinkedin },
          { href: "https://github.com/Mauricio1409", icon: FaGithub },
          { href: "https://www.instagram.com/mauri_torti/", icon: FaInstagram },
        ].map((link, index) => (
          <Link href={link.href} isExternal key={index}>
            <Flex
              backgroundColor="white"
              height="30px"
              width="30px"
              margin="10px"
              borderRadius="50%"
              justifyContent="center"
              alignItems="center"
            >
              <Icon as={link.icon} width="16px" height="16px" fill="black" />
            </Flex>
          </Link>
        ))}
      </Flex>
    </Flex>
  );
}
