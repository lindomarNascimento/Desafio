import styled from "styled-components";
import { flexCenter, theme, containerCenter, rem } from "../../styles";

interface ComercialAndNewsletterProps {
  color: string;
  height: string;
}

export const Solutions = styled.div`
  ${containerCenter(1024)};
  padding: 56px 20px;

  h2 {
    font-size: ${rem(32)};
    font-weight: 700;

    margin-bottom: 40px;
    strong {
      font-size: ${rem(32)};
      color: ${theme.color.green};

      margin-right: 4px;
    }
  }
`;

export const SolutionsCardContainer = styled.div`
  ${flexCenter("space-between", "center")};

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const WhoWeAre = styled.section`
  padding: 64px 0;
  position: relative;

  @media (max-width: 1024px) {
    padding: 10px 20px;
  }

  &::after {
    content: "";
    width: 50%;
    height: 100%;

    display: inline-block;
    background: ${theme.color.gray};

    position: absolute;
    top: 0;
    right: 0;

    @media (max-width: 1024px) {
      display: none;
    }
  }
`;

export const ContainerWhoWeAre = styled.div`
  ${containerCenter(1024)};
  ${flexCenter("space-between", "center")};

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const TextWhoWeAre = styled.div`
  h2 {
    font-size: ${rem(32)};
    font-weight: 700;
    text-transform: uppercase;

    margin-bottom: 40px;
  }

  p {
    max-width: 241px;
    margin-bottom: 24px;

    @media (max-width: 1024px) {
      /* margin: 0; */
      max-width: 100%;
    }
  }

  button {
    width: 196px;
    height: 48px;

    border: 1px solid #000000;
    border-radius: 6px;

    background-color: transparent;

    font-weight: 500;
    font-family: ${theme.font.primary};

    transition-duration: 300ms;

    &:hover {
      color: ${theme.color.pink};
      box-shadow: 0px 0px 15px -1px ${theme.color.green};
    }

    @media (max-width: 1024px) {
      margin-bottom: 30px;
    }
  }
`;

export const ImageWhoWeAre = styled.div`
  z-index: 1;

  img {
    width: 100%;
    height: auto;
  }
`;

export const ComercialAndNewsletter = styled.section<ComercialAndNewsletterProps>`
  ${flexCenter("center", "center")};
  flex-direction: column;

  background: ${(props) =>
    props.color === "pink" ? theme.color.pink : theme.color.black};
  color: ${theme.color.white};

  height: ${(props) => props.height};

  @media (max-width: 1024px) {
    height: auto;
    padding: 80px 20px;
  }

  p {
    font-size: ${rem(32)};
    text-transform: uppercase;
    text-align: center;

    max-width: 676px;
    margin-bottom: 32px;
  }

  span {
    margin-bottom: 8px;
  }

  a {
    color: ${theme.color.white};
    text-decoration: none;

    font-size: ${rem(32)};
  }
`;

export const ContainerSendNewsletter = styled.div`
  border-bottom: 1px solid ${theme.color.green};
  padding-bottom: 10px;
  width: 50%;

  @media (max-width: 1024px) {
    width: 80%;
  }

  ${flexCenter("center", "center")};

  input {
    background: transparent;
    border: 0;
    outline: transparent;

    color: ${theme.color.white};

    flex: 1;
  }

  button {
    border: 0;
    background: transparent;

    color: ${theme.color.green};
    font-weight: 700;
    padding: 10px;
    text-transform: uppercase;

    width: 100px;
  }
`;
