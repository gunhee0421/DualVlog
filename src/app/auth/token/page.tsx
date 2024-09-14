"use client"

import { setToken } from "@/redux/slice/loginSlice"
import { RootState } from "@/redux/store"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "sonner"

const Auth = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const parm = useSearchParams()

  const accessToken = useSelector((state: RootState) => state.login.accessToken)
  const refreshToken = useSelector(
    (state: RootState) => state.login.refreshToken
  )

  useEffect(() => {
    if (accessToken && refreshToken) {
      router.push("/home")
    } else {
      const AccessTokenUrl = parm.get("accessToken")
      const RefreshTokenUrl = parm.get("refreshToken")

      if (AccessTokenUrl && RefreshTokenUrl) {
        dispatch(
          setToken({
            accessToken: AccessTokenUrl,
            refreshToken: RefreshTokenUrl
          })
        )
        router.push("/home")
      }
    }
  }, [accessToken, refreshToken, dispatch, router, parm])
}

export default Auth
