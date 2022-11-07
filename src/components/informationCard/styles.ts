import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContainerDireita = styled.div`
  width: 57%;
  height: 90vh;
  background-color: purple;
  padding: 30px;
`;

export const ImgContainer = styled.div`
  width: 43%;
  height: 80vh;
  background-color: yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InformationContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: blue;
  border-radius: 30px;
`;

export const ImgComponent = styled.img`
  width: 70%;
  height: 70%;
`;

export const TextComponent = styled.text`
  text-transform: capitalize;
  font-weight: bold;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 300%;
  color: #fff;
`;
