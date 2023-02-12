import React from 'react';
import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react'
import StoreCard from './ElementComp/StoreCard';

export default function Store() {
  let places =[
    {
      img:"https://media.istockphoto.com/id/1134290890/photo/traditional-musical-instrument-of-lute.jpg?b=1&s=170667a&w=0&k=20&c=t0sldLnAk0C_08WSkdCjt_3rYDaNWclYX-AePKz3MN8=",
      name:"Drum",
      desc:"lorenadmlorenadmvvlorenadmlorenadm,jkhgkkdlslalmxmkmmkdcnjdjkfkdklorenadmlorenadmvvlorenadmlorenadm,jkhgkkdlslalmxmkmmkdcnjdjkfkdk",
      price:"500 SAR"
    },
    {
      img:"https://images.unsplash.com/photo-1626962131658-603aae425e19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1600&q=60",
      name:"Drum",
      desc:"lorenadmlorenadmvvlorenadmlorenadm,jkhgkkdlslalmxmkmmkdcnjdjkfkdklorenadmlorenadmvvlorenadmlorenadm,jkhgkkdlslalmxmkmmkdcnjdjkfkdk",
      price:"500 SAR"
    },
    {
      img:"https://images.unsplash.com/photo-1554446422-c4d46271ab85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1600&q=60",
      name:"Drum",
      desc:"lorenadmlorenadmvvlorenadmlorenadm,jkhgkkdlslalmxmkmmkdcnjdjkfkdklorenadmlorenadmvvlorenadmlorenadm,jkhgkkdlslalmxmkmmkdcnjdjkfkdk",
      price:"500 SAR"
    },
    {
      img:"https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=60",
      name:"Drum",
      desc:"lorenadmlorenadmvvlorenadmlorenadm,jkhgkkdlslalmxmkmmkdcnjdjkfkdklorenadmlorenadmvvlorenadmlorenadm,jkhgkkdlslalmxmkmmkdcnjdjkfkdk",
      price:"500 SAR"
    },
    {
      img:"https://images.unsplash.com/photo-1530917203633-106d4a1a0967?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bXVzaWNhbCUyMGluc3RydW1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=1600&q=60",
      name:"Drum",
      desc:"lorenadmlorenadmvvlorenadmlorenadm,jkhgkkdlslalmxmkmmkdcnjdjkfkdklorenadmlorenadmvvlorenadmlorenadm,jkhgkkdlslalmxmkmmkdcnjdjkfkdk",
      price:"500 SAR"
    }, {
      img:"https://images.unsplash.com/photo-1573871666457-7c7329118cf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWNhbCUyMGluc3RydW1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=1600&q=60",
      name:"Drum",
      desc:"lorenadmlorenadmvvlorenadmlorenadm,jkhgkkdlslalmxmkmmkdcnjdjkfkdklorenadmlorenadmvvlorenadmlorenadm,jkhgkkdlslalmxmkmmkdcnjdjkfkdk",
      price:"500 SAR"
    },
    
  ]

  return (
    <>
 <Container align='center' maxW={{md:'container.md', lg:'container.xl'}} >
       <Heading  my='10'> Instruments Store </Heading> 
        <Heading size='sm' my='10' w={{lg:'70%'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas illum, repudiandae omnis voluptatem impedit provident quaerat sed nostrum reiciendis aspernatur ipsum deleniti laudantium ullam! Tempora, nulla laboriosam. Dolores, nemo ab.</Heading>
      <SimpleGrid columns={{ base: '1', md: '2', lg: '3' }}>
        {
          places.map(place =>{
            return(
              <StoreCard img={place.img} name={place.name} desc={place.desc} price={place.price}/>
            )
          })
        }
      </SimpleGrid>
      </Container>

    </>
  )
}