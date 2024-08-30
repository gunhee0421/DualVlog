import { CodeBlock, InsertBlogItem } from "@/api/services/blog/model"
import React from "react"
import { TextView } from "../component/TextView"
import { CodeView } from "../component/CodeView"

export const Code_Block: React.FC<{ props: CodeBlock }> = ({ props }) => {
  return (
    <div className="w-full flex flex-row py-6 justify-around">
      <CodeView props={props} />
      <TextView props={props} />
    </div>
  )
}
