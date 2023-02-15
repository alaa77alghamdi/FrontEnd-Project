import {
  ChakraProvider,
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
    <ChakraProvider>
    <Flex
width={["100vw,50vw"]}  alignContent={"center"} 
height={{ base: "3xl", md: "4xl", lg: "83vh" }}
  
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
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
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
          fontSize={{ base: "1xl", md: "2xl", lg: "2xl" }}
          color="brand.600"
          _dark={{ color: "gray.400" }}
          letterSpacing="wider"
          fontFamily= 'Quicksand, sans-serif;'

        >
    We are a team that worked on making a platform  that combines booking musicians for event and teaching music to everyone, as well as selling used musical instruments to whomever needs them. Our goal is for our site to reach all those who are interested in music and its arts
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
     
    </ChakraProvider>
  );
}

export default About;