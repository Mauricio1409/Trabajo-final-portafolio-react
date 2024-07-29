import React from 'react';
import Informacion from './Informacion';
import { Flex } from '@chakra-ui/react';

export default function SobreMiContenido() {
  let texto_sobre_mi = "Soy Mauricio Torti, un joven de 19 años y estudiante de ingeniería en sistemas de información apasionado por la programación. Hace dos años comencé la carrera y desde ese entonces no he dejado de aprender.";
  let texto_porque_full_stack = "Elegí mi orientación en la programación hacia la creación de páginas web, dentro de esta área me centré en full stack, ya que abarca todo el diseño de principio a fin. Con esto, una vez adquiridos los conocimientos necesarios, podré crear una página web completa y funcional.";
  let quien = "{ QUIEN SOY? }";
  let fullstack = "{ PORQUE FULL STACK? }";

  return (
    <Flex
      alignItems="center"
      flexDirection={{ base: 'column', md: 'row' }}
      textAlign="justify"
    >
      <Informacion subtitulo={quien} texto={texto_sobre_mi}></Informacion>
      <Informacion subtitulo={fullstack} texto={texto_porque_full_stack}></Informacion>
    </Flex>
  );
}
