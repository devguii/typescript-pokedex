import React from "react";
import { useLocation } from "react-router-dom";
import { Container, ImgComponent, ImgContainer, TextComponent } from "./styles";
import { IPokemon } from "../card";

interface IInformation {
  pokemon: IPokemon;
}

const IconName = () => {
  const location = useLocation();
  const { pokemon }: IInformation = location.state;

  return (
    <Container>
      <ImgContainer>
        <ImgComponent src={pokemon.sprites.front_default} />
      </ImgContainer>
      <TextComponent>{pokemon.name}</TextComponent>
    </Container>
  );
};

export default IconName;
