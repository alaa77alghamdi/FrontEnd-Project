import React from 'react'
import { SimpleGrid, Box, Container,  Card, CardHeader, CardBody, CardFooter, Stack, Image, Heading, Text,Button  } from '@chakra-ui/react'
import BookingCard from './ElementComp/BookingCard'
import Nav from '../Nav'
import Footer from '../Footer'
import './Services.css'


function Booking( ) {
  return (
    <Box className='services'>
    <Nav/>
    {/* <Image src="https://images.unsplash.com/photo-1591025810539-a321000cda85?ixlib=rb-4.0.3&dpr=1&auto=format&fit=crop&w=1600&h=500&q=60" alt=""
    opacity='0.2' /> */}
     <div className="header1" >
      <div className="headerContent1">
        <h1 className='title1' >Booking a Musician</h1> 
            <h2 className='description1' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas illum, repudiandae omnis voluptatem impedit provident quaerat sed nostrum reiciendis aspernatur ipsum deleniti laudantium ullam! </h2>
            </div>
          
      </div>
    <Container 
    maxW={{md:'container.sm', lg:'container.md'}}
    my='10'
    >
       
        <SimpleGrid spacing={10} >
                <BookingCard />
        </SimpleGrid>
    </Container>
    <Footer/>
    </Box>
  )
}

export default Booking
