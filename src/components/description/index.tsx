import { useEffect, useState } from "react";
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

const Description = ({ data }: IDescription) => {
  return (
    <Container>
      <H1Component>Descrição</H1Component>
      <Detail></Detail>
      <TextComponent>
        {data && data.flavor_text_entries[17].flavor_text}
      </TextComponent>
    </Container>
  );
};

export default Description;
