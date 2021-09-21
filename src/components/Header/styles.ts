import styled from "styled-components";

import { flexCenter, containerCenter, theme, rem } from "../../styles/index";

interface LinksProps {
  login?: Boolean;
  size?: number;
}

export const Header = styled.header`
  ${flexCenter("space-between", "center")};
  ${containerCenter(1440)};
  width: 100%;
  height: 80px;
  padding: 0 20px;

  @media (max-width: 1024px) {
    height: auto;
    flex-wrap: wrap;
    padding: 20px 20px;
  }
`;

export const Logo = styled.div`
  margin-right: 32px;
  cursor: pointer;
  
  svg {
    max-width: 184px;
    width: 100%;
    height: auto;
  }
`;

export const MenuMobile = styled.div`
  display: inline-block;
`;

export const HumberguerMenu = styled.div`
  ${flexCenter("center", "center")};
  flex-direction: column;

  span {
    width: 30px;
    height: 4px;
    background: ${theme.color.black};

    display: inline-block;

    margin-bottom: 4px;

    border-radius: 10px;
  }
`;

export const OpacityMenuMobile = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;

  background: ${theme.color.black}c9;

  z-index: 3;
`;

export const MenuMobileWrapper = styled.nav`
  ${flexCenter("flex-start", "flex-start")};
  flex-direction: column;
  background-color: ${theme.color.gray};

  position: fixed;
  top: 0;
  left: 0%;

  height: 100vh;
  width: 80%;

  z-index: 3;

  animation-name: menu;
  animation-duration: 500ms;
`;

export const CloseMenuMobile = styled.div`
  ${flexCenter("center", "center")};

  position: absolute;
  right: 0;
  top: 0;

  width: 40px;
  height: 40px;

  border: 1px solid ${theme.color.pink};
  color: ${theme.color.pink};
  border-radius: 50%;

  padding: 20px;
  font-size: ${rem(30)};
  font-weight: 700;

  z-index: 4;
`;

export const MenuAndLogo = styled.div`
  ${flexCenter("center", "center")};
`;

export const Menu = styled.div`
  ${flexCenter("center", "center")};

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const LoginMenu = styled.a``;

export const Content = styled.div`
  ${flexCenter("center", "center")};
`;

export const Links = styled.a`
  color: ${theme.color.black};
  text-decoration: none;
  font-weight: 500;

  transition-duration: 300ms;

  margin: ${(props: LinksProps) => (props.login ? "0 32px" : "0 32px 0 0")};
  font-size: ${(props: LinksProps) => props.size && `${props.size}px`};

  &:hover {
    color: ${theme.color.green};
  }
`;

export const ContainerSearch = styled.div`
  height: 40px;
  width: 240px;
`;

export const Cart = styled.div`
  cursor: pointer;
`;

export const ContainerSearchMobile = styled.div`
  width: 100%;
  margin-top: 20px;
`;
