import styled from "styled-components";
import { flexCenter, theme, containerCenter, rem } from "../../styles";

export const MainBanner = styled.section`
  ${flexCenter("space-between", "center")};

  background: ${theme.color.green};
  background: ${(props) => props.theme.color.green};
  padding: 80px 0;
`;

export const MainBannerWrapper = styled.div`
  ${containerCenter(1024)};
  ${flexCenter("space-between", "center")};

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const MainBannerContainerText = styled.div`
  max-width: 450px;
  padding: 20px;
  h2 {
    font-size: ${rem(64)};
    font-weight: 500;
    text-transform: uppercase;

    margin-bottom: 16px;
  }

  p {
    margin-bottom: 32px;
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
      box-shadow: 0px 0px 15px -1px rgba(238, 14, 125, 0.75);
    }
  }

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

export const MainBannerContainerCards = styled.div`
  position: relative;
  width: 65%;

  ${flexCenter("center", "center")};

  div {
    &:nth-child(1) {
      transform: translate(36%, 15%);
    }
    &:nth-child(2) {
      transform: translateY(-38%);
      z-index: 1;
    }
    &:nth-child(3) {
      transform: translate(-40%, 33%);
    }
  }
`;
