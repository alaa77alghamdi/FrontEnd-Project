import React from 'react'
import { ChakraProvider, SimpleGrid, Box, Container,  Card, CardHeader, CardBody, CardFooter, Stack, Image, Heading, Text,Button  } from '@chakra-ui/react'
import BookingCard from './ElementComp/BookingCard'
import './Services.css'


function Booking( ) {
  return (
    <ChakraProvider>
    <Box className='services'>
     <div className="header1" >
      <div className="headerContent1">
        <h1 className='title1' >Booking a Musician</h1> 
            <h2 className='description1' >Music expresses that which cannot be put into words and that which cannot remain silent
 </h2>

            </div>
          
      </div>
    <Container 
    maxW={{md:'container.md', lg:'container.lg'}}
    mt='20'
    >
        <SimpleGrid  >
                <BookingCard />
        </SimpleGrid>
    </Container>
    
    </Box>
    </ChakraProvider>
  )
}

export default Booking
