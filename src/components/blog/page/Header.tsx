import { useBlogQuery } from "@/api/services/blog/query"
import { Title } from "../component/Tittle"
import { Info } from "../component/User"
import { BlogItem, InsertBlogItem } from "@/api/services/blog/model"
import { UUID } from "crypto"
import React from "react"
import { BlogModal } from "../component/blogModal"
import { List } from "lucide-react"

export const Header: React.FC<{
  id: UUID
  click: boolean
  setClick: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ id, click, setClick }) => {
  const { isLoading, data, isError } = useBlogQuery(id)

  return (
    <div className="px-2">
      <Title data={data?.result as InsertBlogItem} />
      <div className="flex justify-between">
        <Info data={data?.result as InsertBlogItem} />
        <div className="relative">
          <List
            size={"30px"}
            onClick={(e) => {
              e.stopPropagation()
              setClick(!click)
            }}
          />
          {click && <BlogModal blog={data?.result || null} />}
        </div>
      </div>
      <hr className="my-[15px]"></hr>
    </div>
  )
}
