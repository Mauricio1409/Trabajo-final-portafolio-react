import React, { useState } from 'react';
import { Box, Flex, Collapse } from '@chakra-ui/react';
import TituloProyectos from './TituloProyectos';
import ImagenesProyectos from './ImagenesProyectos';
import MiraMisProyectos from './MiraMisProyectos';
import { Element } from 'react-scroll';

export default function Proyectos() {
  const [showProjects, setShowProjects] = useState(false);

  const handleButtonClick = () => {
    setShowProjects(!showProjects);
  };

  return (
    <Element name='Proyectos'>
      <MiraMisProyectos onClick={handleButtonClick} isVisible={showProjects} />
      <Collapse in={showProjects} animateOpacity>
        <Flex
          className="seccion-trabajos"
          justifyContent="center"
          alignItems="center"
          bg="#141A12"
          color="#BFE6AD"
          py={{ base: '5vh', md: '10vh' }}
          transition="opacity 1s ease-in-out, transform 1s ease-in-out"
        >
          <Box
            className="trabajos"
            w={{ base: '90vw', md: '80vw' }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            pt="30px"
          >
            <TituloProyectos />
            <ImagenesProyectos linkuno="https://img.freepik.com/foto-gratis/experiencia-programacion-persona-que-trabaja-codigos-computadora_23-2150010125.jpg" />
          </Box>
        </Flex>
      </Collapse>
    </Element>
  );
}
