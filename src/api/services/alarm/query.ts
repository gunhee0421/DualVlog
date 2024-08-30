import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query"
import { alarmService } from "./service"
import { alarmInfo, alarmInfoData } from "./model"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"

export const alarmQueryOptions = {
  alarmInfo: (client: QueryClient, token: any) => ({
    queryKey: ["alarmInfo"],
    queryFn: () => alarmService.alarmInfo(client, token),
  }),
}

export const useAlarmInfoQuery = () => {
  const queryClient = useQueryClient()
  const token = useSelector((state: RootState) => state.login.accessToken)

  return useQuery<alarmInfo<alarmInfoData[]>>({
    ...alarmQueryOptions.alarmInfo(queryClient, token),
  })
}
