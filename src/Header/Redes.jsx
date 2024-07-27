import React from 'react';
import { Box, Link } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const socialLinks = [
  { href: 'https://www.linkedin.com/in/mauricioiv%C3%A1ntorti/', label: 'Linkedin' },
  { href: 'https://github.com/Mauricio1409', label: 'Github' },
  { href: 'https://www.instagram.com/mauri_torti/', label: 'Instagram' },
];

export default function Redes() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      {socialLinks.map((link, index) => (
        <Box
          key={index}
          display="flex"
          alignItems="center"
          px="2vh"
          transition="1.5s"
          _hover={{ bg: '#BEE5AC', color: '#141A12' }}
          color="#BFE6AD" // Color inicial
        >
          <Link
            href={link.href}
            textDecoration="none"
            color="inherit" // Inherit to take the color from the parent Box
            _hover={{ color: 'inherit' }} // Ensure it takes the parent Box color on hover
          >
            {link.label}
          </Link>
          <ArrowForwardIcon

            color="inherit"
          />
        </Box>
      ))}
    </Box>
  );
}
