import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from '../components/layout';
import ArticlesComponent from "../components/articles";
import '../styles/estilo.css';
import '../styles/blog.css';


const BlogPage = () => {
    const data = useStaticQuery(query);
  
    return (
        <Layout seo={data.strapiBlogPage.seo}>
        <section className="secao" id="section">
          <div className="container">
            <h2 className="titulo-div">Blog</h2>
            <ArticlesComponent articles={data.allStrapiArticle.edges} />
          </div>  
        </section>
        </Layout>
  )
}



const query = graphql`
  query {
    strapiBlogPage {
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

export default BlogPage;

/*import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import ArticlesComponent from "../components/articles";
//import "../assets/css/main.css";
import '../styles/estilo.css';
import '../styles/blog.css';

const BlogPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout seo={data.strapiBlogPage.seo}>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <ArticlesComponent articles={data.allStrapiArticle.edges} />
        </div>
      </div>
    </Layout>
  );
};

const query = graphql`
  query {
    strapiBlogPage {
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

export default BlogPage;
*/