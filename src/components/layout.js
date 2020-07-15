/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "space-between",
          padding: `0 1.0875rem 1.45rem`,
          maxWidth: "1200px",
          justifyContent: "center",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <main>{children}</main>
      </div>
      <footer
        style={{
          fontFamily: "Courier New, Courier, monospace",
          textAlign: "center",
          fontSize: "0.8rem",
        }}
      >
        © 2020 QureMem
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
