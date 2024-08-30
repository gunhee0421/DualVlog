"use client"

import UserCenter from "@/components/user/page/UserCenter"
import UserTopNavigation from "@/components/user/page/userTopNavigation"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

const UserPage = () => {
  const { data } = useQuery({ queryKey: ["userInfo"] })
  const router = useRouter()

  if (!data) {
    router.push("/home")
  }

  return (
    <div className="flex flex-col bg-gray-50 h-screen items-center">
      <UserTopNavigation />
      <UserCenter />
    </div>
  )
}

export default UserPage
