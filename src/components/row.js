import React, { useState } from "react"
import "../pages/main.css"
const Row = ({ corrector, ayah, transcript, answer }) => {
  const [active, setActive] = useState(false)
  return (
    <>
      <div
        className={["toggle-ayah", active ? "active" : null].join(" ")}
        onClick={() => setActive(active => !active)}
      >
        {corrector.map((part, i) => {
          let styl
          if (part.added) {
            styl = {
              color: "red",
              textDecoration: "line-through",
            }
          } else if (part.removed) {
            styl = {
              color: "red",
            }
          } else {
            styl = {
              color: "seagreen",
            }
          }

          return (
            <span key={i} style={styl}>
              {part.value}
            </span>
          )
        })}
      </div>
      {active ? (
        <div /* onClick={() => setActive(active => !active)} */>
          <h4>Ayah:</h4>
          <p style={{ textAlign: "center" }}>{ayah}</p>
          <h4>You answer:</h4>
          <p style={{ textAlign: "center" }}>{answer}</p>
          <h4>Transcript:</h4>
          <p style={{ textAlign: "center" }}>{transcript}</p>
        </div>
      ) : null}
    </>
  )
}

export default Row
