import { Modal, ModalOverlay, ModalContent, useDisclosure, Image } from '@chakra-ui/react'

const CustomModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Image onClick={onOpen} borderColor='whiteAlpha.800' borderStyle='solid' maxWidth='400px' src='/images/anthony-heinrichs-cv.png' alt='Profile Pciture' />

      <Modal onClose={onClose} size='full' isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <Image src='/images/anthony-heinrichs-cv.png' alt='Profile Pciture' />
        </ModalContent>
      </Modal>
    </>
  )
}

export default CustomModal
