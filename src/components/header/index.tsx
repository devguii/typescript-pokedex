import React from 'react'
import {Container, ImgContainer} from "./styles"

const Logo = require("./../../assets/images/logo.png")

function Header() {
  return (
    <Container>
        <ImgContainer>
        <img src={Logo} alt="logo" style={{transform:"scale(1.5)"}}/>
        </ImgContainer>
        <h1>Pokédex</h1>
    </Container>
  )
}

export default Header