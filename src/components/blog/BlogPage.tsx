"use client"

import { useBlogListInfoQuery, useBlogQuery } from "@/api/services/blog/query"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import "github-markdown-css"
import {
  codeblock,
  InsertBlogItem,
  isCodeBlock,
  isParagraph
} from "@/api/services/blog/model"
import { Title } from "@/components/blog/component/Tittle"
import { Info } from "@/components/blog/component/User"
import { Header } from "@/components/blog/page/Header"
import { Code_Block } from "@/components/blog/page/CodeBlock"
import { UUID } from "crypto"
import { useParams } from "next/navigation"
import { useState } from "react"
import { Bottom } from "./page/Bottom"
import { NonBlogPage } from "../home/component/NonBlogPage"

const BlogPage = () => {
  const { id } = useParams() as { id: UUID }
  const [isClick, setIsClick] = useState(false)

  const { isLoading, data, isError } = useBlogQuery(id, {
    queryKey: ["blogInfo", id],
    refetchOnMount: true
  })

  return (
    <div
      className="w-full h-full overflow-y-auto bg-gray-100"
      onClick={() => setIsClick(false)}
    >
      {data?.result ? (
        <div className="w-[80%] h-full m-auto py-[30px] px-[20px] bg-white">
          <Header id={id} click={isClick} setClick={setIsClick} />
          {data?.result?.content?.map((item, index) => {
            if (isParagraph(item)) {
              return (
                <div key={index} className="markdown-body">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {item.content}
                  </ReactMarkdown>
                </div>
              )
            } else if (isCodeBlock(item)) {
              return <Code_Block props={item as codeblock} key={index} />
            }
          })}
          <Bottom blog={data?.result} />
        </div>
      ) : (
        <NonBlogPage />
      )}
    </div>
  )
}

export default BlogPage
