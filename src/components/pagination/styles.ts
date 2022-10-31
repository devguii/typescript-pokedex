import styled from "styled-components";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContainerSide = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContainerCenter = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LeftArrowIcon = styled(BiArrowToLeft).attrs(() => ({
  size: 30,
}))`
  hover: {
    transform: scale(1.2);
  }
`;

export const RightArrowIcon = styled(BiArrowToRight).attrs(() => ({
  size: 30,
}))`
  hover:: {
    transform: scale(1.2);
  }
`;
