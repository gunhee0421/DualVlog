import { CodeBlock, InsertBlogItem } from "@/api/services/blog/model"
import React, { useEffect, useState } from "react"
import { TextView } from "../component/TextView"
import { CodeView } from "../component/CodeView"

export const Code_Block: React.FC<{ props: CodeBlock }> = ({ props }) => {
  const [focusedLines, setFocusedLines] = useState<number[]>(
    props.link[0][1] || []
  )

  return (
    <div className="w-full flex flex-row py-6 justify-around">
      <CodeView props={props} focusedLines={focusedLines} />
      <TextView
        props={props}
        onLineFocus={(lines) => {
          setFocusedLines(lines)
        }}
      />
    </div>
  )
}
