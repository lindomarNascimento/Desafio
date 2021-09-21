// import Logo from "../../assets/logoJussi.svg";
import * as S from "./styles";
import { Search } from "../index";
import { useState } from "react";

// import Logo from '../assets/logo.svg';
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Cart } from "../../assets/cart.svg";

const screenWidth = window.innerWidth;

console.log("screenWidth :>> ", screenWidth);
export const Header = () => {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);

  return (
    <S.Header>
      {screenWidth <= 1024 && (
        <S.MenuMobile>
          <S.HumberguerMenu onClick={(e) => setOpenMenuMobile(true)}>
            <span></span>
            <span></span>
            <span></span>
          </S.HumberguerMenu>
          {!!openMenuMobile && (
            <>
              <S.OpacityMenuMobile
                onClick={(e) => setOpenMenuMobile(false)}
              ></S.OpacityMenuMobile>
              <S.MenuMobileWrapper>
                <S.CloseMenuMobile onClick={(e) => setOpenMenuMobile(false)}>
                  X
                </S.CloseMenuMobile>
                <S.Links href="/" size={30}>Login</S.Links>
                <S.Links href="/" size={30}>
                  Nossas Soluções
                </S.Links>
                <S.Links href="/" size={30}>
                  Conheça a Jussi
                </S.Links>
              </S.MenuMobileWrapper>
            </>
          )}
        </S.MenuMobile>
      )}

      <S.MenuAndLogo>
        <S.Logo>
          <Logo></Logo>
        </S.Logo>
        <S.Menu>
          <S.Links href="#">Nossas Soluções</S.Links>
          <S.Links href="#">Conheça a Jussi</S.Links>
        </S.Menu>
      </S.MenuAndLogo>

      <S.Content>
        {screenWidth >= 1024 && (
          <>
            <S.ContainerSearch>
              <Search />
            </S.ContainerSearch>
            <S.Links href="#" login>
              Login
            </S.Links>
          </>
        )}
        <S.Cart>
          <Cart></Cart>
        </S.Cart>
      </S.Content>
      {screenWidth <= 1024 && (
        <S.ContainerSearchMobile>
          <Search />
        </S.ContainerSearchMobile>
      )}
    </S.Header>
  );
};
