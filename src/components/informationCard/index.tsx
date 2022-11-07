import React from "react";
import { useLocation } from "react-router-dom";
import { IPokemon } from "../card";
import {
  Container,
  ImgContainer,
  ImgComponent,
  InformationContainer,
} from "./styles";

interface IInformation {
  pokemon: IPokemon;
}

const InformationCard = () => {
  const location = useLocation();
  const { pokemon }: IInformation = location.state;

  console.log(pokemon.id);
  return (
    <Container>
      <ImgContainer>
        <ImgComponent
          src={pokemon.sprites.other.home.front_default}
        ></ImgComponent>
      </ImgContainer>
      <InformationContainer></InformationContainer>
    </Container>
  );
};

export default InformationCard;
