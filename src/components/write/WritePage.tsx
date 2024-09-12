"use client"

import { useForm } from "react-hook-form"
import { Footer } from "./Footer"
import ReactMarkdown from "react-markdown"
import { useState } from "react"
import MDEditor from "@uiw/react-md-editor"
import "@/app/write/custom-editor.css"
export const WritePage = () => {
  const form = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      content: ""
    }
  })
  const handleContentChange = (value: string | undefined) => {
    form.setValue("content", value || "")
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
        <MDEditor
          className="mt-4 mx-10 min-h-[80vh]"
          autoFocus={true}
          value={form.watch("content")}
          onChange={handleContentChange}
        />
      </div>
      <Footer form={form} />
    </div>
  )
}
