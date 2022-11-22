import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import typesToColor from "../../utils/typesToColor";
import { IPokemon } from "../card";
import { Container, Detail, H1Component, TextComponent } from "./styles";

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

interface IDescription {
  data: IPokemonDescription | undefined;
}

interface IInformation {
  pokemon: IPokemon | undefined;
}

const Description = ({ data }: IDescription) => {
  const location = useLocation();
  const { pokemon }: IInformation = location.state;

  return (
    <Container>
      <H1Component>Descrição</H1Component>
      <Detail
        color={typesToColor(pokemon && pokemon.types[0].type.name)}
      ></Detail>
      <TextComponent>
        {data && data.flavor_text_entries[17].flavor_text}
      </TextComponent>
    </Container>
  );
};

export default Description;
