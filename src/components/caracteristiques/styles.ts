import styled from "styled-components";
interface IColor {
  color: string | undefined;
}

export const Container = styled.div`
  margin-top: 1vh;
  width: 100%;
  height: 25%;
`;

export const OrganizeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const DataContainer = styled.div`
  margin-top: 1vh;
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Detail = styled.div`
  width: 26%;
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
  font-size: 1.2rem;
`;

export const DataComponent = styled.text`
  font-size: 2.5rem;
`;
