import {
    ChakraProvider,
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
  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    
  } from '@chakra-ui/react'
  import { CheckCircleIcon } from '@chakra-ui/icons'
  import swal from 'sweetalert2'

  interface CardProp {
    img:string;
    name:string;
    desc: string;
    price: string;

 }
  
  export default function ProductSiple({img, name, desc, price}:CardProp ) {
    const navigate = useNavigate()
//--------------------Modal-------------------
    const { isOpen, onOpen, onClose } = useDisclosure()

  //   const viewCart =()=>{
  //         //redirect to profile
  //         navigate('/profile')
  //         localStorage.setItem("nameInstrument", name)
  //         localStorage.setItem("img", img)
  //         localStorage.setItem("desc", desc)
  //         localStorage.setItem("price", price)
  // }
  const showAlert=()=>{
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
  const showConfirmAlert = ()=>{
    swal.fire({
      icon: 'success',
      text: 'Instrument was added to the cart',
      iconColor: '#221409',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      background: '#f3f1e8',
      confirmButtonColor: '#221409',
      cancelButtonColor:'#221409',
      // confirmButtonText: '<a href="/">OK</a>',
      confirmButtonText: 'View Cart',
      cancelButtonText:
      'Continue Shopping',
  }).then((result: { isConfirmed: any; }) => {
    if (result.isConfirmed) {
      navigate('/profile')
      localStorage.setItem("nameInstrument", name)
      localStorage.setItem("img", img)
      localStorage.setItem("desc", desc)
      localStorage.setItem("price", price)
    }
  })
  }
    return (
      <ChakraProvider>
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
              {localStorage.getItem('name') != null?
              (<Button 
              // onClick={onOpen}
              onClick={showConfirmAlert}
              variant='solid' 
              bg='#221409'
              color='white'
              py='6'
              px='8'
              _hover={{ bg: '#221409' }}>
                  Buy
              </Button>)
              :
              (<Button 
              // onClick={()=> {
              //   alert("please you need Log In first")
              //   navigate('/logIn')
              // }}
              onClick={showAlert}
              variant='solid' 
              bg='#221409'
              color='white'
              py='6'
              px='8'
              _hover={{ bg: '#221409' }}>
                  Buy
              </Button>)
              }
              
          </Stack>
          
        </Box>
      </Center>
      <Modal isOpen={isOpen} onClose={onClose}         motionPreset='slideInBottom' isCentered>
          <ModalOverlay />

          <ModalContent >
            <ModalHeader  align='center'>
            <CheckCircleIcon boxSize={8} color='#221409' mt='5' />
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody align='center' mb='5'>
              Instrument was added to the cart
            </ModalBody>
            <ModalFooter>
              <Button 
              bg='rgba(255, 255, 255, 0.5)'
              _hover={{ bg: 'rgba(255, 255, 255, 0.6)' }}
              color='white' 
              mr={3} 
              onClick={onClose}>
                Continue Shopping
              </Button>
              <Button
              // onClick={viewCart} 
              variant='ghost'
              _hover={{ bg: 'rgba(255, 255, 255, 0.6)' }}
              color='white'
              border='1px'
              borderColor='gray.200'
              >View Cart</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </ChakraProvider>
    );
  }