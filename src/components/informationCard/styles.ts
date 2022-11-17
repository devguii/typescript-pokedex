import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContainerPai = styled.div``;

export const ContainerDireita = styled.div`
  width: 57%;
  height: 90vh;
  padding: 30px;
`;

export const ImgContainer = styled.div`
  width: 43%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InformationContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  border: 0.5vh solid black;
  background-color: white;
`;

export const ImgComponent = styled.img`
  width: 80%;
  height: 80%;
`;

export const TextComponent = styled.text`
  text-transform: capitalize;
  font-weight: bold;
  font-family: "Fira Sans";
  font-size: 4rem;
  color: black;
`;

export const SvgComponent = styled.svg`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  width: 800vh;
`;

export const PathComponent = styled.path`
  stroke: none;
  fill: red;
`;
