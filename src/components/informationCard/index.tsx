import React from "react";
import { useLocation } from "react-router-dom";
import { IPokemon } from "../card";
import {
  Container,
  ImgContainer,
  ImgComponent,
  InformationContainer,
  TextComponent,
  ContainerDireita,
} from "./styles";

interface IInformation {
  pokemon: IPokemon;
}

const InformationCard = () => {
  const location = useLocation();
  const { pokemon }: IInformation = location.state;

  return (
    <Container>
      <ImgContainer>
        <ImgComponent
          src={pokemon.sprites.other.home.front_default}
        ></ImgComponent>
        <TextComponent>
          #{pokemon && pokemon.id} {pokemon.name}
        </TextComponent>
      </ImgContainer>
      <ContainerDireita>
        <InformationContainer></InformationContainer>
      </ContainerDireita>
    </Container>
  );
};

export default InformationCard;
