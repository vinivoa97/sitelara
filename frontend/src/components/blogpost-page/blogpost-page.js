import React from "react";
import "./style.css";
import { Container } from 'react-bootstrap'
import Img from "gatsby-image";
/**
 * title: Titulo do post
 * date: Data de publicacoa
 * body: Texto do post
 * imageUrl: Caminho para a imagem do post
 */

export default function BlogPostPage(props) {
  return(
    <Container>
        <p className="date">Publicado em { props.date }</p>
        <Img 
            className="head-image"
             fixed={props.imageUrl}
             imgStyle={{ position: "static"}}
        />     
        

        <div className="title--container">
            <h2>{ props.title }</h2>
            <h4>Escrito por { props.author }</h4>
        </div>
        <span className="body--container">
            { props.body }
        </span>
    </Container>
  );
}