import React from 'react'
import { SimpleGrid, Box, Container,  Card, CardHeader, CardBody, CardFooter, Stack, Image, Heading, Text,Button  } from '@chakra-ui/react'
import BookingCard from './ElementComp/BookingCard'
import './Services.css'


function Booking( ) {
  return (
    <Box className='services'>
     <div className="header1" >
      <div className="headerContent1">
        <h1 className='title1' >Booking a Musician</h1> 
            <h2 className='description1' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas illum, repudiandae omnis voluptatem impedit provident quaerat sed nostrum reiciendis aspernatur ipsum deleniti laudantium ullam! </h2>
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
  )
}

export default Booking
