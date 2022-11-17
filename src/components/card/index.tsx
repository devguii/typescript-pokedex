import React, { useEffect, useState } from "react";
import typesToColor from "../../utils/typesToColor";
import {
  Container,
  IdContainer,
  Img,
  ImgContainer,
  NameContainer,
  TextComponent,
} from "./styles";

import { Spinner } from "@chakra-ui/react";
import { Link, useRoutes } from "react-router-dom";

export interface IPokemon {
  abilities: [];
  base_experience: number;
  forms: [];
  game_indices: [];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: [];
  name: string;
  order: number;
  past_types: [];
  species: {};
  sprites: {
    front_default: string;
    other: {
      home: { front_default: string };
      dream_world: { front_default: string };
      "official-artwork": { front_default: string };
    };
    versions: {
      "generation-vii": {
        "ultra-sun-ultra-moon": {
          front_default: string;
        };
      };
    };
  };
  stats: [];
  types: [
    {
      type: {
        name: string;
        url: string;
      };
    }
  ];
  weight: number;
}

interface ICard {
  name: string;
  url: string;
}

interface ICardProps {
  data: ICard;
}

const Card = ({ data }: ICardProps) => {
  const [pokemon, setPokemon] = useState<IPokemon>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${data.name}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
    setLoading(false);
  }, [data]);

  return (
    <Container color={typesToColor(pokemon && pokemon.types[0].type.name)}>
      <Link to="/information" state={{ pokemon }}>
        Detalhes
      </Link>
      {loading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : (
        <>
          <IdContainer
            color={typesToColor(pokemon && pokemon.types[0].type.name)}
          >
            <text># {pokemon && pokemon.id}</text>
          </IdContainer>
          <ImgContainer>
            <Img
              src={
                pokemon &&
                pokemon.sprites.other["official-artwork"].front_default
              }
            />
          </ImgContainer>
          <NameContainer
            color={typesToColor(pokemon && pokemon.types[0].type.name)}
          >
            <TextComponent
              color={typesToColor(pokemon && pokemon.types[0].type.name)}
            >
              {pokemon && pokemon.name}
            </TextComponent>
          </NameContainer>
        </>
      )}
    </Container>
  );
};

export default Card;
