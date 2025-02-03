"use client"

import { useForm } from "react-hook-form"
import { Footer } from "./Footer"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { useState } from "react"
import MDEditor from "@uiw/react-md-editor"
import "@/app/write/custom-editor.css"
import { paragraph, codeblock } from "@/api/services/blog/model"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { setContent } from "@/redux/slice/writeSlice"
import { Braces } from "lucide-react"
import "github-markdown-css"

export interface FormData {
  title: string
  content: Array<paragraph | codeblock>
}

export const WritePage = () => {
  const dispatch = useDispatch()

  const form = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      title: "",
      content: []
    }
  })

  // Redux에서 content와 codeblock을 가져오기
  const contentValue = useSelector((state: RootState) => state.writer.content)
  const codeBlocks = useSelector((state: RootState) => state.writer.codeBlock)
  let viewBlock = ""

  // 새 콘텐츠가 코드블럭 다음에 추가되도록 결합
  const getContentWithCodeBlock = () => {
    let combinedContent = contentValue || ""

    if (codeBlocks && codeBlocks.length > 0) {
      codeBlocks.forEach((block) => {
        combinedContent += `\n\n\`\`\`javascript\n${block.content.code}\n\`\`\`\n`
        if (block.content.text) {
          combinedContent += `\n\n\`\`\`javascript\n${block.content.text}\n\`\`\`\n`
        }
      })
    }
    return combinedContent
  }

  // 콘텐츠가 변경될 때 호출
  const handleOnChange = (value: string | undefined) => {
    const newContent = value || ""

    dispatch(setContent(newContent))
  }

  return (
    <div className="w-full h-screen min-h-screen overflow-y-auto bg-gray-100">
      <div className="h-full m-auto py-[30px] px-[20px] bg-white font-pretendard text-black">
        <input
          {...form.register("title")}
          placeholder="제목"
          className="mb-[30px] mx-10 text-3xl w-full outline-none focus:ring-0"
        />
        <hr />
        <div className="mt-4 mx-10 min-h-[80vh] flex gap-10">
          <MDEditor
            className="min-h-[80vh] flex-1"
            autoFocus={true}
            preview="edit"
            value={contentValue} // 기존 콘텐츠가 유지되면서 작성 중인 콘텐츠를 표시
            onChange={handleOnChange}
          />
          {/* ReactMarkdown - 결과 보기 */}
          <div className="markdown-body flex-1">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {getContentWithCodeBlock()}
            </ReactMarkdown>
          </div>
        </div>
      </div>
      <Footer form={form} />
    </div>
  )
}
