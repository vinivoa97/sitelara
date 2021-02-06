import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import Laboratorios from "../components/laboratorios";
import DivLab from "../components/divLab";
import IMGLaboratorio from "../assets/laboratorio.png";



const LaboratoriosPage = () => {
    const data = useStaticQuery(query);

  return (
        <Layout seo={data.strapiLaboratoriosPage.seo}>
          <DivLab imagem={IMGLaboratorio}/>
          <Laboratorios/>
        </Layout>
    
  );
};


const query = graphql`
  query {
    strapiLaboratoriosPage {
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


export default LaboratoriosPage;
