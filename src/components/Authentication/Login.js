import React ,{useState} from 'react'

import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'


const Login = () => {

   const [email, setEmail] = useState()
   const [password, setPassword] = useState()
   const [show, setShow] = useState(false)

  const handleShow= () => {
      setShow(!show)
  }

  const submitHandler = () => {
    
  }


  return (<>
    <VStack spacing='5px' color='black'>
      <FormControl id='Email' isRequired paddingBottom='10px'>

        <Input placeholder='Email' onChange={(e) => setEmail(e.target.value)} />

      </FormControl>



      <FormControl id='Password' isRequired paddingBottom='10px' >

        <InputGroup>
          <Input placeholder='Password' onChange={(e) => setPassword(e.target.value)} type={show ? 'text' : 'password'} />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleShow}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>

      </FormControl>




      <Button colorScheme='green' width='100%' style={{ marginTop: 15 }} onClick={submitHandler}>
        Login
      </Button>

      <Button colorScheme='blue' width='100%' style={{ marginTop: 15 }} onClick={() => { setEmail('@123'); setPassword('123') }}>
        Get Guest User Credentials
        </Button>

    </VStack>
  </>
  )
}

export default Login