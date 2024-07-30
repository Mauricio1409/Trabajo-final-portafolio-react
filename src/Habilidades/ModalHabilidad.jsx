import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Text,
  Image,
  Center
} from '@chakra-ui/react';

export default function ModalHabilidad({ isOpen, onClose, titulo, imagen, colorf, colorl }) {
  let title = `Proyectos con ${titulo}`
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent bgColor={colorf} color={colorl} maxWidth="90vw" maxHeight="90vh">
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box display="flex" flexDirection="column" alignItems="center" >
            <Box
              w={{ base: '40vw', md: '50vw' }}
              h={{ base: '30vh', md: '35vh' }}
              m={{ base: '3vh', md: '7vh' }}
              display='flex'
              flexDirection={{base: 'column', md: 'row' }}
              justifyContent="center"
              alignItems="center"
            >
              <Image src={imagen} m={{ base: '1vh', md: '3vh' }} w={{base: "100%", md: "50%"}} h = {{base: "65%", md: "40vh"}}>
              </Image>
              <Image src={imagen} m={{ base: '1vh', md: '3vh' }} w={{base: "100%", md: "50%"}} h = {{base: "65%", md: "40vh"}}>
              </Image>
              
            </Box>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Cerrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
