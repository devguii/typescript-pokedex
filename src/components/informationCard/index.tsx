import { useEffect, useState } from "react";
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
  JapaneseTextComponent,
  ContainerDireita,
  SvgComponent,
  PathComponent,
  ContainerPai,
} from "./styles";

export interface IPokemonDescription {
  flavor_text_entries: [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    { flavor_text: string }
  ];
  names: [
    {
      language: {};
      name: string;
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ];
}

interface IInformation {
  pokemon: IPokemon;
}

interface IDescription {
  name: string;
  url: string;
}

interface IDescriptionProps {
  data: IDescription;
}

const InformationCard = () => {
  const location = useLocation();
  const { pokemon }: IInformation = location.state;
  const [pokemonDescription, setPokemonDescription] =
    useState<IPokemonDescription>();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`)
      .then((res) => res.json())
      .then((data) => setPokemonDescription(data));
  }, [pokemon]);

  return (
    <ContainerPai>
      <Wave
        fill={typesToColor(pokemon && pokemon.types[0].type.name)}
        paused={false}
        options={{
          height: 95,
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
          <JapaneseTextComponent>
            {pokemonDescription && pokemonDescription.names[0].name}
          </JapaneseTextComponent>
        </ImgContainer>
        <ContainerDireita>
          <InformationContainer
            color={typesToColor(pokemon && pokemon.types[0].type.name)}
          >
            <IconName></IconName>
            <Description data={pokemonDescription}></Description>
            <Caracteristiques data={pokemon}></Caracteristiques>
            <Stats data={pokemon}></Stats>
          </InformationContainer>
        </ContainerDireita>
      </Container>
    </ContainerPai>
  );
};

export default InformationCard;
