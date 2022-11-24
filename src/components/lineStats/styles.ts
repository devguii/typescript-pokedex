import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StatusContainer = styled.div`
  width: 100%;
  height: 4vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ValueContainer = styled.div`
  width: 15%;
  padding: 4%;
  display: flex;
  justify-content: center;
`;

export const BarContainer = styled.div`
  width: 70%;
`;

export const StatusComponent = styled.text`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.6rem;
`;

export const ValueComponent = styled.text`
  font-weight: bold;
  font-size: 0.7rem;
`;
