import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Container, ContainerFather, InputContainer, SearchIcon } from './styles'

const Filter = require("./../../assets/images/filter.png")

const SearchBar = () => {
  return (
    <ContainerFather>
      <Container>
        <InputContainer>
          <InputLeftElement
            pointerEvents='none'
            children={<SearchIcon />}
          />
          <Input type='tel' placeholder='Procurar' style={{textAlign:'center'}}/>
        </InputContainer>
      </Container>
    </ContainerFather>
    
  )
}

export default SearchBar
