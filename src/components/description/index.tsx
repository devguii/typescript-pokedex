import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IPokemon } from "../card";
import { Container, Detail, H1Component, TextComponent } from "./styles";

interface IPokemonDescription {
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
}

interface IDescription {
  name: string;
}

interface IDescriptionProps {
  data: IDescription;
}

interface IInformation {
  pokemon: IPokemon;
}

const Description = ({ data }: IDescriptionProps) => {
  const location = useLocation();
  const [pokemonDescription, setPokemonDescription] =
    useState<IPokemonDescription>();
  const { pokemon }: IInformation = location.state;

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${data.name}`)
      .then((res) => res.json())
      .then((data) => setPokemonDescription(data));
  }, [data]);

  return (
    <Container>
      <H1Component>Descrição</H1Component>
      <Detail></Detail>
      <TextComponent>
        {pokemonDescription &&
          pokemonDescription.flavor_text_entries[17].flavor_text}
      </TextComponent>
    </Container>
  );
};

export default Description;
