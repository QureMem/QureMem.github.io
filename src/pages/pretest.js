import React, { useState } from "react"
import { navigate } from "gatsby"

import scrollTo from "gatsby-plugin-smoothscroll"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Toggle from "../components/toggle"
import { units as unitsjs } from "../data/units"
import { Link as MyLink } from "../components/styling"

const Pretest = ({ location }) => {
  const [askTranskript, setAskTranscript] = useState(false)
  const [start, setStart] = useState(1)
  const [end, setEnd] = useState(300)
  let divisions = []
  if (location.state === null) {
    navigate("/")
  } else {
    if (end === 300) {
      setEnd(location.state?.surah?.noVerses)
    }
    let units = unitsjs.find(u => u.surah === location.state?.surah?.nameEn)
    if (units) {
      units = units.units
      for (let i = 0; i < units.length - 1; i++) {
        divisions.push([units[i], units[i + 1]])
      }
    }
  }

  const next = e => {
    e.preventDefault()
    navigate("/test/", {
      state: {
        surah: location.state.surah,
        askTranskript,
        start,
        end,
      },
    })
  }

  const min = (a, b) => {
    if (a > b) return b
    else return a
  }
  const max = (a, b) => {
    if (a > b) return a
    else return b
  }

  const preselect = (f, s) => {
    setStart(f)
    setEnd(s)
  }

  const cut = txt => {
    let ret = '"'
    if (txt.length > 100) {
      ret += txt.slice(0, 100)
      ret += " ..."
    } else {
      ret += txt
    }
    ret += '"'
    return ret
  }
  return (
    <Layout>
      <SEO title={location.state?.surah?.nameTr ?? "Surah"} />
      <h3>Settings</h3>
      <form onSubmit={e => next(e)}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <label style={{ padding: "1rem" }}>Choose:</label>
          <Toggle
            text={["Transcript", "عربية"]}
            callback={ret => setAskTranscript(ret)}
            transcript={askTranskript}
          />
        </div>
        {divisions.length === 0 ? null : (
          <div className="units">
            <MyLink
              style={{
                direction: "rtl",
                fontSize: "1.2rem",
                paddingBottom: "0.3rem",
                lineHeight: "1.4rem",
              }}
              onClick={() => {
                preselect(1, divisions[divisions.length - 1][1])
                scrollTo("#startButton")
              }}
            >
              1 ← {divisions[divisions.length - 1][1]}. السورة كلها
            </MyLink>
            {divisions.map((u, i) => {
              return (
                <MyLink
                  key={i}
                  style={{
                    direction: "rtl",
                    fontSize: "1.2rem",
                    paddingBottom: "0.3rem",
                    lineHeight: "1.4rem",
                  }}
                  onClick={() => {
                    preselect(u[0] + 1, u[1])
                    scrollTo("#startButton")
                  }}
                >
                  {u[0] + 1} ← {u[1]}.{" "}
                  {cut(location.state.surah.verses[u[0]][0])}
                </MyLink>
              )
            })}
          </div>
        )}
        <div style={{ display: "flex", alignItems: "center" }}>
          <label style={{ padding: "1rem" }}>Starting verse :</label>

          <input
            type="number"
            value={start}
            onChange={e => {
              setStart(parseInt(e.target.value))
            }}
            style={{ maxWidth: 300 }}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <label style={{ padding: "1rem" }}>Ending verse :</label>

          <input
            type="number"
            value={end}
            onChange={e => {
              setEnd(parseInt(e.target.value))
            }}
            style={{ maxWidth: 300 }}
          />
        </div>
        <input
          id="startButton"
          type="submit"
          name="start"
          value="Start"
          className="start-button"
        />
      </form>
    </Layout>
  )
}

export default Pretest
