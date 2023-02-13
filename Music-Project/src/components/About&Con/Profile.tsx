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
  Spacer,
  Divider,
} from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";

export default function SocialProfileWithImage() {
  const location = localStorage.getItem("location");
  const event = localStorage.getItem("event");
  const time = localStorage.getItem("time");
  const note = localStorage.getItem("note");
  const nameInstrumemt = localStorage.getItem("nameInstrumemt");
  const price = localStorage.getItem("instructorPrice");
const musicianPrice=localStorage.getItem("musicianPrice")
  const musicianName = localStorage.getItem("musicianName");
  const price = localStorage.getItem("instructorPrice");


  const navigate = useNavigate();

  const cancel = () => {
    if (confirm("Are you sure to cancel")) {
      localStorage.removeItem("musicianName");
      localStorage.removeItem("nameInstrumemt");
      navigate("/profile");
    }
  };
  return (
    <Box bg={"#f3f1e8"}>
      <Heading
        fontSize={"20"}
        color={"gray.500"}
        textAlign={"center"}
        paddingTop={15}
      >
        Tikct
      </Heading>
      <Center py={90}>
        <Box
          maxW={"766px"}
          paddingTop="40"
          paddingBottom={10}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
          css={{
            border: "2px solid wihte",
          }}
        >
          <Flex mt={-12} justify={"center"}>
            <Avatar
              size={"x2"}
              src={
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
              }
              css={{
                border: "2px solid white",
              }}
            />
          </Flex>

          <Box p={6}>
            <Stack spacing={0} mb={5} align={"center"}>
              <Heading
                fontSize={"2xl"}
                fontWeight={500}
                fontFamily={"body"}
                paddingTop={4}
              >
                {localStorage.getItem("name")}{" "}
              </Heading>
              <Text color={"gray.500"} paddingTop={4}>
                alaa@hotmail.com""fake"
              </Text>
            </Stack>
            <Divider orientation="horizontal" />
            <br></br>

            <Stack direction={"row"} justifyContent={"center"}>
              <Stack>
                {localStorage.getItem("location") != null ? (
                  <Text fontSize={"20"} color={"gray.500"}>
                    Tikct: <br></br>
                    location: {"   "}
                    {"  "}
                    {location}
                    <br></br>
                    event:{event}
                    <br></br>
                    time:{time}
                    <br></br>
                    note:{note}
                  </Text>
                ) : null}
                <br></br>
                {localStorage.getItem("nameInstrumemt") != null ? (
                  <Text fontSize={"20"} color={"gray.500"}>
                    Tikct:
                    <br></br>
                    name:{nameInstrumemt}
                    <br></br>
                    price:{price}
                  </Text>
                ) : null}

                {localStorage.getItem("") != null ? (
                  <Text fontSize={"20"} color={"gray.500"}>
                    Tikct:
                  </Text>
                ) : null}

                <Stack justify={"space-between"}>
                  <Button onClick={cancel}>Cancel</Button>{" "}
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Center>
    </Box>
  );
}
