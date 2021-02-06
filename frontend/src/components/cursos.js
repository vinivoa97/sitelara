import React, { useEffect } from "react";
import { useStaticQuery, graphql} from "gatsby";
import Img from "gatsby-image";
import '../styles/estilo.css';
import '../styles/cursos.css';
import AOS from "aos";

const verification = (item, emAndamento) =>{
  if (item.node.statusCurso === emAndamento){
    return (
      <div>
      <h3 className="nome-exp">{item.node.nomeCurso}</h3>
      <Img fixed={item.node.fotoCurso.childImageSharp.fixed}
           className="card-img-top img-experimento" 
           imgStyle={{ position: "static" }}
      />
      <div className="card-body">
      <p className="card-text">{item.node.descricaoCurso}</p>
      <div className="div-btn">
        <button className="btn-cursos" href="../inDevelopment">
          Ir para curso
        </button>
      </div>
      </div> 
      </div>
    )
  }  return (<div></div>)
}

const Cursos = () =>{
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const data = useStaticQuery(query);
  return(

    <div className="card mb-3" data-aos="fade-up">
    <div>
    <section className="secao" id="section2">
    <div className="container container-exps">
    <h2 className="tipo-exp">Em andamento</h2>

    {data.allStrapiCursos.edges.map(
      (item) =>
      <div key={item.node.strapiId}>
      {verification(item, true)}
      </div>
    )}

    </div>


    <div className="container container-exps">
    <h2 className="tipo-exp">Finalizados</h2>
    {data.allStrapiCursos.edges.map(
      (item) =>
      <div key={item.node.strapiId}>
      {verification(item, false)}
      </div>
    )}
    </div>
    </section></div>
    </div>

  )
}

const query = graphql`
query {
    allStrapiCursos {
        edges {
          node {
            descricaoCurso
            nomeCurso
            linkCurso
            strapiId
            statusCurso
            fotoCurso {
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
`

export default Cursos;
