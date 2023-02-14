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


import "./Al.css";

export default function SocialProfileWithImage() {
  const location = localStorage.getItem("location");
  const event = localStorage.getItem("event");
  const time = localStorage.getItem("time");
  const note = localStorage.getItem("note");
  const nameInstrumemt = localStorage.getItem("nameInstrumemt");
  const instructorPrice = localStorage.getItem("instructorPrice");
  const musicianPrice = localStorage.getItem("musicianPrice");
  const musicianName = localStorage.getItem("musicianName");
  const instructorName = localStorage.getItem("instructorName");
  const price = localStorage.getItem("price");

  const navigate = useNavigate();

  const cancel = () => {
    if (confirm("Are you sure to cancel")) {
      localStorage.removeItem("musicianName");
      localStorage.removeItem("nameInstrumemt");
      localStorage.removeItem("instructorName");

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
        fontFamily= 'Quicksand, sans-serif;'
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
                fontSize={"28"}
                fontWeight={1100}
                fontFamily={"body"}
                paddingTop={4}
                fontFamily= 'Quicksand, sans-serif;'

              >
                {localStorage.getItem("name")}{" "}
              </Heading>
              <Text color={"gray.500"} paddingTop={4}  fontFamily= 'Quicksand, sans-serif;'>
                alaa@hotmail.com""fake"
              </Text>
            </Stack>
            <Divider orientation="horizontal" />
            <br></br>

            <Stack direction={"row"} justifyContent={"center"}>
              <Stack  fontFamily= 'Quicksand, sans-serif;'>
                {localStorage.getItem("musicianName") != null ? (
                  <Text fontSize={"20"} >
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
                {localStorage.getItem("nameInstrumemt") != null ? (
                  <Text fontSize={"22"} color={"black.100"}>
                    Store:
                    <br></br>
                    name: {"   "} {"  "}{nameInstrumemt}
                    <br></br>
                    price: {"   "} {"  "}{price}
                  </Text>
                ) : null}

                {localStorage.getItem("instructorName") != null ? (
                  <Text fontSize={"20"} color={"black.100"}>
                    Learing:
                    <br></br>
                    name: {"   "} {"  "}{instructorName}
                    <br></br>
                    price: {"   "} {"  "}{price}
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
