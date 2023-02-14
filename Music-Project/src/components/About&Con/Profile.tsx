import {
  ChakraProvider,
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

import "./Al.css";

export default function SocialProfileWithImage() {
  const location = localStorage.getItem("location");
  const event = localStorage.getItem("event");
  const time = localStorage.getItem("time");
  const note = localStorage.getItem("note");
  const nameInstrumemt = localStorage.getItem("nameInstrument");
  const instructorPrice = localStorage.getItem("instructorPrice");
  const musicianPrice = localStorage.getItem("musicianPrice");
  const musicianName = localStorage.getItem("musicianName");
  const instructorName = localStorage.getItem("instructorName");
  const price = localStorage.getItem("price");

  const navigate = useNavigate();

  const cancel = () => {
    if (confirm("Are you sure to cancel")) {
      localStorage.removeItem("musicianName");
      localStorage.removeItem("nameInstrument");
      localStorage.removeItem("instructorName");

      navigate("/profile");
    }
  };
  return (
    <ChakraProvider>
    <Box bg={"#f3f1e8"}>
      <Heading
        fontSize={"50"}
        color={"gray.500"}
        textAlign={"center"}
        paddingTop={30}
        fontFamily="Quicksand, sans-serif;"
      >
        Profile
      </Heading>
      <Center py={150}>
        <Box
          w={{ base: "150", md: "500", lg: "866px" }}
          paddingTop="20"
          paddingBottom={10}
          bg={useColorModeValue("#FFFAF0", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
          css={{
            border: "1px solid wihte",
          }}
        >
          <Flex mt={{ base: -10, md: -29, lg: -13 }} justify={"center"}>
            <Avatar
              w={{ base: "40%", md: "50%", lg: "23%" }}
              h={"25%"}
              src={
                "https://i.pinimg.com/236x/47/5a/86/475a86177aeedacf8dc7f5e2b4eff61f.jpg"
              }
              css={{
                border: "2px solid white",
              }}
            />
          </Flex>

          <Box p={6}>
            <Stack spacing={0} mb={5} align={"center"}>
              <Heading
                fontSize={{ base: "20", md: "20", lg: "40" }}
                fontWeight={1100}
                paddingTop={4}
                fontFamily="Quicksand, sans-serif;"
              >
                {localStorage.getItem("name")}{" "}
              </Heading>
              <Text
                color={"gray.500"}
                paddingTop={4}
                fontFamily="Quicksand, sans-serif;"
              >
                {localStorage.getItem("email")}{" "}
              </Text>
            </Stack>
            <Divider orientation="horizontal" />
            <br></br>

            <Stack direction={"row"} justifyContent={"center"}>
              <Stack fontFamily="Quicksand, sans-serif;">
                {localStorage.getItem("musicianName") != null ? (
                  <Text
                    color={"black.100"}
                    fontSize={{ base: "20", md: "20", lg: "25" }}
                  >
                    Booking: <br></br>
                    instructor Name:{"   "} {"  "} {musicianName}
                    <br></br>
                    location: {"   "}
                    {"  "}
                    {location}
                    <br></br>
                    event: {"   "} {"  "} {event}
                    <br></br>
                    time: {"   "} {"  "}
                    {time}
                    <br></br>
                    note:{"   "} {"  "}
                    {note}
                    price: {musicianPrice}
                  </Text>
                ) : null}
                <br></br>
                {localStorage.getItem("nameInstrument") != null ? (
                  <Text
                    fontSize={{ base: "20", md: "20", lg: "25" }}
                    color={"black.100"}
                  >
                    Store:
                    <br></br>
                    name: {"   "} {"  "}
                    {nameInstrumemt}
                    <br></br>
                    price: {"   "} {"  "}
                    {price}
                  </Text>
                ) : null}
                <br></br>

                {localStorage.getItem("instructorName") != null ? (
                  <Text
                    fontSize={{ base: "20", md: "20", lg: "25" }}
                    color={"black.100"}
                  >
                    Learing:
                    <br></br>
                    name: {"   "} {"  "}
                    {instructorName}
                    <br></br>
                    price: {"   "} {"  "}
                    {price}
                  </Text>
                ) : null}

                <Stack justify={"space-between"}>
                  {localStorage.getItem("instructorName") != null ? (
                    <Button onClick={cancel} bg={"#221409"} color={"white"}>
                      Cancel
                    </Button>
                  ) : null}
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Center>
    </Box>
    </ChakraProvider>
  );
}
