import React from "react";
import typesToColor from "../../utils/typesToColor";
import {
  Container,
  DataComponent,
  DataContainer,
  Detail,
  H1Component,
  Img,
  ImgContainer,
  OrganizeContainer,
  TextComponent,
} from "./styles";

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

interface ICaracteristiques {
  data: IPokemon | undefined;
}

const Weight = require("./../../assets/images/weight.png");

const Height = require("./../../assets/images/height.png");

const Caracteristiques = ({ data }: ICaracteristiques) => {
  return (
    <Container>
      <H1Component>Características</H1Component>
      <Detail color={typesToColor(data && data.types[0].type.name)}></Detail>
      <OrganizeContainer>
        <DataContainer>
          <TextComponent>Weight:</TextComponent>
          <DataComponent>{data && data.weight}kg</DataComponent>
        </DataContainer>
        <ImgContainer>
          <Img src={Weight} alt="weight" />
        </ImgContainer>

        <DataContainer>
          <TextComponent>Height:</TextComponent>
          <DataComponent>{data && data.height}m </DataComponent>
        </DataContainer>
        <ImgContainer>
          <Img src={Height} alt="height" />
        </ImgContainer>
      </OrganizeContainer>
    </Container>
  );
};

export default Caracteristiques;
