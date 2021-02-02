import React, { useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import '../styles/estilo.css';
import '../styles/quemsomos.css'; 
import AOS from "aos";
//import NavBar from '../components/navbar';
//import Footer from "../components/footer";
import IMGEquipe from "../assets/equipe.png";
//import CardProfessor2 from "../components/card-professor2";
//import CardAluno from "../components/card-aluno";
import Layout from "../components/layout";


const QuemSomosPage = () => {
  const data = useStaticQuery(query);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Layout seo={data.strapiHomepage.seo}>
      <section className="secao1" >
      <div className="container sobre-nos">
        <div className="row">
          <div className="col-sm-6 coluna">
            <h2 className="titulo-nos">Quem somos?</h2>
            <p className="desc-nos">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="col-sm-6 coluna">
            <img className="img-nos" data-aos="fade-left" src={IMGEquipe} alt=""/>
          </div>
        </div>
      </div>
      <svg id="divisoria" viewBox="0 0 1280 187.25"><defs></defs><path className="cls-1" d="M1280,499.33c-184.35,85.22-418.76,153.33-594.33,43.34-21.25-13.31-29.24-21.47-50-35C528.53,437.82,343.26,395.39,0,509.33V626H1280Z" transform="translate(0 -438.75)"/></svg>
    </section>
    
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

export default QuemSomosPage;
