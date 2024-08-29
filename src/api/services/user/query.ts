import { QueryClient, useQuery, useQueryClient, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import { UserInfo } from "./model";
import { userService } from "./service";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export const userQueryOptions = {
    userInfo: (client: QueryClient, token: any) => ({
        queryKey: ['userInfo'],
        queryFn: () => userService.userInfo(client, token),
    }),
}

export const useUserInfoQuery = (options = {}) : UseQueryResult<UserInfo, Error> => {
    const queryClient = useQueryClient()
    const token = useSelector((state: RootState) => state.login.accessToken);


    return useQuery<UserInfo, Error>({
        ...userQueryOptions.userInfo(queryClient, token),
        enabled: !!token
    })
}