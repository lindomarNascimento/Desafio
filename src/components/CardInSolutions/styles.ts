import styled from "styled-components";
import { theme, rem, flexCenter } from "../../styles/index";

export const ContainerCard = styled.div`
  border: 1px solid ${theme.color.gray};
  border-radius: 4px;

  max-width: 241px;
  width: 100%;
  padding: 16px;

  h3 {
    width: 100px;
    height: 100px;

    background: ${theme.color.gray};
    border-radius: 50%;

    font-size: ${rem(32)};
    ${flexCenter("center", "center")};

    margin-bottom: 53px;
  }

  @media (max-width: 1024px) {
    margin: 10px 0;
  }
`;

export const CardProdctsInfo = styled.div`
  h4 {
    margin-bottom: 16px;
  }

  p {
    font-size: ${rem(12)};
    color: ${theme.color.pink};

    margin-bottom: 16px;
  }

  ul {
    ${flexCenter("center", "flex-start")};
    flex-direction: column;

    margin-left: 15px;
    margin-bottom: 16px;
  }

  li {
    list-style: disc;
    text-transform: capitalize;

    font-size: ${rem(12)};
    margin: 2px;
  }

  button {
    width: 100%;
    height: 48px;

    ${flexCenter("center", "center")};

    background: ${theme.color.green};
    border-radius: 6px;
    border: 0;

    transition-duration: 400ms;

    &:hover {
      color: ${theme.color.darker_gray};
    }
  }
`;
