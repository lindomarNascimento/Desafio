import { Banner, CardInSolutions, OurStore } from "../../components";
import * as S from "./styles";

import ImgOfficeJussi from "../../assets/image-jussi.png";

export const Home = () => {
  return (
    <>
      <Banner></Banner>
      <OurStore></OurStore>
      <S.Solutions>
        <h2>
          <strong>//</strong>Nossas Soluções
        </h2>
        <S.SolutionsCardContainer>
          <CardInSolutions
            initialsThumb="P1"
            nameProduct="Nome do Produto #1"
            descriptionProduct="Descrição do produto #1"
            featuresProduct={["feature 01", "feature 02", "feature 03"]}
          ></CardInSolutions>
          <CardInSolutions
            initialsThumb="P2"
            nameProduct="Nome do Produto #2"
            descriptionProduct="Descrição do produto #2"
            featuresProduct={["feature 01", "feature 02", "feature 03"]}
          ></CardInSolutions>
          <CardInSolutions
            initialsThumb="P3"
            nameProduct="Nome do Produto #3"
            descriptionProduct="Descrição do produto #3"
            featuresProduct={["feature 01", "feature 02", "feature 03"]}
          ></CardInSolutions>
          <CardInSolutions
            initialsThumb="P4"
            nameProduct="Nome do Produto #4"
            descriptionProduct="Descrição do produto #4"
            featuresProduct={["feature 01", "feature 02", "feature 03"]}
          ></CardInSolutions>
        </S.SolutionsCardContainer>
      </S.Solutions>
      <S.WhoWeAre>
        <S.ContainerWhoWeAre>
          <S.TextWhoWeAre>
            <h2>Olá, somos a Jüssi</h2>
            <p>
              A Jüssi é uma agência integrante do grupo global WPP que vem há 10
              anos consolidando o pensamento voltado para produtos e resolução
              de problemas. Nosso área dedicada exclusivamente para Produtos
              Digitais é organizada em 6 especialidades: Product Managamenet,
              User Experience Design, SEO, Tecnologia, Agile e User Behavior
              Analytics.
            </p>
            <button>Conheça a jüssi</button>
          </S.TextWhoWeAre>
          <S.ImageWhoWeAre>
            <img src={ImgOfficeJussi} alt="Office jussi"></img>
          </S.ImageWhoWeAre>
        </S.ContainerWhoWeAre>
      </S.WhoWeAre>
      <S.ComercialAndNewsletter color="pink" height="480px">
        <p>
          Essa loja foi construída usando uma das nossas soluções da plataforma
          VTEX. tenha a sua.
        </p>
        <span>Entre em contato</span>
        <a href="/">comercial@jussi.com.br</a>
      </S.ComercialAndNewsletter>
      <S.ComercialAndNewsletter color="black" height="436px">
        <p>receba novidades da nossa área de produtos digitais.</p>
        <S.ContainerSendNewsletter>
          <input type="text" placeholder="Digite seu email" />
          <button>Cadastrar</button>
        </S.ContainerSendNewsletter>
      </S.ComercialAndNewsletter>
    </>
  );
};
