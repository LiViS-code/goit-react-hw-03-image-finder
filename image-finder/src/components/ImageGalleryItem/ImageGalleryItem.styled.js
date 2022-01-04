import styled from "styled-components";
import { theme } from "../../constants/Theme";

const {
  spacing,
  colors: { boxShadow },
  transition,
} = theme;

export const GalleryItem = styled.li`
  border-radius: ${spacing(1)};
  box-shadow: ${boxShadow};
`;

export const GalleryItemImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform ${transition};

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
