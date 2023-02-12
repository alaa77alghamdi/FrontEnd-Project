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
  
  interface CardProp {
    img:string;
    name:string;
    desc: string;
    price: string;

 }
  
  export default function ProductSimple({img, name, desc, price}:CardProp ) {
    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'370px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
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
              <Text  color={'gray.600'} w={'300px'}>
              {desc}
              </Text>
            </Stack>
            <Text fontWeight={400} fontSize={'xl'}>
                Price: <i>{price}</i>
              </Text>
              <Button variant='solid' colorScheme='blue' px='6'>
            Buy
            </Button>
          </Stack>
          
        </Box>
      </Center>
    );
  }