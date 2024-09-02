import { Comment } from "@/api/services/blog/model"
import UserLogo from "@/components/user/component/UserLogo"
import { formatDate } from "@/hooks/functions/formatDate"

export const CommentItem: React.FC<{ comment: Comment; visible: boolean }> = ({
  comment,
  visible,
}) => {
  return (
    <div
      className={`my-3 mx-4 font-pretendard p-5 transition-opacity duration-200 ease-in-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {" "}
      <div className="font-semibold text-lg flex items-center">
        <UserLogo size={23} />
        <div className="ml-2 flex items-center">{comment.user.name}</div>
      </div>
      <div className="text-sm text-gray-500 pl-7">
        {formatDate(comment.createdAt)}
      </div>
      <div className="pl-7 pt-4">{comment.content}</div>
      <hr className="my-3 mt-10"></hr>
    </div>
  )
}
