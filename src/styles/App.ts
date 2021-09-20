import styled from "styled-components";
import { flexCenter, theme, rem, containerCenter } from "./index";

type ComercialAndNewsletterProps = {
  color: string,
  height: string
}

export const MainBanner = styled.section`
  ${flexCenter("space-between", "center")};

  background: ${theme.color.green};

  padding: 80px 0;
`;

export const MainBannerWrapper = styled.div`
  ${containerCenter(1024)};
  ${flexCenter("space-between", "center")};
`;

export const MainBannerContainerText = styled.div`
  max-width: 450px;

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

export const OurStore = styled.section`
  height: 80px;

  background: ${theme.color.gray};
`;

export const OurStoreContainer = styled.div`
  ${containerCenter(1024)};
  ${flexCenter("space-between", "center")};
  height: 100%;

  > img {
    margin: 0 48px;
  }
`;

export const OurStoreContext = styled.div`
  ${flexCenter("space-between", "center")};
  flex: 1;
`;

export const Solutions = styled.div`
  ${containerCenter(1024)};
  padding: 56px 0;

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
`;

export const WhoWeAre = styled.section`
  padding: 64px 0;
  position: relative;
  
  &::after {
    content: "";
    width: 50%;
    height: 100%;

    display: inline-block;
    background: ${theme.color.gray};

    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const ContainerWhoWeAre = styled.div`
  ${containerCenter(1024)};
  ${flexCenter("space-between", "center")};
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
  }
`;

export const ImageWhoWeAre = styled.div`
  z-index: 1;
`;

export const ComercialAndNewsletter = styled.section<ComercialAndNewsletterProps>`
  ${flexCenter("center", "center")};
  flex-direction: column;

  background: ${(props) =>
    props.color === "pink" ? theme.color.pink : theme.color.black};
  color: ${theme.color.white};

  height: ${(props) => props.height};

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

  ${flexCenter('center', 'center')};

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
      filter: invert(48%) 
              sepia(190%) 
              saturate(3340%) 
              hue-rotate(130deg) 
              brightness(95%) 
              contrast(80%);
              
      transform: scale(1.3)
    }
  }
`;
