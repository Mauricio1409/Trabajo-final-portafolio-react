import React from "react";
import ContenedorContactame from "./ContenedorContactame";
import { Flex } from '@chakra-ui/react';
import { Element } from "react-scroll";

function Contactame() {
  return (
    <Element name="Contactame">
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

    </Element>

  );
}

export default Contactame;
