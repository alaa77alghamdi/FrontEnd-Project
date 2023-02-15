import React from 'react'
import { ChakraProvider, 
        Card,
        CardHeader,
        CardBody, CardFooter, Stack, Image, Heading, Text,Button, ListItem, List,} from '@chakra-ui/react'
import instructorList from './Instructors.json' 
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert2'

function LearningCard() {
    const [instructors, setInstructors]= React.useState(instructorList)
    const navigate = useNavigate()

    const checkLogIn =(name:string,price:any, img:string )=>{
        if (localStorage.getItem("name") != null){
            //redirect to form
            navigate('/learningFom')
            localStorage.setItem("instructorName",name )
            localStorage.setItem("instructorPrice",price )
            localStorage.setItem("instructorImage",img )
        }else{
            //redirect to logIn
                swal.fire({
                    icon: 'info',
                    text: 'Please, you need Log In first',
                    iconColor: '#221409',
                    showCloseButton: true,
                    showCancelButton: true,
                    focusConfirm: false,
                    background: '#f3f1e8',
                    confirmButtonColor: '#221409',
                    cancelButtonColor:'#221409',
                    confirmButtonText: 'OK',
                    cancelButtonText:
                    'Cancel',
                }).then((result: { isConfirmed: any; }) => {
                    if (result.isConfirmed) {
                        navigate('/logIn')
                    }})

        }
    }
    
  return (
    <ChakraProvider>
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
                            mb='20'
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
                        <CardBody align='center'>
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
                                {instructor.Price}SAR per hour
                            </ListItem>
                        </List>
                        </CardBody>

                        <CardFooter>
                        <Button 
                        onClick={()=>
                            checkLogIn(
                                instructor.name,
                                instructor.Price,
                                instructor.image
                                )}
                        variant='solid' 
                        bg='#221409'
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
    
    </ChakraProvider>
  )
}

export default LearningCard