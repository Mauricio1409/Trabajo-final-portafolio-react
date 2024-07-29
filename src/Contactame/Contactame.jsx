import React from "react";
import ContenedorContactame from "./ContenedorContactame";
import { Flex } from '@chakra-ui/react';

function Contactame() {
  return (
    <Flex
      className="contactame"
      minH="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      bg="#BFE6AD"
      py={{ base: '10vh', md: '20vh' }}
    >
      <ContenedorContactame />
    </Flex>
  );
}

export default Contactame;
