"use client"

import { useMutation, UseMutationResult, useQuery } from "@tanstack/react-query"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
import { setToken } from "@/redux/slice/loginSlice"
import { LoginButtonProps } from "@/api/services/login/model"
import { loginService } from "@/api/services/login/service"
import Link from "next/link"

const LoginButton: React.FC<LoginButtonProps> = ({
  service,
  imageUrl,
  altText,
  bgColor
}) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { mutate, isError, error, data } = useMutation({
    mutationFn: () => loginService.login(service),
    onSuccess: (data) => {
      dispatch(setToken(data?.result?.accessToken))
      router.push("/")
    },
    onError: (error) => {
      alert("Login Fail")
    }
  })

  return (
    <Link
      href={`${process.env.NEXT_PUBLIC_GITHUB}?redirect=${process.env.NEXT_PUBLIC_DOMAIN}`}
    >
      <div
        className={`flex flex-row w-fit font-pretendard px-16 py-3 rounded-3xl justify-center items-center ${bgColor} my-2 transform hover:scale-105 transition duration-300 cursor-pointer hover:shadow-md`}
      >
        <Image src={imageUrl} width={40} height={55} alt={altText} />
        <p className="text-black font-bold text-2xl">continue with {service}</p>
      </div>
    </Link>
  )
}

export default LoginButton
