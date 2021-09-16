import * as S from "./styles";

type CardInBannerProps = {
  imgSrc: string;
  imgAlt: string;
  anchorLink: string;
  anchorText: string;
};
export const CardInBanner = ({
  imgSrc,
  imgAlt,
  anchorLink,
  anchorText,
}: CardInBannerProps) => {
  return (
    <S.ContainerCard>
      <img src={imgSrc} alt={imgAlt} />
      <a href={anchorLink}>{anchorText}</a>
    </S.ContainerCard>
  );
};
