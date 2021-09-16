// import * as S from "./styles/App";
import { Header, CardInBanner, CardInSolutions } from "./components/index";
import * as S from "./styles/App";

function App() {
  return (
    <>
      <Header />
      <S.MainBanner>
        <S.MainBannerWrapper>
          <S.MainBannerContainerText>
            <h2>Criamos lojas que vendem mais.</h2>
            <p>
              A Jüssi é especialista na criação de lojas usando a plataforma
              VTEX. Precisa criar sua loja ou migrar de plataforma?
            </p>
            <button>Veja nossas soluções</button>
          </S.MainBannerContainerText>
          <S.MainBannerContainerCards>
            <CardInBanner
              imgSrc="./assets/batedeira.png"
              imgAlt="Geladeira"
              anchorLink="#"
              anchorText="Mais Detalhes"
            ></CardInBanner>
            <CardInBanner
              imgSrc="./assets/geladeira.png"
              imgAlt="Batedeira"
              anchorLink="/"
              anchorText="Compre em até 12x"
            ></CardInBanner>
            <CardInBanner
              imgSrc="./assets/wisky.png"
              imgAlt="wisky"
              anchorLink="/"
              anchorText="Adicionar a sacola"
            ></CardInBanner>
          </S.MainBannerContainerCards>
        </S.MainBannerWrapper>
      </S.MainBanner>
      <S.OurStore>
        <S.OurStoreContainer>
          <h2>Nossas Principais lojas VTEX</h2>
          <img src="/assets/arrow-right.png" alt="arrow right"></img>
          <S.OurStoreContext>
            <img src="/assets/brastemp-logo.png" alt="brastemp logo" />
            <img src="/assets/compra-certa-logo.png" alt="compra certa logo" />
            <img src="/assets/consul-logo.png" alt="consul logo" />
            <img src="/assets/thebar-logo.png" alt="thebar logo" />
          </S.OurStoreContext>
        </S.OurStoreContainer>
      </S.OurStore>
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
            <img src="/assets/image-jussi.png"></img>
          </S.ImageWhoWeAre>
        </S.ContainerWhoWeAre>
      </S.WhoWeAre>
      <S.ComercialAndNewsletter color="pink">
        <p>
          Essa loja foi construída usando uma das nossas soluções da plataforma
          VTEX. tenha a sua.
        </p>
        <span>Entre em contato</span>
        <a href="#">comercial@jussi.com.br</a>
      </S.ComercialAndNewsletter>
      <S.ComercialAndNewsletter color="black">
        <p>receba novidades da nossa área de produtos digitais.</p>
        <S.ContainerSendNewsletter>
          <input type="text" placeholder="Digite seu email" />
          <button>Cadastrar</button>
        </S.ContainerSendNewsletter>
      </S.ComercialAndNewsletter>
      <S.Footer>
        <S.FooterContainer>
          <img src="/assets/wppcompany.png" alt="logo" />
          <S.FooterRedes>
            <a href="#">
              <img src="/assets/facebook.png" />
            </a>
            <a href="#">
              <img src="/assets/instagram.png" />
            </a>
            <a href="#">
              <img src="/assets/linkedin.png" />
            </a>
          </S.FooterRedes>
        </S.FooterContainer>
        
      </S.Footer>
    </>
  );
}

export default App;
