"use client"

import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { useState } from "react"
import { stat } from "fs"
import HomePage from "@/components/home/HomePage"
import { useRouter } from "next/navigation"

const App = () => {
  const router = useRouter()
  router.push("/home")

  return <div></div>
}

export default App
