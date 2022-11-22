import React from "react";
import typesToColor from "../../utils/typesToColor";
import { IPokemon } from "../card";
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
