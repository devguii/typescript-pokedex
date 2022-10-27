import styled from "styled-components";
import { Input } from '@chakra-ui/react'
import { BiSearchAlt } from "react-icons/bi";

export const Container = styled.div`
width : 80%;
height : 100%;
justify-content: center;
align-items: center;
`
export const SearchIcon = styled(BiSearchAlt).attrs(() => ({
    size: 45,
    backgroundcolor: "red",
}))``