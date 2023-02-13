import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

export default function SocialProfileWithImage() {
  return (
    <>
    <Center py={123} bg={"#f3f1e8"}>
      
      <Box
        maxW={"766px"}
        padding={40}
        
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
        css={{
          border: "2px solid wihte",
        }}

      >
        
     
        <Flex mt={-12} >
          <Avatar
          
            size={"xl"}
            src={
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            }
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>

        <Box p={6} >
          <Stack spacing={0}  mb={5}>
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"} paddingTop={4}>
              {localStorage.getItem("name")}{" "}
            </Heading>
            <Text color={"gray.500"} paddingTop={4}>Frontend Developer</Text>
          </Stack>

          <Stack direction={"row"} spacing={6}>
            <Stack spacing={0} align={"center"} paddingTop={3}>
           
              <Text fontSize={"20"} color={"gray.500"}>
                Tikct
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Center>
    </>
  );
}
