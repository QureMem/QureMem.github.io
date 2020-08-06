import React, { useState, useRef } from "react"
import "../pages/main.css"

const Prompt = ({
  surah,
  callback,
  transcript,
  start,
  end,
  currAya,
  setCurrAya,
  setParentResults,
}) => {
  const [mainField, setMainField] = useState("")
  const [correct, setCorrect] = useState(true)
  const [results, setResults] = useState([])
  const inputRef = useRef(null)
  const preprocess = txt => {
    let ret
    if (transcript) {
      ret = txt.toLowerCase()
    } else {
      ret = txt
        .replace(" ۖ", "")
        .replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, "")
    }
    return ret
  }
  const hasDiacritics = txt => {
    return (
      txt
        .replace(" ۖ", "")
        .replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, "")
        .length != txt.length
    )
  }
  const validator = e => {
    let val = e.target.value
    let pval = preprocess(val)
    if (
      pval !==
      preprocess(surah.verses[currAya][transcript]).slice(0, pval.length)
    ) {
      console.log(pval)
      console.log(
        preprocess(surah.verses[currAya][transcript]).slice(0, pval.length)
      )

      setCorrect(false)
      setMainField(val)
    } else {
      setCorrect(true)
      let a = val
      let c = surah.verses[currAya][transcript]
      let ap = preprocess(val)
      let cp = preprocess(surah.verses[currAya][transcript])

      if (
        (!transcript && !hasDiacritics(a) && ap.length === cp.length) ||
        (hasDiacritics(a) && a.length === c.length)
      )
        submitEventHandler(null, val.trim())
      else setMainField(val)
    }
  }

  const submitEventHandler = (e = null, answer = null) => {
    if (e !== null) e.preventDefault()
    let res = results
    if (answer) {
      res.push(answer)
    } else {
      res.push(mainField)
    }
    setResults(res)
    setParentResults(res)
    setMainField("")
    if (currAya + 1 === end) callback(res)
    else setCurrAya(currAya => currAya + 1)
  }
  return (
    <>
      {start === currAya + 1 ? (
        currAya === 0 ? (
          <h4
            style={{
              direction: "rtl",
              textAlign: "center",
              marginBottom: "0.5rem",
              marginTop: "0.5rem",
            }}
          >
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </h4>
        ) : (
          <h4
            style={{
              direction: "rtl",
              textAlign: "center",
              marginBottom: "0.5rem",
              marginTop: "0.5rem",
            }}
          >
            "{surah.verses[currAya - 1][transcript]}"
          </h4>
        )
      ) : null}
      <form
        onSubmit={e => submitEventHandler(e)}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="mainInput-group">
          {transcript ? null : (
            <div onClick={e => submitEventHandler(e)} style={{ marginLeft: 0 }}>
              <img
                src="https://fonts.gstatic.com/s/i/materialicons/arrow_back/v6/24px.svg"
                style={{ margin: 0 }}
              />
            </div>
          )}
          <input
            className={["mainInput", correct ? "correct" : "incorrect"].join(
              " "
            )}
            ref={inputRef}
            value={mainField}
            onChange={e => validator(e)}
            dir={transcript ? "ltr" : "rtl"}
            onBlur={() => {
              inputRef.current.focus()
            }}
            autoFocus
            autoCorrect="off"
          />

          {transcript ? (
            <div
              onClick={e => submitEventHandler(e)}
              style={{ marginRight: 0 }}
            >
              <img
                src="https://fonts.gstatic.com/s/i/materialicons/arrow_forward/v6/24px.svg"
                style={{ margin: 0 }}
              />
            </div>
          ) : null}
        </div>
      </form>
    </>
  )
}
export default Prompt
