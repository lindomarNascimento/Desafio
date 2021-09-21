import { CardInBanner } from "..";

import * as S from "./styles";

import ImgGeladeira from "../../assets/geladeira.png";
import ImgBatedeira from "../../assets/batedeira.png";
import ImgWisky from "../../assets/wisky.png";

const screenWidth = window.innerWidth;

export const Banner = () => {
  return (
    <S.MainBanner>
      <S.MainBannerWrapper>
        <S.MainBannerContainerText>
          <h2>Criamos lojas que vendem mais.</h2>
          <p>
            A Jüssi é especialista na criação de lojas usando a plataforma VTEX.
            Precisa criar sua loja ou migrar de plataforma?
          </p>
          <button>Veja nossas soluções</button>
        </S.MainBannerContainerText>

        {screenWidth >= 1024 && (
          <S.MainBannerContainerCards>
            <CardInBanner
              imgSrc={ImgGeladeira}
              imgAlt="Geladeira"
              anchorLink="#"
              anchorText="Mais Detalhes"
            ></CardInBanner>
            <CardInBanner
              imgSrc={ImgBatedeira}
              imgAlt="Batedeira"
              anchorLink="/"
              anchorText="Compre em até 12x"
            ></CardInBanner>
            <CardInBanner
              imgSrc={ImgWisky}
              imgAlt="wisky"
              anchorLink="/"
              anchorText="Adicionar a sacola"
            ></CardInBanner>
          </S.MainBannerContainerCards>
        )}
      </S.MainBannerWrapper>
    </S.MainBanner>
  );
};
