import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import "../styles/estilo.css";
import "../styles/quemsomos.css";
import Img from "gatsby-image";
//import Image from "../../public/assets/girl.png";



const CardProfessor = () =>{
    const data = useStaticQuery(query);
    return(
      <div>
        <section className="secao2"> 
             <div className="container">
             <h2 className="funcao">Professores</h2>
              <div id="deck-professores" className="card-deck">
                  {data.allStrapiCardProfessors.edges.map(
                  (item) => 
                    <div className="card" data-aos="zoom-in-up" key={item.node.strapiId}>
                      <div className="title text-center">
                      <h3 className="nome">{ item.node.nomeProfessor }</h3>
                      <Img fixed={item.node.fotoProfessor.childImageSharp.fixed}
                            className="img-redonda"
                            alt="foto card"
                      />
                      </div>
                      <div className="descricao">
                        <p id="ptext">{item.node.descricaoProfessor}</p>
                      </div>
                      <div className="div-prof-lattes"><Link className="prof-lattes" to={ item.node.lattesProfessor }>Lattes</Link></div>
                    </div> 
                  )}
              </div>
             </div>
        </section>
      </div>
    );
  }

const query = graphql`
  query {
    allStrapiCardProfessors {
        edges {
          node {
            nomeProfessor
            lattesProfessor
            descricaoProfessor
            strapiId
            id
            fotoProfessor {
              childImageSharp {
                fixed {
                  src
                }
              }
              publicURL
            }
          }
        }
      }
  }
`;
export default CardProfessor;
