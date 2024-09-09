"use client"

import TopNavigation from "@/components/home/component/TopNavigation"
import MiddleNavigation from "@/components/home/component/MiddleNavigation"
import React, { useEffect, useState } from "react"
import ContentView from "@/components/home/component/ContentView"
import {
  blogQueryOptions,
  useBlogListInfoQuery,
} from "@/api/services/blog/query"
import { BlogItem } from "@/api/services/blog/model"
import { filterAndSortIndex, filterAndSortTime } from "./function/filterAndSort"
import { NonBlogPage } from "./component/NonBlogPage"

const HomePage = () => {
  const [index, setIndex] = useState<number>(1)
  const [time, setTime] = useState<number>(30)
  const [blog, setBlog] = useState<BlogItem[] | []>([])

  const blogResponse = useBlogListInfoQuery()

  // home 트렌딩, 최신, 피드 정렬 Memo
  const filteredAndSortedBlog = React.useMemo(() => {
    const blogs = blogResponse.data?.result
    let sortedBlog = filterAndSortIndex(blogs || [], index)
    return filterAndSortTime(sortedBlog, time)
  }, [index, time, blogResponse.data?.result])

  useEffect(() => {
    setBlog(filteredAndSortedBlog)
  }, [filteredAndSortedBlog, blogResponse.data?.result])

  return (
    <div className="flex flex-col px-24 bg-gray-50 h-screen">
      <TopNavigation />
      <MiddleNavigation
        index={index}
        setIndex={setIndex}
        time={time}
        setTime={setTime}
      />
      {blog.length != 0 ? <ContentView data={blog} /> : <NonBlogPage />}
    </div>
  )
}

export default HomePage
