import Link from "next/link"
import { useScroll } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { stat } from "fs"
import { log } from "console"
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query"
import React, { useEffect, useState } from "react"
import { logout } from "@/redux/slice/loginSlice"
import { useUserInfoQuery } from "@/api/services/user/query"
import TopLog from "./topLog"
import Login from "./Login"
import { SearchModal } from "@/components/search/components/SearchModal"
import { AlarmModal } from "@/components/alarm/AlarmModal"
import { useRouter } from "next/navigation"
import { Bell, Search } from "lucide-react"
import { useAlarmInfoQuery } from "@/api/services/alarm/query"

const TopNavigation = () => {
  const token = useSelector((state: RootState) => state.login.accessToken)
  const dispatch = useDispatch()
  const queryClient = useQueryClient()

  const [search, setSearch] = useState(false)
  const [alarm, setAlarm] = useState(false)

  const { isLoading, data, isError } = useUserInfoQuery()
  const alarmData = useAlarmInfoQuery()

  useEffect(() => {
    if (!token) {
      queryClient.resetQueries({
        queryKey: ["userInfo"],
        exact: true,
      })
      queryClient.resetQueries({
        queryKey: ["alarmInfo"],
        exact: true,
      })
    }
  }, [token, queryClient])

  return (
    <div className="flex flex-row justify-between items-center py-2">
      <TopLog />
      <div className="flex flex-row h-full">
        <button
          className="ml-[10px]"
          onClick={(e) => {
            e.stopPropagation()
            setAlarm(!alarm)
          }}
        >
          <Bell size={25} />
        </button>
        <button
          className="ml-[10px]"
          onClick={(e) => {
            e.stopPropagation()
            setSearch(!search)
          }}
        >
          <Search size={25} />
        </button>
        {data?.state != 200 ? (
          <Link href="/login">
            <Login />
          </Link>
        ) : (
          <div className="flex flex-row justify-center items-center">
            <Link
              href={`/user/${data?.result?.id}`}
              className="font-pretendard px-2"
            >
              {data?.result?.name}님
            </Link>
            <button
              onClick={() => dispatch(logout())}
              className="py-1 px-3 rounded-md font-bold text-gray-600 hover:text-sky-400"
            >
              로그아웃
            </button>
          </div>
        )}
        {search && (
          <SearchModal close={search} onClose={() => setSearch(false)} />
        )}
        {alarm && <AlarmModal onClose={() => setAlarm(false)} />}
      </div>
    </div>
  )
}
export default TopNavigation
