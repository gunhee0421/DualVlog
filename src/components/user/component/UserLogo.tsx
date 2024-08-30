import { UserResponse } from "@/lib/Lib"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"

const UserLogo = () => {
  const { data } = useQuery<UserResponse>({
    queryKey: ["userInfo"],
  })

  if (!data?.result.userlogo) {
    return (
      <Image
        src={"/images/user/userlogo.png"}
        width={100}
        height={100}
        alt="error"
      />
    )
  }

  return (
    <Image
      src={`${data?.result?.userlogo}`}
      width={134}
      height={134}
      alt="error"
    />
  )
}
export default UserLogo
