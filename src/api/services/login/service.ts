import { QueryCache, QueryClient } from "@tanstack/react-query"
import axios from "axios"
import { headers } from "next/headers"
import React from "react"

export const loginService = {
  async login(service: any) {
    const response = await axios.get(`https://login/${service}`)
    if (response.status !== 200) {
      throw new Error("fetch error")
    }
    return await response.data
  },
}
