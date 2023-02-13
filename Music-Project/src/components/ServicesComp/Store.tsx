import React from 'react';
import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react'
import StoreCard from './ElementComp/StoreCard';
import instrumentList from './Instruments.json' 

export default function Store() {
  const [instruments, setInstrument]= React.useState(instrumentList)

  return (
    <Box className='services'>
     <div className="header3" >
      <div className="headerContent1">
        <h1 className='title1' >Musical Instruments</h1> 
            <h2 className='description1' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas illum, repudiandae omnis voluptatem impedit provident quaerat sed nostrum reiciendis aspernatur ipsum deleniti laudantium ullam! </h2>
            </div>
          
      </div>
      <Container align='center' maxW={{md:'container.md', lg:'container.xl'}} >
            <SimpleGrid columns={{ base: '1', md: '2', lg: '3' }}>
              {
                instruments.map(instrument =>{
                  return(
                    <StoreCard img={instrument.img} name={instrument.name} desc={instrument.desc} price={instrument.price}/>
                  )
                })
              }
            </SimpleGrid>
      </Container>
      </Box>

  )
}