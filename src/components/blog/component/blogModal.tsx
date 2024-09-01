import { InsertBlogItem } from "@/api/services/blog/model"
import { UUID } from "crypto"
import { useParams, useRouter } from "next/navigation"
import { toast } from "sonner"

export const BlogModal: React.FC<{ blog: InsertBlogItem | null }> = ({
  blog,
}) => {
  const router = useRouter()
  return (
    <div className="absolute top-full left-0 mt-1 w-[120px] bg-white p-2 rounded-md shadow-lg z-10">
      <button
        className="block w-full text-left px-2 py-1 text-blue-500 hover:bg-blue-50 hover:font-bold"
        onClick={() => {
          router.push(`write/${blog?.id}`)
        }}
      >
        수정하기
      </button>
      <button
        className="block w-full text-left px-2 py-1 text-red-500 hover:bg-red-50 hover:font-bold"
        onClick={() => {
          toast(`${blog?.title} 포스트 삭제 완료`)
          router.push("/home")
        }}
      >
        삭제하기
      </button>
    </div>
  )
}
