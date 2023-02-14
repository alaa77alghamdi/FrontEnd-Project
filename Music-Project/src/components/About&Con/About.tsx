import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
  chakra,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import "./Al.css";

function About() {
  return (
    <>
    <Flex
width={"100vw"} height={"83.20vh"} alignContent={"center"} 
    >
       <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={0}
      bg="#f3f1e8"
      _after={{
        bg: "brand.500",
        opacity: 0.25,
        pos: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: -1,
        content: '" "',
      }}

      justifyContent={"center"} >
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="center"
        px={{ base: 4, lg: 20 }}
        py={24}
      >
       
        <chakra.h1
          mb={6}
          fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          color="brand.600"
          _dark={{ color: "gray.300" }}
          lineHeight="shorter"
          fontFamily= 'Quicksand, sans-serif;'

        >
      About US
        </chakra.h1>
       
        <chakra.p
          pr={{ base: 0, lg: 16 }}
          mb={4}
          fontSize="20"
          color="brand.600"
          _dark={{ color: "gray.400" }}
          letterSpacing="wider"
          fontFamily= 'Quicksand, sans-serif;'

        >
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Eum animi voluptate deleniti praesentium est, aliquam sapiente 
    laborum culpa eos consequuntur alias modi exercitationem, 
    rerum ea explicabo assumenda ipsam mollitia totam.
        </chakra.p>
      </Flex>
      <Box  >
        <Image
          src="https://img.freepik.com/free-photo/headphones-sheet-music_23-2147781379.jpg?w=1060&t=st=1676190954~exp=1676191554~hmac=0475cd01ee4a70ced1f7d2de9e503734dea43e053aa5ec167d4bd93bdc3949da"
          alt="music"
          fit="cover"
          w="full"
          h={{ base: 64, md: "full" }}
          bg="gray.100"
          loading="lazy"
        />
      </Box>
    </SimpleGrid>
      
    </Flex>
     
    </>
  );
}

export default About;