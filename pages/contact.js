import { Container, Box, Heading, Input, Button, useToast, Textarea } from '@chakra-ui/react'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'
import Section from '../components/section'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react'

const Contact = () => {
  const form = useRef();
  const toast = useToast()

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        emailjs.sendForm('service_bdo7xz2', 'template_80ivt87', form.current, 'kwKSPUi0QO0oI8i6K')
        toast({
          title: 'Message sent.',
          description: "Thanks for sending me a message!",
          status: 'success',
          colorScheme: 'teal',
          duration: 9000,
          isClosable: true,
        })
        resolve()
      }, 3000)
    })
  }

  return (
    <Container>
      <Box display={{ md: 'flex' }} mt={16} mb={8} flexGrow={1}>
        <Heading as='h2' variant='page-title'>
          Send me a message
        </Heading>
      </Box>
      <Section delay={0.1}>
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors.name}>
            <Input
              id='name'
              placeholder='Name'
              name='user_name'
              mt={4}
              borderColor={{ color: 'inherit' }}
              _placeholder={{ color: 'inherit' }}
              {...register('name', {
                required: 'This is required',
              })}
            />
            <Input
              id='email'
              placeholder='Email'
              name='user_email'
              borderColor={{ color: 'inherit' }}
              _placeholder={{ color: 'inherit' }}
              mt={4}
              {...register('email', {
                required: 'This is required',
                minLength: { value: 4, message: 'Minimum length should be 4' },
              })}
            />
            <Textarea
              id='message'
              placeholder='Message'
              name='message'
              borderColor={{ color: 'inherit' }}
               _placeholder={{ color: 'inherit' }}
               mt={4}
              {...register('message', {
                required: 'This is required',
                minLength: { value: 4, message: 'Minimum length should be 4' },
              })}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <Button mt={6} width={40} colorScheme='teal' isLoading={isSubmitting} type='submit' variant='solid'>
            Submit
          </Button>
        </form>
      </Section>
    </Container>
  )
};

export default Contact
