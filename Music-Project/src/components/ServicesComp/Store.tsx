import React from 'react';
import { ChakraProvider, Box, Container, Heading, SimpleGrid } from '@chakra-ui/react'
import StoreCard from './ElementComp/StoreCard';
import instrumentList from './Instruments.json' 

export default function Store() {
  const [instruments, setInstrument]= React.useState(instrumentList)

  return (
    <ChakraProvider>
    <Box className='services'>
     <div className="header3" >
      <div className="headerContent1">
        <h1 className='title1' >Musical Instruments</h1> 
            <h2 className='description1' >
              Here is a <span style={{fontWeight:'bold'}}>Musical Instruments Store</span> where you will shop our selection of instruments, musical equipment & supplies that have been used before and are still in good condition. Get the lowest prices & free shipping on most orders. </h2>
            </div>
          
      </div>
      <Container align='center' maxW={{md:'container.md', lg:'container.xl'}} >
            <SimpleGrid columns={{ base: '1', md: '2', lg: '3' }}>
              {
                instruments.map(instrument =>{
                  return(
                    <StoreCard img={instrument.img} name={instrument.name} desc={instrument.desc} price={instrument.price}
                    />
                  )
                })
              }
            </SimpleGrid>
      </Container>
      </Box>
    </ChakraProvider>
  )
}