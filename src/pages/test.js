import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { navigate } from "gatsby"

import Prompt from "../components/prompt"

import "./main.css"

const Test = ({ location }) => {
  const surah = location.state?.surah
  const start = location.state?.start
  const end = location.state?.end
  const askTranskript = location.state?.askTranskript
  const [currAya, setCurrAya] = useState(start - 1)
  const [results, setResults] = useState([])

  if (location.state === null) {
    navigate("/")
  } else {
  }
  const tr2no = tr => {
    return tr ? 1 : 0
  }
  const callbackPrompt = res => {
    navigate("/results/", {
      state: {
        surah,
        transcript: tr2no(askTranskript),
        results: res,
        start,
        end,
      },
    })
  }
  const interrupt = () => {
    navigate("/results/", {
      state: {
        surah,
        transcript: tr2no(askTranskript),
        results: results,
        start,
        end: currAya - 1,
      },
    })
  }
  return (
    <Layout>
      <SEO title={surah?.nameTr ?? "Surah"} />
      <div className="container">
        <h1>Surah:</h1>
        <div className="current-score">
          <h3>{surah?.nameTr}</h3>
          <h3>
            {currAya + 1}/{end}
          </h3>
        </div>
        <Prompt
          surah={surah}
          transcript={tr2no(askTranskript)}
          start={start}
          end={end}
          callback={callbackPrompt}
          currAya={currAya}
          setCurrAya={setCurrAya}
          setParentResults={setResults}
        />
        <div className="exit-button">
          <img
            src="https://fonts.gstatic.com/s/i/materialicons/clear/v6/24px.svg?download=true"
            onClick={() => interrupt()}
            alt="Exit"
          />
        </div>
      </div>
    </Layout>
  )
}
export default Test
