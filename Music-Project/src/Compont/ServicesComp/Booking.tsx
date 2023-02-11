import React from 'react'
import { SimpleGrid, Box, Container,  Card, CardHeader, CardBody, CardFooter, Stack, Image, Heading, Text,Button  } from '@chakra-ui/react'
import CardComp from './ElementComp/CardComp'



function Booking( ) {
  return (
    <Container>
        <h1 align="center" >Booking</h1> 
        <SimpleGrid spacing={10} >
                <CardComp/>
        </SimpleGrid>
    </Container>
  )
}

export default Booking