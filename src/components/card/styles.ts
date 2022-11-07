import styled from "styled-components";

interface IColor {
  color: string | undefined;
}

export const Container = styled.div<IColor>`
  position: relative;
  width: 100%;
  height: 48vh;
  border-radius: 15px;
  border: ${(props) => (props.color ? `solid ${props.color}` : "solid black")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const IdContainer = styled.div<IColor>`
  margin: 0;
  width: 100%;
  height: 5vh;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: ${(props) => (props.color ? props.color : "black")};
  display: flex;
  align-items: right;
  justify-content: right;
  padding-right: 10%;
`;
export const ImgContainer = styled.div`
  margin: 0;
  width: 80%;
  height: 32vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const NameContainer = styled.div<IColor>`
  margin: 0;
  width: 100%;
  height: 11vh;
  border: ${(props) => (props.color ? `solid ${props.color}` : "solid black")};
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: ${(props) => (props.color ? props.color : "black")};
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const TextComponent = styled.text<IColor>`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 20px;
  text-transform: capitalize;
  color: ${(props) => (props.color ? props.color : "black")};
  text-shadow: 3px 0px 5px #fff, -1px 1px 0px #fff, 1px -1px 5px #fff,
    0px 2px 5px #fff;
`;
