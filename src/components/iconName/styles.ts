import styled from "styled-components";
interface IColor {
  color: string | undefined;
}

export const Container = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ImgContainer = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ImgComponent = styled.img`
  width: 100%;
  height: 100%;
`;
export const TextComponent = styled.text<IColor>`
  font-family: "Fira Sans";
  text-transform: uppercase;
  font-size: 2.15rem;
  color: ${(props) => (props.color ? props.color : "black")};
`;
