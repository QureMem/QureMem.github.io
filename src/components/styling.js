import React from "react"

export const Link = ({ children, style, onClick }) => {
  return (
    <h3
      style={{ cursor: "pointer", color: "#1B7A43", ...style }}
      onClick={onClick}
    >
      {children}
    </h3>
  )
}
