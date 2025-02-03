import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query"
import { alarmService } from "./service"
import { alarmInfo, alarmInfoData } from "./model"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { throwDeprecation } from "process"
import { isErrored } from "stream"

export const alarmQueryOptions = {
  alarmInfo: (client: QueryClient, token: any) => ({
    queryKey: ["alarmInfo"],
    queryFn: () => alarmService.alarmInfo(client, token),
  }),
}

export const useAlarmInfoQuery = () => {
  const queryClient = useQueryClient()
  const token = useSelector((state: RootState) => state.login.accessToken)

  if (token == null) {
    return { data: null, error: new Error("Token is required"), isLoading: false, isError: true }
  }

  return useQuery<alarmInfo<alarmInfoData[]>>({
    ...alarmQueryOptions.alarmInfo(queryClient, token),
  })
}
