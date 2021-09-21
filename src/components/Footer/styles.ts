import styled from "styled-components";
import { theme, containerCenter, flexCenter } from "../../styles";

export const Footer = styled.footer`
  background: ${theme.color.black};
  padding: 27px;
`;

export const FooterContainer = styled.div`
  ${containerCenter(1024)};
  ${flexCenter("space-between", "center")}
`;

export const FooterRedes = styled.footer`
  a {
    cursor: pointer;
  }
  img {
    margin-right: 17px;
    transition-duration: 300ms;

    &:hover {
      filter: invert(48%) sepia(190%) saturate(3340%) hue-rotate(130deg)
        brightness(95%) contrast(80%);

      transform: scale(1.3);
    }
  }
`;
