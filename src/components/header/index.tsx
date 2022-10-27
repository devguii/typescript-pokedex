import React from 'react'
import {Container, FilterContainer, Img, ImgContainer, TextComponent, TextContainer} from "./styles"

const Logo = require("./../../assets/images/logo.png")

const Filter = require("./../../assets/images/filter.png")

const Header = () => {
  return (
    <Container>
        <ImgContainer>
          <Img src={Logo} alt="logo"/>
        </ImgContainer>
        <TextContainer>
          <TextComponent>Pokédex</TextComponent>
        </TextContainer>
        <FilterContainer>
          <Img src={Filter} alt="logo"/>
        </FilterContainer>
    </Container>
  ) 
}

export default Header