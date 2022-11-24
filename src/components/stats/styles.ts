import styled from "styled-components";
interface IColor {
  color: string | undefined;
}

export const Container = styled.div`
  width: 100%;
  height: 40%;
`;

export const OrganizeContainer = styled.div``;

export const Detail = styled.div<IColor>`
  width: 9%;
  height: 1.2vh;
  background-color: ${(props) => (props.color ? props.color : "black")};
  margin-left: 1.8vw;
`;

export const H1Component = styled.h1`
  text-transform: uppercase;
  font-family: "Fira Sans";
  font-weight: bold;
  font-size: 1.3rem;
  margin-left: 2vw;
`;
