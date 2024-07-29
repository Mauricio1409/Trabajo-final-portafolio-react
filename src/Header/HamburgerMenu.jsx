import React, { useState } from 'react';
import { IconButton, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, VStack, Box } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-scroll';

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
                <Link to="Hero" smooth={true} duration={500} style={{ textDecoration: 'none', color: '#91ac84', transition: '1.5s' }} onClick={toggleDrawer}>
                  <Box _hover={{ bg: '#BEE5AC', color: '#141A12' }}>Home</Box>
                </Link>
                <Link to="Sobre mi" smooth={true} duration={500} style={{ textDecoration: 'none', color: '#91ac84', transition: '1.5s' }} onClick={toggleDrawer}>
                  <Box _hover={{ bg: '#BEE5AC', color: '#141A12' }}>Sobre mi</Box>
                </Link>
                <Link to="Habilidades" smooth={true} duration={500} style={{ textDecoration: 'none', color: '#91ac84', transition: '1.5s' }} onClick={toggleDrawer}>
                  <Box _hover={{ bg: '#BEE5AC', color: '#141A12' }}>Habilidades</Box>
                </Link>
                <Link to="Proyectos" smooth={true} duration={500} style={{ textDecoration: 'none', color: '#91ac84', transition: '1.5s' }} onClick={toggleDrawer}>
                  <Box _hover={{ bg: '#BEE5AC', color: '#141A12' }}>Proyectos</Box>
                </Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}

export default HamburgerMenu;
