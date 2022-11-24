import { Progress } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";
import typesToColorBar from "../../utils/typesToColorBar";
import { IPokemon } from "../card";
import {
  StatusContainer,
  StatusComponent,
  ValueComponent,
  Container,
  BarContainer,
  ValueContainer,
} from "./styles";

interface ILineStats {
  pokemon: IPokemon | undefined;
}

interface ILineStatsProperties {
  data: IPokemon | undefined;
}

const LineStats = ({ data }: ILineStatsProperties) => {
  const location = useLocation();
  const { pokemon }: ILineStats = location.state;

  return (
    <Container>
      {pokemon &&
        pokemon.stats.map((item, index) => (
          <StatusContainer>
            <ValueContainer>
              <StatusComponent>{item.stat.name}</StatusComponent>
            </ValueContainer>
            <BarContainer>
              <Progress
                value={item.base_stat}
                colorScheme={typesToColorBar(pokemon.types[0].type.name)}
                size="lg"
              />
            </BarContainer>
            <ValueContainer>
              <ValueComponent>{item.base_stat}</ValueComponent>
            </ValueContainer>
          </StatusContainer>
        ))}
    </Container>
  );
};

export default LineStats;
