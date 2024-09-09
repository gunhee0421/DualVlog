import { QueryCache, QueryClient } from "@tanstack/react-query"
import axios from "axios"
import React from "react"
import { InsertBlogItem } from "./model"
import { headers } from "next/headers"

export const blogService = {
  async blogInfo(client: QueryClient) {
    const response = await axios.get("https://blogs")
    return await response.data
  },
  async getBlog(client: QueryClient, id: string) {
    const response = await axios.get(`https://blog?blogId=${id}`)
    return await response.data
  },
  async addBlog(client: QueryClient, dto: InsertBlogItem) {
    const response = await axios.post(`https://blog`, dto)
    return response.data
  },
}
