import React, { useState } from 'react'
import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
const Signup = () => {



  



  const [show, setShow] = useState(false)
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [profilePhoto, setProfilePhoto] = useState();
  const toast = useToast()



  const handleShow = () => {
    setShow(!show)
  }

  const postDetails = (profilePhoto) => {

  }

  const submitHandler = async () => {
    const data = await axios.post('http://localhost:8080/user/signup', {
      name: name, email: email, password: password, confirmPassword: confirmPassword, profilePhoto: profilePhoto
    });
    toast({
      title: 'Account created.',
      description: "We've created your account for you.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })

    console.log(data);
  }

  return (<>
    <VStack spacing='5px' color='black'>



      <FormControl id='Name' isRequired paddingBottom='10px'>

        <Input placeholder='Username' onChange={(e) => setName(e.target.value)} />

      </FormControl>



      <FormControl id='Email' isRequired paddingBottom='10px'>

        <Input placeholder='Email' onChange={(e) => setEmail(e.target.value)} />

      </FormControl>




      <FormControl id='Password' isRequired paddingBottom='10px' >

        <InputGroup>
          <Input placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} type={show ? 'text' : 'password'} />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleShow}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>

      </FormControl>



      <FormControl id='ConfirmPassword' isRequired paddingBottom='10px' >

        <InputGroup>
          <Input placeholder='Enter Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)} type={show ? 'text' : 'password'} />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleShow}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>


      </FormControl>

      <FormControl id='profilePhoto' paddingBottom='5px'>
        <FormLabel>Upload Photo (Not working)</FormLabel>
        <Input type='file' p={1.5} accept='image/*' onChange={(e) => postDetails(e.target.files[0])} />

      </FormControl>

      <Button colorScheme='green' width='50%' style={{ marginTop: 15 }} onClick={submitHandler}>
        Sign Up
      </Button>

    </VStack>
  </>

  )
}

export default Signup