import React from 'react'
import { ChakraProvider,
        Card,
        CardHeader,
        CardBody, CardFooter, Stack, Image, Heading, Text,Button, ListItem, List,} from '@chakra-ui/react'
import '../Services.css'
import musiciansList from './Musicians.json' 
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert2'

function BookingCard() {
    const [musicians, setMusicians]= React.useState(musiciansList)
    const navigate = useNavigate()

    const checkLogIn =(name:string,price:any, img:string )=>{
        if (localStorage.getItem("name") != null){
            //redirect to form
            navigate('/bookingFom')
            localStorage.setItem("musicianName",name )
            localStorage.setItem("musicianPrice",price )
            localStorage.setItem("musicianImage",img )
            
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
    {musicians.map((musician:any, index)=>{
        if (index%2 == 0){// use if to make row reverse 
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
                                src={musician.image}
                                alt='Caffe Latte'
                            />
        
                            <Stack align='center'
                            >
                                <CardBody align='center'>
                                <Heading size='md'>{musician.name}</Heading>
        
                                <Text py='2'>
                                    {musician.Description}
                                </Text>
                                <List spacing={3} mt='3'>
                                    <ListItem >
                                        <Heading size='sm'>Instruments: </Heading> 
                                        {musician.instruments}
                                    </ListItem>
                                    <ListItem >
                                        <Heading size='sm'>Available Time: </Heading> 
                                        {musician.AvailableTime}
                                    </ListItem>
                                    <ListItem >
                                        <Heading size='sm'>Price: </Heading> 
                                        {musician.Price}SAR per hour
                                    </ListItem>
                                </List>
                                </CardBody>
        
                                <CardFooter>
                                
                                <Button 
                                onClick={()=>
                                    checkLogIn(
                                        musician.name,
                                        musician.Price,
                                        musician.image
                                        )}
                                variant='solid' 
                                bg='#221409'
                                color='white'
                                py='5'
                                px='5'
                                _hover={{ bg: '#221409' }}>
                                    Booking
                                </Button>
                                </CardFooter>
                            </Stack>
                        </Card>
                )
        }else{
            return (
                <Card
                        direction={{ base: 'column', sm: 'row-reverse' }}
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
                            src={musician.image}
                            alt='Caffe Latte'
                        />
    
                        <Stack align='center'>
                            <CardBody 
                            align='center'
                            >
                            <Heading size='md'>{musician.name}</Heading>
    
                            <Text py='2'>
                                {musician.Description}
                            </Text>
                            <List spacing={3} mt='3'>
                                    <ListItem >
                                        <Heading size='sm'>Instruments: </Heading> 
                                        {musician.instruments}
                                    </ListItem>
                                    <ListItem >
                                        <Heading size='sm'>Available Time: </Heading> 
                                        {musician.AvailableTime}
                                    </ListItem>
                                    <ListItem >
                                        <Heading size='sm'>Price: </Heading> 
                                        {musician.Price}SAR per hour
                                    </ListItem>
                                </List>
                            </CardBody>
    
                            <CardFooter alignItems='left'>
                            <Button 
                            onClick={()=>checkLogIn
                                (musician.name,
                                musician.price,
                                musician.image
                                )}
                            variant='solid' 
                            bg='#221409'
                            color='white'
                            py='5'
                            px='5'
                            _hover={{ bg: '#221409' }}>
                                Booking
                            </Button>
                            </CardFooter>
                        </Stack>
                    </Card>
            )
        }
        
    })}
    
    </ChakraProvider>
  )
}

export default BookingCard