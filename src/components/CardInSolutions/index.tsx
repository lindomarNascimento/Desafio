import * as S from "./styles";

type CardInSolutionsProps = {
  initialsThumb: string;
  nameProduct: string;
  descriptionProduct: string;
  featuresProduct: Array<string>;
};
export const CardInSolutions = ({
  initialsThumb,
  nameProduct,
  descriptionProduct,
  featuresProduct,
}: CardInSolutionsProps) => {
  return (
    <S.ContainerCard>
      <h3>{initialsThumb}</h3>

      <S.CardProdctsInfo>
        <h4>{nameProduct}</h4>
        <p>{descriptionProduct}</p>
        <ul>
          {featuresProduct.map((feature) => {
            return <li>{feature}</li>;
          })}
        </ul>
        <button>Ver solução</button>
      </S.CardProdctsInfo>
    </S.ContainerCard>
  );
};
