import React from 'react'
import { ChakraProvider,SimpleGrid, Box, Container,  Card, CardHeader, CardBody, CardFooter, Stack, Image, Heading, Text,Button  } from '@chakra-ui/react'
import LearningCard from './ElementComp/LearningCard'
import './Services.css'

export default function Learning() {
  return (
    <ChakraProvider>
    <Box className='services'>
     <div className="header2" >
      <div className="headerContent1">
        <h1 className='title1' >Music Education</h1> 
            <h2 className='description1' >Our goal is to combine the fun of learning and the arts of music with the best teachers, so that students can benefit from a wonderful musical experience </h2>
            </div>
          
      </div>
    <Container 
    maxW={{md:'container.md', lg:'container.lg'}}
    mt='20'
    >
        <SimpleGrid >
                <LearningCard />
        </SimpleGrid>
    </Container>
    </Box>
    </ChakraProvider>
  )
}