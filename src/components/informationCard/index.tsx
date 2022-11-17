import React from "react";
import { useLocation } from "react-router-dom";
import Wave from "react-wavify";
import typesToColor from "../../utils/typesToColor";
import Caracteristiques from "../caracteristiques";
import { IPokemon } from "../card";
import Description from "../description";
import IconName from "../iconName";
import Stats from "../stats";
import {
  Container,
  ImgContainer,
  ImgComponent,
  InformationContainer,
  TextComponent,
  ContainerDireita,
  SvgComponent,
  PathComponent,
  ContainerPai,
} from "./styles";

interface IInformation {
  pokemon: IPokemon;
}

const InformationCard = () => {
  const location = useLocation();
  const { pokemon }: IInformation = location.state;

  return (
    <ContainerPai>
      <Wave
        fill={typesToColor(pokemon && pokemon.types[0].type.name)}
        paused={false}
        options={{
          height: 100,
          amplitude: 40,
          speed: 0.16,
          points: 2,
        }}
        style={{ position: "absolute", zIndex: -1, bottom: 0, height: "50vh" }}
      />
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
          <InformationContainer
            color={typesToColor(pokemon && pokemon.types[0].type.name)}
          >
            <IconName></IconName>
            <Description data={pokemon}></Description>
            <Caracteristiques></Caracteristiques>
            <Stats></Stats>
          </InformationContainer>
        </ContainerDireita>
      </Container>
    </ContainerPai>
  );
};

export default InformationCard;
