import styled from "styled-components";
import { flexCenter, theme } from "../../styles/index";

export const ContainerCard = styled.div`
  width: 209px;
  height:271px;

  padding: 13px;

  background: ${theme.color.white};

  border-radius: 8px;
  box-shadow: 0px 32px 32px rgba(0, 0, 0, 0.25);

  ${flexCenter('space-around', 'center')};
  flex-direction:column;

  transition-duration: 500ms;

  img {
    max-height: 68%;
    margin-bottom: 37px;

    display: initial;
  }

  a { 
    color: ${theme.color.pink};
    border: 1px solid ${theme.color.pink};
    border-radius: 24px;
    padding: 12px 24px;

    text-decoration: none;

    ${flexCenter('center', 'center')};

    transition-duration: 400ms;
    &:hover {
      color: ${theme.color.white};
      background: ${theme.color.pink}
    }
  }

  &:hover {
    z-index: 2;
  }
`;
