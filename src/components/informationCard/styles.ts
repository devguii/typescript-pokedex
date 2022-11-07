import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgContainer = styled.div`
  width: 50%;
  height: 80vh;
  background-color: yellow;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InformationContainer = styled.div`
  width: 50%;
  height: 90vh;
  background-color: blue;
`;

export const ImgComponent = styled.img`
  width: 70%;
  height: 70%;
`;

export const TextComponent = styled.text`
  text-transform: uppercase;
`;
