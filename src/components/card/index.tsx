import React, { useEffect, useState } from "react";
import typesToColor from "../../utils/typesToColor";
import {
  Container,
  IdContainer,
  Img,
  ImgContainer,
  NameContainer,
} from "./styles";

import { Spinner } from "@chakra-ui/react";
const Pokemon = require("./../../assets/images/logo.png");

interface IPokemon {
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
  sprites: { front_default: string };
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
  }, [pokemon]);

  return (
    <Container color={typesToColor(pokemon && pokemon.types[0].type.name)}>
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
            <Img src={pokemon && pokemon.sprites.front_default} />
          </ImgContainer>
          <NameContainer
            color={typesToColor(pokemon && pokemon.types[0].type.name)}
          >
            <text>{pokemon && pokemon.name}</text>
          </NameContainer>
        </>
      )}
    </Container>
  );
};

export default Card;
