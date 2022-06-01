import { IconButton, Popover, PopoverTrigger, PopoverContent, PopoverCloseButton, PopoverHeader, PopoverBody } from '@chakra-ui/react'

const Skill = ({logo, language, body}) => {
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton bg='none' variant='solid' size='lg' fontSize='40px' icon={logo} />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverCloseButton />
        <PopoverHeader fontWeight='bold'>{language}</PopoverHeader>
        <PopoverBody>{body}</PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default Skill;
