import React, { useState } from 'react'
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
const Signup = () => {


  const [show, setShow] = useState(false)
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [profilePhoto, setProfilePhoto] = useState();




  const handleShow = () => {
    setShow(!show)
  }

  const postDetails = (profilePhoto) => {
    
  }

  const submitHandler = () => {
    
  }

  return (<>
    <VStack spacing='5px' color='black'>



      <FormControl id='Name' isRequired paddingBottom='10px'>

        <Input placeholder='Username' onchange={(e) => setName(e.target.value)} />

      </FormControl>



      <FormControl id='Email' isRequired paddingBottom='10px'>

        <Input placeholder='Email' onchange={(e) => setName(e.target.value)} />

      </FormControl>



      <FormControl id='Password' isRequired paddingBottom='10px' >

        <InputGroup>
          <Input placeholder='Enter Password' onchange={(e) => setPassword(e.target.value)} type={show ? 'text' : 'password'} />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleShow}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>

      </FormControl>



      <FormControl id='ConfirmPassword' isRequired paddingBottom='10px' >

        <InputGroup>
          <Input placeholder='Enter Confirm Password' onchange={(e) => setConfirmPassword(e.target.value)} type={show ? 'text' : 'password'} />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleShow}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>


      </FormControl>

      <FormControl id='profilePhoto' paddingBottom='5px'>
        <FormLabel>Upload Photo</FormLabel>
        <Input type='file' p={1.5} accept='image/*' onchange={(e) => postDetails(e.target.files[0])} />

      </FormControl>

      <Button colorScheme='green' width='50%' style={{ marginTop: 15 }} onClick={submitHandler}>
          Sign Up
    </Button>

    </VStack>
  </>

  )
}

export default Signup