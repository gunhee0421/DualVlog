import { UserInfo } from "@/api/services/user/model"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

const UserMiddle = () => {
  const router = useRouter()
  const { data } = useQuery<UserInfo>({
    queryKey: ["userInfo"],
  })

  return (
    <div className="flex flex-row justify-between">
      <div className="font-serif text-[18px] flex-wrap">
        {data?.result.introduce}
      </div>
      <div className="flex flex-col font-pretendard font-semibold items-end text-[20px]">
        <span>0 팔로워 0 팔로잉</span>
        <button
          className="w-[100px] my-2 items-end rounded-md py-1 font-bold font-pretendard px-5 border-solid border-[2px] border-[#7FC9FF] text-[#7FC9FF]"
          onClick={() => router.push(`${data?.result.id}/write`)}
        >
          글쓰기
        </button>
      </div>
    </div>
  )
}

export default UserMiddle
