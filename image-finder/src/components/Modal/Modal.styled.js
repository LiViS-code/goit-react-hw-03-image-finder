import styled from "styled-components";
import { theme } from "../../constants/Theme";

const {
  colors: { backgroundColorBackdrop },
} = theme;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 8;
  background-color: ${backgroundColorBackdrop};
`;

export const Picture = styled.img`
  object-position: center center;
  object-fit: contain;
  width: 100%;
  height: 100%;
`;
