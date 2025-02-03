import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import styles from "@/app/styles/codeView.module.css"
import React, { useEffect, useLayoutEffect, useRef } from "react"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import { codeblock } from "@/api/services/blog/model"

export const CodeView: React.FC<{
  props: codeblock
  focusedLines: number[]
}> = ({ props, focusedLines }) => {
  const codeContainerRef = useRef<HTMLDivElement>(null)
  const preElementRef = useRef<HTMLPreElement | null>(null)

  useEffect(() => {
    if (focusedLines.length > 0 && codeContainerRef.current) {
      const firstFocusedLineElement = document.getElementById(
        `code-${focusedLines[0]}`
      )

      if (firstFocusedLineElement && preElementRef.current) {
        const container = preElementRef.current

        const offset = firstFocusedLineElement.offsetTop - container.offsetTop

        container.scrollTo({
          top: offset,
          behavior: "smooth"
        })
      }
    }
  }, [focusedLines])

  useEffect(() => {
    if (codeContainerRef.current) {
      preElementRef.current = codeContainerRef.current.querySelector("pre")
    }
  }, [])

  return (
    <div ref={codeContainerRef} className={styles.codeViewContainer}>
      <div className={styles.languageLabel}>{props.language}</div>
      <SyntaxHighlighter
        language={`${props.language}`}
        style={vscDarkPlus}
        showLineNumbers={true}
        wrapLines={true}
        className={`${styles.syntaxHighlight} ${styles.scroll_container}`}
        lineProps={(lineIndex) => {
          const lineNumber = lineIndex
          const isFocused = focusedLines.includes(lineNumber)

          return {
            id: `code-${lineNumber}`,
            style:
              focusedLines.length > 0
                ? {
                    opacity: isFocused ? "inherit" : "0.1",
                    transition: "opacity 0.5s ease-in-out"
                  }
                : {
                    transition: "opacity 0.5s ease-in-out"
                  }
          }
        }}
      >
        {props.content.code}
      </SyntaxHighlighter>
    </div>
  )
}
