import React from 'react'
import { SimpleGrid, Box, Container,  Card, CardHeader, CardBody, CardFooter, Stack, Image, Heading, Text,Button  } from '@chakra-ui/react'
import LearningCard from './ElementComp/LearningCard'

export default function Learning() {
  return (
    <Container align='center' maxW={{md:'container.sm', lg:'container.md'}} >
        <Heading  my='10'>Learning Music </Heading> 
        <Heading size='sm' my='10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas illum, repudiandae omnis voluptatem impedit provident quaerat sed nostrum reiciendis aspernatur ipsum deleniti laudantium ullam! Tempora, nulla laboriosam. Dolores, nemo ab.</Heading>
        <SimpleGrid spacing={10} >
                <LearningCard />
        </SimpleGrid>
    </Container>
  )
}