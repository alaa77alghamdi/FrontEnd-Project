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

function About() {
  return (
    <>
       <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={0}
      bg="blue.100"
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
    >
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
        >
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Eum animi voluptate deleniti praesentium est, aliquam sapiente 
    laborum culpa eos consequuntur alias modi exercitationem, 
    rerum ea explicabo assumenda ipsam mollitia totam.
        </chakra.p>
      </Flex>
      <Box>
        <Image
          src="https://img.freepik.com/free-photo/top-view-black-vinyl-composition-with-blue-piano_23-2148785740.jpg?w=1060&t=st=1676147229~exp=1676147829~hmac=c5db49d0d2ba2f513f522178ddd08084db5afc426b3393344dcc8c0d8ec4b13c"
          alt="3 women looking at a laptop"
          fit="cover"
          w="full"
          h={{ base: 64, md: "full" }}
          bg="gray.100"
          loading="lazy"
        />
      </Box>
    </SimpleGrid>
      
      <Stack padding={50} alignItems="center" gap={10}>
        <Heading textAlign={"center"}>Team</Heading>

        <Stack direction="row" gap="20" >
          <Box>
            <Image
              borderRadius="full"
              boxSize="150px"
              src="https://bit.ly/dan-abramov"
              
              alt="Dan Abramov"
            />
            <Text textAlign={"center"} padding={2}>
              alaa
            </Text>
          </Box>
          <Box>
            <Image
              borderRadius="full"
              boxSize="150px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
            <Text textAlign={"center"} padding={2}>
              alaa
            </Text>
          </Box>
          <Box>
            <Image
              borderRadius="full"
              boxSize="150px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
            <Text textAlign={"center"} padding={2}>
              alaa
            </Text>
          </Box>
          <Box>
            <Image
              borderRadius="full"
              boxSize="150px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
            <Text textAlign={"center"} padding={2}>
              alaa
            </Text>
          </Box>
        </Stack>
      </Stack>
    </>
  );
}

export default About;
