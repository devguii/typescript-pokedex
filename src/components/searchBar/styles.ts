import styled from "styled-components";
import { Input, InputGroup } from '@chakra-ui/react'
import { BiSearchAlt } from "react-icons/bi";

export const ContainerFather = styled.div`
width : 100%;
height : 100%;
align-self: center;
display: flex;
justify-content: center;
align-items: center;
`
export const Container = styled.div`
width : 70%;
height : 100%;
align-self: center;
display: flex;
justify-content: center;
align-items: center;
`
export const InputContainer = styled(InputGroup).attrs(() => ({ 
    
}))`
height : 100%; 
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50%;
`


export const SearchIcon = styled(BiSearchAlt).attrs(() => ({
    size: 25
}))``