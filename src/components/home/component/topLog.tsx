import { useRouter } from "next/navigation"

const TopLog = () => {
  const router = useRouter()

  return (
    <h1
      className="text-3xl tracking-tighter font-extrabold font-pretendard cursor-pointer"
      onClick={() => router.push("/home")}
    >
      Dual Vlog
    </h1>
  )
}
export default TopLog
