import { Icon } from "@chakra-ui/react";
import React from "react";
import {
  Container,
  ContainerCenter,
  ContainerSide,
  LeftArrowIcon,
  RightArrowIcon,
} from "./styles";

interface IPageProps {
  page: number;
  handleClick: (click: number) => void;
}

const Pagination = ({ page, handleClick }: IPageProps) => {
  return (
    <Container>
      <ContainerSide
        onClick={(e) => {
          if (page > 1) handleClick(-1);
        }}
      >
        <LeftArrowIcon></LeftArrowIcon>
      </ContainerSide>
      <ContainerCenter>{page}</ContainerCenter>
      <ContainerSide
        onClick={(e) => {
          handleClick(1);
        }}
      >
        <RightArrowIcon></RightArrowIcon>
      </ContainerSide>
    </Container>
  );
};

export default Pagination;
