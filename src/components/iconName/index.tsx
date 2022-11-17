import React from "react";
import { useLocation } from "react-router-dom";
import { Container, ImgComponent, ImgContainer, TextComponent } from "./styles";
import { IPokemon } from "../card";
import typesToColor from "./../../utils/typesToColor";

interface IInformation {
  pokemon: IPokemon;
}

const IconName = () => {
  const location = useLocation();
  const { pokemon }: IInformation = location.state;

  return (
    <Container>
      <TextComponent
        color={typesToColor(pokemon && pokemon.types[0].type.name)}
      >
        #{pokemon.id} - {pokemon.name}
      </TextComponent>

      <ImgContainer>
        <ImgComponent
          src={
            pokemon.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"]
              .front_default
          }
        />
      </ImgContainer>
    </Container>
  );
};

export default IconName;
