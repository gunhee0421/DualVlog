import { useBlogQuery } from "@/api/services/blog/query"
import { Title } from "../component/Tittle"
import { Info } from "../component/User"
import { BlogItem, InsertBlogItem } from "@/api/services/blog/model"
import { UUID } from "crypto"
import React from "react"
import { BlogModal } from "../component/blogModal"

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
          <svg
            width="35"
            height="45"
            viewBox="0 0 96 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={(e) => {
              e.stopPropagation()
              setClick(!click)
            }}
          >
            <g clip-path="url(#clip0_123_2)">
              <path
                d="M12 52H20V44H12V52ZM12 68H20V60H12V68ZM12 36H20V28H12V36ZM28 52H84V44H28V52ZM28 68H84V60H28V68ZM28 28V36H84V28H28Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_123_2">
                <rect width="96" height="96" fill="white" />
              </clipPath>
            </defs>
          </svg>
          {click && <BlogModal blog={data?.result || null} />}
        </div>
      </div>
      <hr className="my-[15px]"></hr>
    </div>
  )
}
