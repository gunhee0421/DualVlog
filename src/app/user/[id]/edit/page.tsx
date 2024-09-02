"use client"

import { UserItem } from "@/api/services/user/model"
import { useUserInfoQuery } from "@/api/services/user/query"
import { useRouter } from "next/navigation"
import React from "react"
import { useForm } from "react-hook-form"

const UserEdit = () => {
  const userData = useUserInfoQuery()
  const router = useRouter()

  const form = useForm<UserItem>({
    defaultValues: {
      email: userData.data?.result.email,
      name: userData.data?.result.name,
      userlogo: userData.data?.result.userlogo,
      introduce: userData.data?.result.introduce,
      stack: userData.data?.result.stack,
    },
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(form)
    router.push(`/user/${userData.data?.result.id}`)
  }

  return (
    <div>
      {userData.data?.result ? (
        <form onSubmit={handleSubmit}>
          <div className="w-full h-screen flex flex-col justify-center items-center font-pretendard">
            <h1 className="font-bold text-2xl">Edit Item</h1>
            <div>
              <label>이름 : </label>
              <input {...form.register("name")} />
            </div>
            <div>
              <label>메일 : </label>
              <input {...form.register("email")} />
            </div>
            <div>
              <label>소개 : </label>
              <input {...form.register("introduce")} />
            </div>
            <div>
              <label>기술 : </label>
              <input {...form.register("stack")} />
            </div>
          </div>
        </form>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default UserEdit
