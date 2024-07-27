import React, { useState } from 'react';
import { Box, IconButton, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, Link, VStack } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <IconButton
        aria-label="Open menu"
        icon={<HamburgerIcon />}
        onClick={toggleDrawer}
        display={{ base: 'block', md: 'none' }}
        color="#BFE6AD"
        bg="transparent"
        _hover={{ bg: '#BEE5AC', color: '#141A12' }}
        position="absolute"
        right="20px"
      />
      <Drawer placement="right" onClose={toggleDrawer} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent bg="#262626" color="#91ac84">
            <DrawerCloseButton />
            <DrawerBody>
              <VStack spacing="24px" mt="20px">
                <Link href="#hero" textDecor="none" onClick={toggleDrawer} color="#91ac84" transition="1,5s"  _hover={{ bg: '#BEE5AC', color: '#141A12' }}>Home</Link>
                <Link href="#sobre-mi" textDecor="none" onClick={toggleDrawer} color="#91ac84" transition="1,5s"  _hover={{ bg: '#BEE5AC', color: '#141A12' }}>Sobre mi</Link>
                <Link href="#seccion-trabajos" textDecor="none" onClick={toggleDrawer} color="#91ac84" transition="1,5s"  _hover={{ bg: '#BEE5AC', color: '#141A12' }} >Mis proyectos</Link>
                <Link href="#Seccion-contactame" textDecor="none" onClick={toggleDrawer} color="#91ac84" transition="1,5s"  _hover={{ bg: '#BEE5AC', color: '#141A12' }} >Contactame</Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}

export default HamburgerMenu;
