import React from 'react';
import { Flex } from '@chakra-ui/react';
import SobreMiContenido from './SobreMiContenido/SobreMiContenido';
import SobreMiTitulo from './TituloSobreMi/SobreMiTirulo';
import { Element } from 'react-scroll';

export default function SobreMi() {
  return (
    <Element name="Sobre mi">

      <Flex
        justifyContent="center"
        flexDirection="column"
        color="#F8FAF9"
        bg="#141A12"
        px={{ base: '5%', md: '10%' }}
        pb="10vh"
      >
        <SobreMiTitulo />
        <SobreMiContenido />
      </Flex>
    </Element>
    
  );
}
