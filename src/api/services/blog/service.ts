import { QueryCache, QueryClient } from "@tanstack/react-query"
import axios from "axios"
import React from "react"
import { BlogItem, BlogsInfo, InsertBlogItem } from "./model"
import { headers } from "next/headers"
import { APIBuilder } from "@/api/lib/api"

export const blogService = {
  async blogInfo(client: QueryClient) {
    // const response = await axios.get("https://blogs")
    const response = APIBuilder.get("https://blogs")
      .build()
      .call<BlogsInfo<BlogItem[]>>()
    return response
  },
  async getBlog(client: QueryClient, id: string) {
    const response = await axios.get(`https://blog?blogId=${id}`)
    return await response.data
  },
  async addBlog(client: QueryClient, dto: InsertBlogItem) {
    const response = await axios.post(`https://blog`, dto)
    return response.data
  }
}
