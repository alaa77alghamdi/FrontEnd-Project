import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
    CardFooter,
  } from '@chakra-ui/react';
  import { useNavigate } from 'react-router-dom';

  interface CardProp {
    img:string;
    name:string;
    desc: string;
    price: string;

 }
  
  export default function ProductSimple({img, name, desc, price}:CardProp ) {
    const navigate = useNavigate()

    const checkLogIn =()=>{
      if (localStorage.getItem("name") != null){
          //redirect to profile
          navigate('/profile')
          localStorage.setItem("nameInstrument", name)
          localStorage.setItem("img", img)
          localStorage.setItem("desc", desc)
          localStorage.setItem("price", price)
          
      }else{
          //redirect to logIn
          navigate('/logIn')
      }
  }
    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'350px'}
          w={'full'}
          // bg={useColorModeValue('white', 'gray.800')}
          bg='#f3f1e8'
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={0}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${img})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={350}
              objectFit={'cover'}
              src={img}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
             {name}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text  color={'gray.600'} w={'200px'}>
              {desc}
              </Text>
            </Stack>
            <Text fontWeight={400} fontSize={'xl'}>
                Price: <i>{price}</i>
              </Text>
              <Button 
              onClick={checkLogIn}
              variant='solid' 
              bg='#221409'
              color='white'
              py='6'
              px='8'
              _hover={{ bg: '#221409' }}>
                  Buy
              </Button>

          </Stack>
          
        </Box>
      </Center>
    );
  }