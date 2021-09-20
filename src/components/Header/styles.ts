import styled from "styled-components";

import { flexCenter, containerCenter, theme } from "../../styles/index";

type LinksProps = {
  login?: Boolean;
};

export const Header = styled.header`
  ${flexCenter("space-between", "center")};
  ${containerCenter(1440)};
  width: 100%;
  height: 80px;
  padding: 0 20px;
`;

export const Logo = styled.div`
  margin-right: 32px;
  svg {
    max-width: 184px;
    width: 100%;
    height: auto;
  }
`;

export const MenuMobile = styled.nav``;
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
  ${flexCenter("center", "center")}
`;

export const Links = styled.a`
  color: ${theme.color.black};
  text-decoration: none;
  font-weight: 500;

  transition-duration: 300ms;

  margin: ${(props: LinksProps) =>
    props.login ? "0 32px" : "0 32px 0 0"};

  &:hover {
    color: ${theme.color.green};
  };

  @media (max-width: 1024px) {
    display: ${(props: LinksProps) =>
    props.login && 'none'};
  }
`;

export const ContainerSearch = styled.div`
  height: 40px;
  width: 240px;

  @media (max-width: 1024px) {
    order: 5;
  }
`;
export const Cart = styled.div``;

