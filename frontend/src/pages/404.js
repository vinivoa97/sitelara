import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import '../styles/desenvolvendo.css';
import IMGRobot from '../assets/robot.png';

const NotFoundPage = () => (
  <Layout>
    <SEO
      seo={{
        metaTitle: "404: Not found",
        metaDescription: "It looks like you got lost",
      }}
    />
    <div className="flex-box container-box">
        <div className="content-box"> 
          <img className="robot" src={IMGRobot} alt=""></img>
          <p>Desculpe-nos pelos transtornos, estamos em desenvolvimento!</p>
        </div>
      </div>
  </Layout>
);

export default NotFoundPage;
