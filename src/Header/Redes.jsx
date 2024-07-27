import React from 'react';
import { Box, Center, Link} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

export default function Redes() {
  return (
    <Box display="flex" justifyContent="Center" alignItems="Center">
      <Box
        display="flex"
        alignItems="center"
        mx={1}
        _hover={{ bg: '#BEE5AC', color: '#141A12' }}
        transition="1.5s"
        height="25%"
      >
        <Link
          href="https://www.linkedin.com/in/mauricioiv%C3%A1ntorti/"
          textDecoration="none"
          color="#BFE6AD"
          fontSize="10px"
          _hover={{ color: '#141A12' }} // Cambia el color al pasar el ratón
        >
          Linkedin
        </Link>
        <ArrowForwardIcon
          boxSize="15px"
          color="#F9F4DA"
          mx={1} // margin horizontal de 5px
        />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        mx={1} // margin horizontal de 5px
        _hover={{ bg: '#BEE5AC', color: '#141A12' }}
        transition="1.5s"
        height="25%"
      >
        <Link
          href="https://github.com/Mauricio1409"
          textDecoration="none"
          color="#BFE6AD"
          fontSize="10px"
          _hover={{ color: '#141A12' }} // Cambia el color al pasar el ratón
        >
          Github
        </Link>
        <ArrowForwardIcon
          boxSize="15px"
          color="#F9F4DA"
          mx={1} // margin horizontal de 5px
        />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        mx={1} // margin horizontal de 5px
        _hover={{ bg: '#BEE5AC', color: '#141A12' }}
        transition="1.5s"
        height="25%"
      >
        <Link
          href="https://www.instagram.com/mauri_torti/"
          textDecoration="none"
          color="#BFE6AD"
          fontSize="10px"
          _hover={{ color: '#141A12' }} // Cambia el color al pasar el ratón
        >
          Instagram
        </Link>
        <ArrowForwardIcon
          boxSize="15px"
          color="#F9F4DA"
          mx={1} // margin horizontal de 5px
        />
      </Box>
    </Box>
  );
}

