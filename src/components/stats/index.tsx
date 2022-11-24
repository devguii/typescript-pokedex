import React from "react";
import { useLocation } from "react-router-dom";
import typesToColor from "../../utils/typesToColor";
import { IPokemon } from "../card";
import { Progress } from "@chakra-ui/react";
import { Container, Detail, H1Component, OrganizeContainer } from "./styles";
import LineStats from "../lineStats";

interface IStats {
  pokemon: IPokemon | undefined;
}

interface IStatsProperties {
  data: IPokemon | undefined;
}

const Stats = ({ data }: IStatsProperties) => {
  const location = useLocation();
  const { pokemon }: IStats = location.state;

  return (
    <Container>
      <H1Component>Stats</H1Component>
      <Detail
        color={typesToColor(pokemon && pokemon.types[0].type.name)}
      ></Detail>
      <OrganizeContainer>
        <LineStats data={pokemon}></LineStats>
      </OrganizeContainer>
    </Container>
  );
};

export default Stats;
