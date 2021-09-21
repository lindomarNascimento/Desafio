import * as S from "./styles";

import ImgCompany from '../../assets/wppcompany.png'
import LogoFacebook from '../../assets/facebook.png'
import LogoInstagram from '../../assets/instagram.png'
import LogoLinkedin from '../../assets/linkedin.png'

export const Footer = () => {
  return (
    <S.Footer>
      <S.FooterContainer>
        <img src={ImgCompany} alt="logo" />
        <S.FooterRedes>
          <a href="/">
            <img src={LogoFacebook} alt="facebook" />
          </a>
          <a href="/">
            <img src={LogoInstagram} alt="instagram" />
          </a>
          <a href="/">
            <img src={LogoLinkedin} alt="linkedin" />
          </a>
        </S.FooterRedes>
      </S.FooterContainer>
    </S.Footer>
  );
};
