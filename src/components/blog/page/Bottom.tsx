import { BlogItem, InsertBlogItem } from "@/api/services/blog/model"
import { CommentItem } from "../component/CommentItem"
import { useState } from "react"

export const Bottom: React.FC<{ blog: InsertBlogItem }> = ({ blog }) => {
  const [comment, setComment] = useState(false)
  const [heart, setHeart] = useState(false)

  return (
    <div className="px-7">
      <div className="flex">
        <div
          className={`flex items-center font-pretendard font-thin border-1 mt-10 w-fit py-2 pl-7 pr-3 mb-8 mr-3 ${
            !heart ? "border-gray-200" : "border-red-300 text-red-600"
          } `}
          onClick={() => setHeart(!heart)}
        >
          <span className="pr-2">좋아요</span>
          {!heart ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="gray"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="red"
              className="size-6"
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
          )}
        </div>
        <div
          className={`flex items-center font-pretendard font-thin border-1 mt-10 w-fit py-2 pl-7 pr-3 mb-8 mr-3 ${
            comment ? "text-sky-600 border-sky-600 " : ""
          }`}
          onClick={() => setComment(!comment)}
        >
          <span className="pr-2">댓글</span>
          {comment ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="skyblue"
              className="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="gray"
              className="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          )}
        </div>
      </div>
      {comment &&
        blog.comment.map((item) => (
          <CommentItem comment={item} visible={comment} />
        ))}
    </div>
  )
}
