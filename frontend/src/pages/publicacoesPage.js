import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import Publicacoes from "../components/publicacoes";
import '../styles/estilo.css';
import '../styles/publicacoes.css';

const PublicacoesPage = () => {
    const data = useStaticQuery(query);

  return (
    <>
        <Layout seo={data.strapiPublicacoesPage.seo}>
        <section className="secao" id="section">
          <div className="container">
            <h2 className="titulo-div">Publicações</h2>
            <Publicacoes />
          </div>  
        </section>
        </Layout>
    </>
    
  );
};


const query = graphql`
  query {
    strapiPublicacoesPage {
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
}

`;


export default PublicacoesPage;
