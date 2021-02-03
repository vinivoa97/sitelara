import React from "react";
import '../styles/estilo.css';
//import { Link, StaticQuery, graphql } from "gatsby";
import { Navbar, Nav, Button } from "react-bootstrap"
import logo from '../assets/logo.png'; 



export default function Nav2(props) {

  function getClassName(page) {
    return (props.page === page)? "nav-link active" : "nav-link"
  }
 
  return(
    
    <Navbar
      bg="white"
      expand="lg"
      className="navbar justify-content-between"
    >
      <Navbar.Brand href="/" className="nav-logo-div">
        <img
          alt=""
          src={logo}
          className="nav-logo"
        />{' '}
      </Navbar.Brand>
      <Navbar.Toggle
        className="nav-toggle"
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link
            className={getClassName("laboratorios")}
            href="/laboratoriosPage"
          >
            Laboratórios
          </Nav.Link>
          <Nav.Link
            className={getClassName("cursos")}
            href="/cursosPage"
          >
            Cursos
          </Nav.Link>
          <Nav.Link
            className={getClassName("quemSomos")}
            href="/quemSomosPage"
          >
            Quem somos
          </Nav.Link>
          <Nav.Link
            className={getClassName("publicacoes")}
            href="/publicacoesPage"
          >
            Publicações
          </Nav.Link>
          <Nav.Link
            className={getClassName("blog")}
            href="/blogPage"
          >
            Blog
          </Nav.Link>
          <Nav.Link
            className="nav-link mobile"
            href="/loginPage"
          >
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Button
        className="btn-login desktop"
        href="/loginPage"
      >
        Login
      </Button>{' '}
    </Navbar>
    
    
);
  }

  ////////////////////////
/*
import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";

const Nav = () => (
  <StaticQuery
    query={graphql`
      query {
        strapiGlobal {
          siteName
        }
        allStrapiCategory {
          edges {
            node {
              slug
              name
            }
          }
        }
      }
    `}
    render={(data) => (
      <div>
        <div>
          <nav className="uk-navbar-container" data-uk-navbar>
            <div className="uk-navbar-left">
              <ul className="uk-navbar-nav">
                <li>
                  <Link to="/">{data.strapiGlobal.siteName}</Link>
                </li>
              </ul>
            </div>
            <div className="uk-navbar-right">
              <button
                className="uk-button uk-button-default uk-margin-right"
                type="button"
              >
                Categories
              </button>
              <div uk-dropdown="animation: uk-animation-slide-top-small; duration: 1000">
                <ul className="uk-nav uk-dropdown-nav">
                  {data.allStrapiCategory.edges.map((category, i) => (
                    <li key={`category__${category.node.slug}`}>
                      <Link to={`/category/${category.node.slug}`}>
                        {category.node.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    )}
  />
);

export default Nav;
*/












