import React from 'react'
import { SimpleGrid, Box, Container,  Card, CardHeader, CardBody, CardFooter, Stack, Image, Heading, Text,Button  } from '@chakra-ui/react'
import LearningCard from './ElementComp/LearningCard'
import './Services.css'

export default function Learning() {
  return (
    <Box className='services'>
     <div className="header2" >
      <div className="headerContent1">
        <h1 className='title1' >Music Education</h1> 
            <h2 className='description1' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas illum, repudiandae omnis voluptatem impedit provident quaerat sed nostrum reiciendis aspernatur ipsum deleniti laudantium ullam! </h2>
            </div>
          
      </div>
    <Container 
    maxW={{md:'container.md', lg:'container.lg'}}
    my='10'
    >
        <SimpleGrid spacing={10} >
                <LearningCard />
        </SimpleGrid>
    </Container>
    </Box>
  )
}