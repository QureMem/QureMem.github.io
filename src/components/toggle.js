import React, { useState } from "react"
import "./toggle.css"
const Toggle = ({ text, transcript, callback }) => {
  return (
    <div
      className={["toggle", transcript ? null : "off"].join(" ")}
      onClick={() => {
        callback(transcript => !transcript)
      }}
    >
      <div className="toggleGroup">
        <label className={["btn", "toggleOn"].join(" ")}>{text[0]}</label>
        <label className={["btn", "toggleOff"].join(" ")}>{text[1]}</label>
        <span className={["btn", "toggleHandle"].join(" ")}></span>
      </div>
    </div>
  )
}
export default Toggle
