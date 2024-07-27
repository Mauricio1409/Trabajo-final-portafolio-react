import React from "react";
import { Box } from "@chakra-ui/react";
import TituloHero from "./TituloHero";
import CuadroPrincipal from "./CuadroPrincipal/CuadroPrincipal";

function Hero() {
  return (
    <Box
      paddingTop="5vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      marginTop="10vh"
      bg="#141A12"
    >
      <TituloHero />
      <CuadroPrincipal />
    </Box>
  );
}

export default Hero;
