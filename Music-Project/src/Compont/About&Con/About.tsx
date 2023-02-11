import { Box, Center, Container, Flex, Heading, Stack, Text ,Image} from "@chakra-ui/react";
import React from "react";

function About() {
  return (
    <>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
     
      >
<Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          About {' '}



          <Text as={'span'} color={'blue.400'}>
          US
          </Text>
        </Heading>

        <Text color={'black.500'} maxW={'3xl'}   fontWeight={600} >
         Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Voluptatem, perspiciatis incidunt enim minima ratione ipsa aliquid quae odio, 
         adipisci quidem, suscipit culpa? Commodi, ea debitis accusantium quis odio temporibus atque?
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ut eum consequatur
          animi doloribus dolorem inventore minus, 
         aliquam amet dolor ullam aut porro odit pariatur neque asperiores! Optio, ut error?
        </Text>

        <Stack spacing={10} direction={'row'}>


        <Flex w={''}>
        <Image
    
    objectFit='cover'
    src='https://img.freepik.com/free-photo/blue-painted-vinyl-arrangement-with-musical-notes_23-2148785726.jpg?w=996&t=st=1676051047~exp=1676051647~hmac=672353c95bcca27d0ff833606406862bce35421dabacd0bebec9f4eeb5c524cc'
 />
        </Flex>
        </Stack>
      </Stack>

<Stack padding={55}>
      <Heading 
        textAlign={"center"}
      >Team</Heading>

<Stack direction='row'  alignItems={"center"}  >


<Stack  >
<Image

  borderRadius='full'
  boxSize='150px'
  src='https://bit.ly/dan-abramov'
  alt='Dan Abramov'
  
/>
<Text textAlign={"center"} padding={2}>alaa</Text>
</Stack>
<Stack >
<Image

  borderRadius='full'
  boxSize='150px'
  src='https://bit.ly/dan-abramov'
  alt='Dan Abramov'
  
/>
<Text textAlign={"center"} padding={2}>alaa</Text>
</Stack>
<Stack >
<Image

  borderRadius='full'
  boxSize='150px'
  src='https://bit.ly/dan-abramov'
  alt='Dan Abramov'
  
/>
<Text textAlign={"center"} padding={2}>alaa</Text>
</Stack>
<Box >
<Image

  borderRadius='full'
  boxSize='150px'
  src='https://bit.ly/dan-abramov'
  alt='Dan Abramov'
  
/>
<Text textAlign={"center"} padding={2}>alaa</Text>
</Box>

</Stack>
</Stack>

    </>
  );
}

export default About;
