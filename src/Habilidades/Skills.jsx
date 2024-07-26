import React from "react"
import PartesHabilidades from "./PartesHabilidades"
import MiraMisProyectos from "./MiraMisProyectos"
import { Box } from "@chakra-ui/react"

function Skills() {

    return (
      <Box h="110vh">
        <PartesHabilidades 
        colorfondo="#262626" 
        titulo="Lenguajes" 
        lenguajeuno="JavaScript"
        lenguajedos="python"
        colorletras="white"
        numero="1"
        ></PartesHabilidades>
        <PartesHabilidades
        colorfondo="#262626" 
        titulo="Lenguajes" 
        lenguajeuno="JavaScript"
        lenguajedos="python"
        colorletras="white"
        numero="1"
        
        ></PartesHabilidades>
        <PartesHabilidades
          colorfondo="#262626" 
          titulo="Lenguajes" 
          lenguajeuno="JavaScript"
          lenguajedos="python"
          colorletras="white"
          numero="1"
        ></PartesHabilidades>
        <PartesHabilidades
          colorfondo="#262626" 
          titulo="Lenguajes" 
          lenguajeuno="JavaScript"
          lenguajedos="python"
          colorletras="white"
          numero="1"
        ></PartesHabilidades>
        <MiraMisProyectos></MiraMisProyectos>
      </Box>
    )
  }
  
  export default Skills