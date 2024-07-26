import React from "react"
import ContenedroContactame from "./ContenedorContactame"
import { Flex } from '@chakra-ui/react'

function Contactame() {
    return (
      <Flex
        className="contactame"
        h="130vh"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        bg="#BFE6AD"
      >
        <ContenedroContactame />
      </Flex>
    )
}

export default Contactame
