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
  display: block;
  margin: 0 auto;
  width: auto;
  height: auto;
  max-height: 100vh;
  max-width: 100vw;
`;
