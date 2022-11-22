import React from "react";
import typesToColor from "../../utils/typesToColor";
import { IPokemon } from "../card";
import {
  BarComponent,
  Container,
  Detail,
  H1Component,
  OrganizeContainer,
  StatusComponent,
  StatusContainer,
  ValueComponent,
} from "./styles";

interface IStats {
  data: IPokemon | undefined;
}

const Stats = ({ data }: IStats) => {
  return (
    <Container>
      <H1Component>Stats</H1Component>
      <Detail color={typesToColor(data && data.types[0].type.name)}></Detail>
      <OrganizeContainer>
        <StatusContainer>
          <StatusComponent></StatusComponent>
          <BarComponent></BarComponent>
          <ValueComponent></ValueComponent>
        </StatusContainer>
      </OrganizeContainer>
    </Container>
  );
};

export default Stats;
