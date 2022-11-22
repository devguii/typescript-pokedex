import styled from "styled-components";
interface IColor {
  color: string | undefined;
}

export const Container = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: initial;
  flex-direction: column;
  justify-content: center;
`;
export const Detail = styled.div`
  width: 17%;
  height: 1.2vh;
  background-color: greenyellow;
  margin-left: 1.8vw;
`;

export const H1Component = styled.h1`
  text-transform: uppercase;
  font-family: "Fira Sans";
  font-weight: bold;
  font-size: 1.3rem;
  margin-left: 2vw;
`;

export const TextComponent = styled.text`
  text-transform: initial;
  font-size: 1rem;
  margin-left: 2vw;
  margin-top: 1.7vh;
`;
