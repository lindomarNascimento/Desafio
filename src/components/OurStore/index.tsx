import * as S from "./styles";

import arrowImg from "../../assets/arrow-right.png";
import imgBrastemp from "../../assets/brastemp-logo.png";
import imgCompraCerta from "../../assets/compra-certa-logo.png";
import imgConsul from "../../assets/consul-logo.png";
import imgTheBar from "../../assets/thebar-logo.png";

const screenWidth = window.innerWidth;

export const OurStore = () => {
  return (
    <>
      {screenWidth >= 1024 && (
        <S.OurStore>
          <S.OurStoreContainer>
            <h2>Nossas Principais lojas VTEX</h2>
            <img src={arrowImg} alt="seta direita"></img>
            <S.OurStoreContext>
              <img src={imgBrastemp} alt="brastemp" />
              <img src={imgCompraCerta} alt="compra certa logo" />
              <img src={imgConsul} alt="consul logo" />
              <img src={imgTheBar} alt="thebar logo" />
            </S.OurStoreContext>
          </S.OurStoreContainer>
        </S.OurStore>
      )}
    </>
  );
};
