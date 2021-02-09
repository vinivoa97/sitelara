import React from "react";
//import { Link } from "gatsby";
import Img from "gatsby-image";


import "../styles/blogspot.css";
import { Container, Row, Col, Button } from 'react-bootstrap'


const Card = ({ article }) => {
  if((article.node.strapiId / 2) !== 0){
  return (
    <Container className="blogpost--container">
      <Row>
        <Col lg={6}>
          <div className="gray-background">
            <div className="image--container">
              <Img
              fixed={article.node.image.childImageSharp.fixed}
              imgStyle={{ position: "static" }}
              />
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className="description--container">
            <h2 className="blogpost-title">{article.node.title}</h2>
            <div className="blogpost-data">
              <p>{article.node.author.name}</p>
              <p>{ article.node.publishedAt }</p>
            </div>
            <div className="preview--container">
              <h3 className="blogpost-preview">
                { article.node.description }
              </h3>
            </div>
            <div className="button--container">
              <Button
                className="more-info--button"
                href={`/article/${article.node.slug}`}
              >
                Continue lendo
              </Button>{' '}
            </div>
          </div>

        </Col>
      </Row>
    </Container>
  )} else{
    return (
    <Container className="blogpost--container">
    <Row>
      <Col lg={6}>
        <div className="gray-background no-desktop">
        <div className="image--container">
              <Img
              fixed={article.node.image.childImageSharp.fixed}
              imgStyle={{ position: "static" }}
              />
            </div>
        </div>
        <div className="description--container">
          <h2 className="blogpost-title">{article.node.title}</h2>
          <div className="blogpost-data">
            <p>{article.node.author.name}</p>
            <p>{ article.node.publishedAt }</p>
          </div>
          <div className="preview--container">
            <h3 className="blogpost-preview">
            { article.node.description }
            </h3>
          </div>
          <div className="button--container">
            <Button
              className="more-info--button"
              href={`/article/${article.node.slug}`}
            >
              Continue lendo
            </Button>{' '}
          </div>
        </div>
      </Col>
      <Col lg={6}>
        <div className="image--container-left no-mobile"></div>
        <div className="gray-background-left no-mobile"></div>
      </Col>
    </Row>
  </Container>
    );

  }
}















/*
const Card = ({ article }) => {
  return (
    <Link to={`/article/${article.node.slug}`} className="uk-link-reset">
      <div className="uk-card uk-card-muted">
        <div className="uk-card-media-top">
          <Img
            fixed={article.node.image.childImageSharp.fixed}
            imgStyle={{ position: "static" }}
          />
        </div>
        <div className="uk-card-body">
          <p id="category" className="uk-text-uppercase">
            {article.node.category.name}
          </p>
          <p id="title" className="uk-text-large">
            {article.node.title}
          </p>
          <div>
            <hr className="uk-divider-small" />
            <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
              <div>
                {article.node.author.picture && (
                  <Img
                    fixed={article.node.author.picture.childImageSharp.fixed}
                    imgStyle={{ position: "static", borderRadius: "50%" }}
                  />
                )}
              </div>
              <div className="uk-width-expand">
                <p className="uk-margin-remove-bottom">
                  {article.node.author.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};


*/
export default Card;
