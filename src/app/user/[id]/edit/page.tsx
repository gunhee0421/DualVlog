"use client"

import { UserItem } from "@/api/services/user/model"
import { useUserInfoQuery } from "@/api/services/user/query"
import { useRouter } from "next/navigation"
import React, { useEffect } from "react"
import { useForm } from "react-hook-form"

const UserEdit = () => {
  const userData = useUserInfoQuery()
  const router = useRouter()

  const form = useForm<UserItem>({
    mode: "onChange",
    defaultValues: {
      email: userData.data?.result.email,
      name: userData.data?.result.name,
      userlogo: userData.data?.result.userlogo,
      introduce: userData.data?.result.introduce,
      stack: userData.data?.result.stack,
    },
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(form.watch("email"))
    router.push(`/user/${userData.data?.result.id}`)
  }

  if (!userData.data?.result) {
    router.push(`/login`)
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-gray-500">
      {userData.data?.result && (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8"
        >
          <h1 className="font-bold text-3xl text-center text-gray-800 mb-6">
            개인정보 수정
          </h1>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">이름</label>
            <input
              {...form.register("name", {
                required: "이름은 필수",
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="이름을 입력하세요"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">메일</label>
            <input
              {...form.register("email", {
                required: "이메일은 필수",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "올바른 이메일 형식을 입력해주세요.",
                },
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="이메일을 입력하세요. ex) example@gmail.com"
              type="email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">소개</label>
            <textarea
              {...form.register("introduce")}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="자기소개를 입력하세요"
              rows={3}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">
              기술 스택
            </label>
            <input
              {...form.register("stack")}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="기술 스택을 입력하세요. ex) next.js, react ..."
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className={`font-bold py-2 px-6 rounded-lg transition duration-300 ${
                form.formState.isValid
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-gray-400 text-gray-200 cursor-not-allowed"
              }`}
            >
              저장하기
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default UserEdit
