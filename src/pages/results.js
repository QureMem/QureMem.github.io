import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { navigate } from "gatsby"

import * as diff from "diff"

import Row from "../components/row"

import "./main.css"

const Results = ({ location }) => {
  if (location.state === null) {
    navigate("/")
  }
  if (location.state?.results.length === 0) {
    navigate("/")
  }
  return (
    <Layout>
      <SEO title={location.state?.surah?.nameTr ?? "Surah"} />
      <div className="container">
        <h1>Results</h1>

        {location.state?.results.map((e, idx) => {
          let sur =
            location.state?.surah.verses[idx + location.state?.start - 1][
              location.state?.transcript
            ]

          let corrector = diff.diffChars(sur, location.state?.results[idx], {
            ignoreCase: true,
          })
          return (
            <div className="row" key={idx}>
              <Row
                ayah={
                  location.state?.surah.verses[
                    idx + location.state?.start - 1
                  ][0]
                }
                transcript={
                  location.state?.surah.verses[
                    idx + location.state?.start - 1
                  ][1]
                }
                answer={location.state?.results[idx]}
                corrector={corrector}
              />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}
export default Results
