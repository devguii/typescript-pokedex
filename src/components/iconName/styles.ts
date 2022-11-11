import styled from "styled-components";
interface IColor {
  color: string | undefined;
}

export const Container = styled.div`
  width: 100%;
  height: 10%;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ImgContainer = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: yellow;
`;
export const ImgComponent = styled.img`
  width: 100%;
  height: 100%;
  background-color: purple;
`;
export const TextComponent = styled.text``;
