import React, { useState } from 'react';
import { Box, Flex, Text, Tooltip, useDisclosure,  } from '@chakra-ui/react';
import ModalHabilidad from './ModalHabilidad';

export default function PartesHabilidades(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedHabilidad, setSelectedHabilidad] = useState(null);

  const handleOpenModal = (titulo, imagen, colorf, colorl) => {
    setSelectedHabilidad({ titulo, imagen, colorf, colorl });
    onOpen();
  };

  return (
    <>
      <Flex
        h="25%"
        justifyContent="space-between"
        alignItems="end"
        bg={props.colorfondo}
        color={props.colorletras}
        px={{ base: '3vw', md: '1vw' }}
        py={{ base: '2vh', md: '0' }}
        flexDirection={{ base: 'column', md: 'row' }}
        fontWeight="600"
      >
        <Box
          display={{ base: 'none', md: 'flex' }}
          className="nombre-seccion color-lenguajes"
          width="33%"
        >
          <Text as="h3">{props.titulo}</Text>
        </Box>

        <Flex
          className="lenguajes"
          justifyContent="center"
          alignItems="center"
          width={{ base: '100%', md: '33%' }}
          textAlign="center"
          mb={{ base: '2vh', md: '1vh' }}
        >
          <Tooltip label="Click para ver proyectos">
              <Box className="seccion-media-habilidades1" onClick={() => handleOpenModal(props.lenguajeuno, props.imagenuno, props.colorfondo, props.colorletras)}>

                <Box
                  w={{ base: '10vw', md: '5vw' }}
                  h={{ base: '10vh', md: '5vh' }}
                  mb={{ base: '3vh', md: '7vh' }}
                  mx={{ base: '1vw', md: '2vw' }}
                  transition="transform 0.3s ease-in-out"
                  _hover={{ transform: 'scale(1.1)', cursor: 'pointer' }}
                >
                  {props.urlsvguno}
                </Box>
                <Text className="color-lenguajes" fontSize={{ base: '12px', md: 'inherit' }}>{props.lenguajeuno}</Text>
              </Box>
          </Tooltip>
          <Tooltip label="Click para ver proyectos">
            <Box className="seccion-media-habilidades2" onClick={() => handleOpenModal(props.lenguajedos, props.imagendos, props.colorfondo, props.colorletras)}>
              <Box
                w={{ base: '10vw', md: '5vw' }}
                h={{ base: '10vh', md: '5vh' }}
                mb={{ base: '3vh', md: '7vh' }}
                mx={{ base: '1vw', md: '2vw' }}
                transition="transform 0.3s ease-in-out"
                _hover={{ transform: 'scale(1.1)', cursor: 'pointer' }}
              >
                {props.urlsvgdos}
              </Box>
              <Text className="color-lenguajes" fontSize={{ base: '12px', md: 'inherit' }}>{props.lenguajedos}</Text>
            </Box>
          </Tooltip>
          
        </Flex>

        <Box
          display={{ base: 'none', md: 'flex' }}
          className="numero-seccion color-lenguajes"
          width="33%"
          textAlign="end"
          justifyContent='end'
        >
          <Text as="h3">{props.numero}</Text>
        </Box>
      </Flex>

      {selectedHabilidad && (
        <ModalHabilidad
          isOpen={isOpen}
          onClose={onClose}
          titulo={selectedHabilidad.titulo}
          imagen={selectedHabilidad.imagen}
          colorf={selectedHabilidad.colorf}
          colorl={selectedHabilidad.colorl}
        />
      )}
    </>
  );
}
