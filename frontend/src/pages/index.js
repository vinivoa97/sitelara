import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import DetalhePag from "../components/detalhePag";
import Teste1 from "../components/teste1";
import Teste2 from "../components/teste2";
import ExperimentosIndex from "../components/experimentosIndex";
import Colaboracao from "../assets/colaboracao.png";
import Multilinguagem from "../assets/multilinguagem.png";
import Contato from "../assets/contato.png";


const IndexPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout seo={data.strapiHomepage.seo}>
      <DetalhePag />
      <ExperimentosIndex />
      <Teste1 comDiv={true} id="secao3" titulo="Colaboração" container="container sobre-colaboracao" desc="desc-colaboracao" conteudo="O LARA permite que os alunos possam resolver problemas e programar em equipes de modo que todos consigam interagir entre si e ver as mudanças que os colegas estão fazendo no trabalho, além de permitir que os alunos possam pedir ajuda a monitores e professores." image="img-colab" srcImage={Colaboracao} /> 
      <Teste2 id="secao4" titulo="Multilinguagem" container="container sobre-multilinguagem" image="img-mult" srcImage={Multilinguagem} conteudo="Atualmente, os experimentos do LARA podem ser programados em C++ e Python para melhor satisfazer professores e alunos. E futuramente pretendemos abranger muitas outras linguagens de programação  e outras formas de programação como em bloco."/>
      <Teste1 id="secao5" titulo="Entre em contato" container="container sobre-contato" desc="desc-contato" conteudo="Gostou do nosso projeto e gostaria de entrar em contato? Nos envie um email para o endereço lara@uesb.edu.br" image="img-contact" srcImage={Contato} />
    </Layout>
  );
};

const query = graphql`
  query {
    strapiHomepage {
      hero {
        title
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          publicURL
        }
      }
    }
    allStrapiArticle(filter: { status: { eq: "published" } }) {
      edges {
        node {
          strapiId
          slug
          title
          category {
            name
          }
          image {
            childImageSharp {
              fixed(width: 800, height: 500) {
                src
              }
            }
          }
          author {
            name
            picture {
              childImageSharp {
                fixed(width: 30, height: 30) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
