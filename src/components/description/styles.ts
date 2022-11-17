import styled from "styled-components";
interface IColor {
  color: string | undefined;
}

export const Container = styled.div`
  width: 100%;
  height: 20%;
  background-color: blue;
`;
export const Detail = styled.div`
  width: 20%;
  height: 2vh;
  background-color: greenyellow;
`;

export const H1Component = styled.h1`
  text-transform: uppercase;
`;

export const TextComponent = styled.text`
  text-transform: uppercase;
`;
