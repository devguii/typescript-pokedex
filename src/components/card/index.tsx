import React from 'react'
import { Container, IdContainer, Img, ImgContainer, NameContainer } from './styles'

const Pokemon = require("./../../assets/images/logo.png")

const Card = () => {
  return (
    <Container>
        <IdContainer>
            <text>ID: 01</text>
        </IdContainer>
            
        <ImgContainer>
            <Img src={Pokemon}/>
        </ImgContainer>

        <NameContainer>
            <text>Bulbasaur</text>
        </NameContainer>
    </Container>
  )
}

export default Card