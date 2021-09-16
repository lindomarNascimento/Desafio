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
`;

export const Logo = styled.div`
  margin-right: 32px;
  svg {
    max-width: 184px;
    width: 100%;
    height: auto;
  }
`;

export const Menu = styled.div`
  ${flexCenter("center", "center")};
`;
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
  }
`;
export const Cart = styled.div``;
