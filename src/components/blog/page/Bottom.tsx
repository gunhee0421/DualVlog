import { BlogItem, InsertBlogItem } from "@/api/services/blog/model"
import { CommentItem } from "../component/CommentItem"
import { useState } from "react"
import { Heart, MessageSquareMore } from "lucide-react"

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
          {!heart ? <Heart /> : <Heart color="red" />}
        </div>
        <div
          className={`flex items-center font-pretendard font-thin border-1 mt-10 w-fit py-2 pl-7 pr-3 mb-8 mr-3 ${
            comment ? "text-sky-600 border-sky-600 " : ""
          }`}
          onClick={() => setComment(!comment)}
        >
          <span className="pr-2">댓글</span>
          {comment ? <MessageSquareMore /> : <MessageSquareMore color="gray" />}
        </div>
      </div>
      {comment &&
        blog.comment.map((item) => (
          <CommentItem comment={item} visible={comment} />
        ))}
    </div>
  )
}
