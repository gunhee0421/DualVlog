import { useUserInfoQuery } from "@/api/services/user/query"
import { AlarmModal } from "@/components/alarm/AlarmModal"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

const UserTopNavigation = () => {
  const [alarm, setAlarm] = useState(false)
  const router = useRouter()

  const userInfo = useUserInfoQuery()

  return (
    <div className="flex w-full justify-end p-5">
      <div onClick={() => setAlarm(true)}>
        <svg
          width="55"
          height="50"
          viewBox="0 0 44 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 27.0002V25.0002H14V18.0002C14 16.6172 14.417 15.3882 15.25 14.3122C16.083 13.2372 17.167 12.5332 18.5 12.2002V11.5002C18.5 11.0832 18.646 10.7302 18.938 10.4372C19.0758 10.2958 19.2411 10.184 19.4238 10.1089C19.6064 10.0337 19.8025 9.99673 20 10.0002C20.417 10.0002 20.77 10.1462 21.063 10.4382C21.354 10.7292 21.5 11.0832 21.5 11.5002V12.2002C22.833 12.5332 23.917 13.2372 24.75 14.3122C25.583 15.3882 26 16.6172 26 18.0002V25.0002H28V27.0002H12ZM20 30.0002C19.45 30.0002 18.98 29.8042 18.588 29.4132C18.3986 29.2304 18.2488 29.0107 18.1476 28.7676C18.0465 28.5246 17.9962 28.2634 18 28.0002H22C22 28.5502 21.804 29.0202 21.412 29.4132C21.2292 29.6023 21.0096 29.7519 20.7668 29.8529C20.5239 29.9538 20.263 30.004 20 30.0002ZM16 25.0002H24V18.0002C24 16.9002 23.608 15.9582 22.825 15.1752C22.042 14.3922 21.1 14.0002 20 14.0002C18.9 14.0002 17.958 14.3922 17.175 15.1752C16.392 15.9582 16 16.9002 16 18.0002V25.0002Z"
            fill="#212529"
          />
        </svg>
      </div>
      <div
        className="flex justify-center items-center"
        onClick={() => router.push(`${userInfo.data?.result.id}/edit`)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
          />
        </svg>
      </div>
      {alarm && <AlarmModal onClose={() => setAlarm(false)} />}
    </div>
  )
}

export default UserTopNavigation
