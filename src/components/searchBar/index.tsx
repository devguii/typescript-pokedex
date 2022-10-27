import { Input, InputGroup, InputLeftElement, InputRightElement, Stack } from '@chakra-ui/react'
import React from 'react'
import { Container, SearchIcon } from './styles'

const Filter = require("./../../assets/images/filter.png")

const SearchBar = () => {
  return (
  <Container>
    <InputGroup>
      <InputLeftElement
        pointerEvents='none'
        children={<SearchIcon />}
      />
      <Input type='tel' placeholder='Procurar'/>
    </InputGroup>
  </Container>  
  )
}

export default SearchBar
