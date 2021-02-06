import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import Cursos from "../components/cursos";
import DivCurso from "../components/divCursos";
import IMGCursos from "../assets/cursos.png";

const CursosPage = () =>{
    const data = useStaticQuery(query);
  return (
    <Layout seo={data.strapiCursosPage.seo}>
      <DivCurso imagem={IMGCursos}/>
      <Cursos/>
    </Layout>
  )
}


const query = graphql`
  query {
    strapiCursosPage {
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

export default CursosPage;
