import { UserInfo } from "@/api/services/user/model"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"

const UserLogo: React.FC<{ size: number }> = ({ size }) => {
  const { data } = useQuery<UserInfo>({
    queryKey: ["userInfo"],
  })

  if (!data?.result.userlogo) {
    return (
      <Image
        src={"/images/user/userlogo.png"}
        width={size}
        height={size}
        alt="error"
      />
    )
  }

  return (
    <Image
      src={`${data?.result?.userlogo}`}
      width={size}
      height={size}
      alt="error"
    />
  )
}
export default UserLogo
