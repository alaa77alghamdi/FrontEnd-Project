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
  useMediaQuery,
} from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";

import "./Al.css";


export default function SocialProfileWithImage() {

  

const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')

  const location = localStorage.getItem("location");
  const event = localStorage.getItem("event");
  const time = localStorage.getItem("time");
  const note = localStorage.getItem("note");


  const  locationLearning=localStorage.getItem("locationLearning");
  const eventLearning=localStorage.getItem("eventLearning");
  const timeLearning=localStorage.getItem("timeLearning");
  const noteLearning=localStorage.getItem("noteLearning");

  const instructorName = localStorage.getItem("instructorName");
  const instructorPrice = localStorage.getItem("instructorPrice");
  


  const musicianPrice = localStorage.getItem("musicianPrice");
  const musicianName = localStorage.getItem("musicianName");



  const nameInstrumemt = localStorage.getItem("nameInstrument");
  const price = localStorage.getItem("price");



  const navigate = useNavigate();

  const cancelInstructor = () => {
    if (confirm("Are you sure to cancel")) {
    
      localStorage.removeItem("instructorName");

      navigate("/profile");
    }
  };


  const cancelInstrument = () => {
    if (confirm("Are you sure to cancel")) {
   
      localStorage.removeItem("nameInstrument");
  

      navigate("/profile");
    }
  };


  const cancelMusician = () => {
    if (confirm("Are you sure to cancel")) {
      localStorage.removeItem("musicianName");
  

      navigate("/profile");
    }
  };
  return (
    <ChakraProvider>
    <Box bg={"#f3f1e8"}>
      <Heading
        fontSize={"40"}
        color={"gray.500"}
        textAlign={"center"}
        paddingTop={30}
        fontFamily="Quicksand, sans-serif;"
      >
        My Profile
      </Heading>
      <Center 
      
      py= {{ base: "80px", md: "70px", lg: "150" }}>
        <Box
          w={{ base: "150", md: "500", lg: "866px" }}
          padding= {{ base: "70px", md: "70px", lg: "70px" }}
         
          
          paddingBottom={10}
          bg={useColorModeValue("#FFFAF0", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
          css={{
            border: "1px solid wihte",
          }}
        >
        

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
                paddingTop={8}
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
                    fontSize={{ base: "20", md: "20", lg: "21" }}
                  >
                   <span style={{fontWeight:'bold'}}>Booking</span>  <br></br>
                    
                    <span style={{fontWeight:'bold'}}>instructor Name:</span>{"   "} {"  "} {musicianName}
                    <br></br>
                    <span style={{fontWeight:'bold'}}>location:</span> {"   "}
                    {"  "}
                    {location}
                    <br></br>
                    <span style={{fontWeight:'bold'}}>event:</span>  {"   "} {"  "} {event}
                    <br></br>
                    <span style={{fontWeight:'bold'}}>time:</span>  {"   "} {"  "}
                    {time}
                    <br></br>
                    <span style={{fontWeight:'bold'}}>note:</span>{"   "} {"  "}
                    {note}
                    <span style={{fontWeight:'bold'}}>price:</span>  {musicianPrice} SAR   {"  "}{"  "}per hour

                    <Stack justify={"space-between"}>
                  {localStorage.getItem("musicianName") != null ? (
                    <Button onClick={cancelMusician} bg={"#221409"} color={"white"} _hover={{bg:"#221409"}}>
                      Cancel
                    </Button>
                  ) : null}
                </Stack>
                  </Text>
                ) : null}
                <br></br>
                {localStorage.getItem("nameInstrument") != null ? (
                  <Text
                    fontSize={{ base: "20", md: "20", lg: "23" }}
                    color={"black.100"}
                  >
                   <span style={{fontWeight:'bold'}}>Store</span> 
                    <br></br>
                    <span style={{fontWeight:'bold'}}>name:</span> {"   "} {"  "}
                    {nameInstrumemt}
                    <br></br>
                    <span style={{fontWeight:'bold'}}>price:</span>  {"   "} {"  "} 
                    {price} SAR 

                    <Stack justify={"space-between"}>
                  {localStorage.getItem("nameInstrument") != null ? (
                    <Button onClick={cancelInstrument} bg={"#221409"} color={"white"} _hover={{bg:"#221409"}}>
                      Cancel
                    </Button>
                  ) : null}
                </Stack>
                  </Text>
                ) : null}
                <br></br>

                {localStorage.getItem("instructorName") != null ? (
                  <Text
                    fontSize={{ base: "20", md: "20", lg: "23" }}
                    color={"black.100"}
                  >
                   <span style={{fontWeight:'bold'}}>Learing</span> 
                    <br></br>
                    <span style={{fontWeight:'bold'}}> name:</span>  {"   "} {"  "}
                    {instructorName}
                    <br></br>
                    <span style={{fontWeight:'bold'}}>location:</span> {"   "}
                    {"  "}
                    {locationLearning}
                    <br></br>
                    <span style={{fontWeight:'bold'}}>event:</span>  {"   "} {"  "} {eventLearning}
                    <br></br>
                    <span style={{fontWeight:'bold'}}>time:</span>  {"   "} {"  "}
                    {timeLearning}
                    <br></br>
                    <span style={{fontWeight:'bold'}}>note:</span>{"   "} {"  "}
                    {noteLearning}
                    <span style={{fontWeight:'bold'}}>price:</span>  {"   "} {"  "}
                    {instructorPrice}SAR   {"  "}{"  "}per hour


                     <Stack justify={"space-between"}>
                  {localStorage.getItem("instructorName") != null ? (
                    <Button onClick={cancelInstructor} bg={"#221409"} color={"white"} _hover={{bg:"#221409"}}>
                      Cancel
                    </Button>
                  ) : null}
                </Stack>
                  </Text>

                ) : null
                
                }
                

               
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Center>
    </Box>
    </ChakraProvider>
  );
}
