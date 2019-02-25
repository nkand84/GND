import React, {Component} from 'react';
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "../header/header"
import Footer from "../footer/footer"
import About from "../about/about"
import Form from "../form/form"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
  query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        
        <div className="container-main">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="wrapper">
        <Form/>
         <main>{children}</main>
          </div>
         <Footer/>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
