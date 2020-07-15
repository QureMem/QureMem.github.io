import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { navigate, Link } from "gatsby"
import Surats from "../data/surats.json"
import { useStaticQuery, graphql } from "gatsby"
import { Link as MyLink } from "../components/styling"
import "./main.css"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query DescriptionQuery {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)
  const printf = number => {
    if (number / 100 >= 1) {
      return `${number}`
    } else if (number / 10 >= 1) {
      return `0${number}`
    } else {
      return `00${number}`
    }
  }
  const goToTest = i => {
    import(`../data/${printf(i)}.json`).then(res => {
      navigate("/pretest/", {
        state: {
          surah: res,
        },
      })
    })
  }
  return (
    <Layout>
      <SEO title="Home" />
      <div className="container">
        <h2 style={{ textAlign: "center" }}>
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </h2>
        {/* <p>{data.site.siteMetadata.description}</p> */}
        {Surats.map((e, i) => (
          <MyLink key={i} onClick={() => goToTest(i + 1)}>
            {i + 1}. {e.nameTr} - {e.nameAr}
          </MyLink>
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage
