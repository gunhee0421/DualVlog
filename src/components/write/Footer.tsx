"use client"

import { LogIn } from "lucide-react"
import { useRouter } from "next/navigation"
import { Code } from "lucide-react"
import React, { useEffect, useState } from "react"
import { UseFormReturn } from "react-hook-form"
import { Modal } from "./Modal"
import {
  codeblock,
  ContentType,
  InsertBlogItem,
  paragraph
} from "@/api/services/blog/model"
import { FormData } from "./WritePage"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { useAddBlogMutation } from "@/api/services/blog/query"
import { toast } from "sonner"

export const Footer: React.FC<{
  form: UseFormReturn<FormData>
}> = ({ form }) => {
  const router = useRouter()
  const [modal, setModal] = useState(false)

  const contentValue = useSelector((state: RootState) => state.writer.content)

  const addBlog = useAddBlogMutation({
    onSuccess: () => {
      toast("블로그 발행 성공!", { duration: 3000 })
      router.push("/home")
    },
    onError: () => {
      toast("블로그 발행 실패...", { duration: 3000 })
    }
  })

  const renderModal = () => {
    if (!modal) return null
    return <Modal form={form} setModal={setModal}></Modal>
  }
  const handleCode = () => {
    if (contentValue.length == 0) {
      return
    }
    const newContent: paragraph = {
      type: "paragraph",
      content: contentValue
    }

    form.setValue("content", [...form.getValues("content"), newContent])
  }

  const handleCreate = () => {
    if (form.watch("title").length == 0) {
      toast("제목을 입력하세요.", { duration: 3000 })
      return
    }
    if (contentValue.length > 0) {
      const newContent: paragraph = {
        type: "paragraph",
        content: contentValue
      }
      form.setValue("content", [...form.getValues("content"), newContent])
    }
    const newBlog: InsertBlogItem = {
      title: form.watch("title"),
      content: form.watch("content"),
      createdAt: new Date().toISOString(),
      comment: [],
      like: 0,
      name: "조건희",
      logo: "image"
    }
    addBlog.mutate(newBlog)
  }

  return (
    <div className="fixed bottom-0 w-full h-[4rem] px-[4rem] bg-white border-t-[1px] flex items-center justify-between ">
      <div
        className="text-black flex flex-row items-center justify-center cursor-pointer hover:text-red-500 transition-colors duration-200 hover:font-semibold gap-2"
        onClick={() => router.push("/home")}
      >
        <LogIn size={30} />
        <span>나가기</span>
      </div>
      <div
        className="flex flex-row items-center gap-2 cursor-pointer hover:font-semibold hover:scale-105 transition-color duration-200 hover:text-green-500"
        onClick={() => {
          handleCode()
          setModal(!modal)
        }}
      >
        <Code size={30} />
        <span>코드 추가</span>
      </div>
      <div className="flex flex-row font-semibold gap-3">
        {/* <div
          className=" cursor-pointer flex justify-center px-[20px] py-[5px] rounded items-center border-1 border-solid bg-gray-300 hover:bg-sky-400 hover:scale-105 transition-all duration-200 hover:text-white"
          onClick={handleSave}
        >
          임시저장
        </div> */}
        <div
          className=" cursor-pointer flex justify-center px-[20px] py-[5px] rounded items-center border-1 border-solid bg-gray-200  hover:bg-blue-500 hover:scale-105 transition-all duration-200 hover:text-white"
          onClick={handleCreate}
        >
          발행하기
        </div>
        {renderModal()}
      </div>
    </div>
  )
}
