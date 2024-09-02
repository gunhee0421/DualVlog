import { BlogItem, BlogsInfo } from "@/api/services/blog/model"
import { useBlogListInfoQuery } from "@/api/services/blog/query"
import { useRouter } from "next/navigation"
import React, { FC, useState, useEffect, FormEvent } from "react"

export const SearchModal: React.FC<{
  close: boolean
  onClose: () => void
}> = ({ close, onClose }) => {
  const router = useRouter()
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState("")
  const [filteredBlogs, setFilteredBlogs] = useState<BlogItem[]>([])

  useEffect(() => {
    setTimeout(() => setVisible(true), 0)
  }, [])

  const handleClose = () => {
    setVisible(false)
    setTimeout(() => {
      onClose()
    }, 500)
  }

  const blogList = useBlogListInfoQuery()

  const blogEqualText = (text: string) => {
    if (!blogList.data?.result) return []
    return blogList.data.result.filter((item) => item.title.includes(text))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value
    setValue(searchText)
    if (searchText.length > 0) setFilteredBlogs(blogEqualText(searchText))
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (value.length > 0) router.push(`blog/${value}`)
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-center transition-opacity duration-2000 ease-in-out font-pretendard ${
        visible
          ? "opacity-100 bg-gray-800 bg-opacity-50 backdrop-blur-sm"
          : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`bg-white p-6 rounded-lg h-fit shadow-lg my-12 w-[30%] transform transition-transform duration-2000 ease-in-out ${
          visible ? "translate-y-0" : "-translate-y-10"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={value}
            placeholder="포스트 검색..."
            className="w-full p-2 border border-gray-300 rounded"
            onChange={handleInputChange}
          />
        </form>
        {filteredBlogs.length > 0 && (
          <ul className="mt-4">
            {filteredBlogs.map((blog) => (
              <li
                key={blog.id}
                className="p-2 border-b border-gray-300 cursor-pointer"
                onClick={() => router.push(`blog/${blog.id}`)}
              >
                {blog.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
