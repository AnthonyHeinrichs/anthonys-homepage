import { Modal, ModalOverlay, ModalContent, useDisclosure, Image, Box } from '@chakra-ui/react'

const CustomModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box boxShadow='dark-lg' p='6' rounded='md' bg='white'>
        <Image onClick={onOpen} borderColor='whiteAlpha.800' borderStyle='solid' maxWidth='360px' src='/images/anthony-heinrichs-cv.png' alt='Profile Pciture' />
      </Box>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <Image src='/images/anthony-heinrichs-cv.png' alt='Profile Pciture' />
        </ModalContent>
      </Modal>
    </>
  )
}

export default CustomModal
