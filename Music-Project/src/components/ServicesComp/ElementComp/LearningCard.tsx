import React from 'react'
import { Card,
        CardHeader,
        CardBody, CardFooter, Stack, Image, Heading, Text,Button, ListItem, List,} from '@chakra-ui/react'


function LearningCard() {
    let instructors= [
        {
            id:1,
            image:"https://images.unsplash.com/photo-1667280771121-4c8d9d0378e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=893&q=80",
            name: "Jorej Michle",
            instruments:"Paino, Getar",
            Description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur quasi incidunt laboriosam fuga",
            AvailableTime: "Thursday, Wednesday, Friday",
            Price:"100SAR per hour"
        },
        {
            id:2,
            image:"https://images.unsplash.com/photo-1519139270028-ab664cf42264?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1600&q=60",
            name: "Jorej Michle",
            instruments:"Paino, Getar",
            Description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur quasi incidunt laboriosam fuga",
            AvailableTime: "Thursday, Wednesday, Friday",
            Price:"100SAR per hour"
        },
        {
            id:2,
            image:"https://images.unsplash.com/photo-1501492765677-f07c5f3d87db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=60",
            name: "Jorej Michle",
            instruments:"Paino, Getar",
            Description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur quasi incidunt laboriosam fuga",
            AvailableTime: "Thursday, Wednesday, Friday",
            Price:"100SAR per hour"
        },
        {
            id:3,
            image:"https://media.istockphoto.com/id/611630716/photo/inspired-young-man-performing-music-on-guitar.jpg?s=170667a&w=0&k=20&c=F_ScvxCETNhtz5Njc6f3YVE9OxJT50EG9kk7tFiuT4M=",
            name: "Jorej Michle",
            instruments:"Paino, Getar",
            Description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur quasi incidunt laboriosam fuga",
            AvailableTime: "Thursday, Wednesday, Friday",
            Price:"100SAR per hour"
        },
    ]
  return (
    <>
    {instructors.map((instructor, index)=>{
        return (
            <Card 
                            direction={{ base: 'column', sm: 'row' }}
                            width ={{base: '100%', sm: '730px', lg:'1000px' }}
                            overflow='hidden'
                            // variant='outline'
                            boxShadow='xl'
                            gap={20}
                            bg='#f3f1e8'
                            >
                            <Image
                                objectFit='cover'
                                borderRadius='lg'
                                maxW={{ base: '100%', sm: '320px' }}
                                maxH={{ base: '250px', sm: '100%'}}
                                src={instructor.image}
                                alt='Caffe Latte'
                            />

                    <Stack align='center'>
                        <CardBody align='center' width='500px'>
                        <Heading size='md'>{instructor.name}</Heading>

                        <Text py='2'>
                            {instructor.Description}
                        </Text>
                        <List spacing={3} mt='3'>
                            <ListItem >
                                <Heading size='sm'>Instruments: </Heading> 
                                {instructor.instruments}
                            </ListItem>
                            <ListItem >
                                <Heading size='sm'>Available Time: </Heading> 
                                {instructor.AvailableTime}
                            </ListItem>
                            <ListItem >
                                <Heading size='sm'>Price: </Heading> 
                                {instructor.Price}
                            </ListItem>
                        </List>
                        </CardBody>

                        <CardFooter>
                        <Button variant='solid' bg='#221409'
                                color='white'
                                py='7'
                                px='5'
                                _hover={{ bg: '#221409' }}>
                                    Booking a Lesson
                                </Button>
                        </CardFooter>
                    </Stack>
                </Card>
        )
        
    })}
    
    </>
  )
}

export default LearningCard