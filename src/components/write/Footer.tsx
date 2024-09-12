"use client"

import { LogIn } from "lucide-react"
import { useRouter } from "next/navigation"
import { Code } from "lucide-react"
import React, { useEffect, useState } from "react"
import { UseFormReturn } from "react-hook-form"
import { Modal } from "./Modal"

export const Footer: React.FC<{
  form: UseFormReturn<{ title: string; content: string }>
}> = ({ form }) => {
  const router = useRouter()
  const [modal, setModal] = useState(false)

  const handleSave = () => {
    console.log(form.watch("content"))
  }

  const renderModal = () => {
    if (!modal) return null
    return <Modal form={form} setModal={setModal}></Modal>
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
        onClick={() => setModal(!modal)}
      >
        <Code size={30} />
        <span>코드 추가</span>
      </div>
      <div className="flex flex-row font-semibold gap-3">
        <div
          className=" cursor-pointer flex justify-center px-[20px] py-[5px] rounded items-center border-1 border-solid bg-gray-300 hover:bg-sky-400 hover:scale-105 transition-all duration-200 hover:text-white"
          onClick={handleSave}
        >
          임시저장
        </div>
        <div
          className=" cursor-pointer flex justify-center px-[20px] py-[5px] rounded items-center border-1 border-solid bg-gray-100  hover:bg-blue-500 hover:scale-105 transition-all duration-200 hover:text-white"
          onClick={handleSave}
        >
          저장
        </div>
        {renderModal()}
      </div>
    </div>
  )
}
