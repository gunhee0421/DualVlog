import { QueryClient, useQuery, useQueryClient, UseQueryResult } from "@tanstack/react-query";
import { blogService } from "./service";
import { BlogItem, BlogsInfo, InsertBlogItem } from "./model";

export const blogQueryOptions = {
    blogListInfo: (client: QueryClient) => ({
        queryKey: ['blogListInfo'],
        queryFn: () => blogService.blogInfo(client),
    }),
    blogInfo: (client: QueryClient) => ({
        queryKey: ['blogInfo'],
        queryFn: () => blogService.getBlog(client)
    }),
}

export const useBlogListInfoQuery = () : UseQueryResult<BlogsInfo<BlogItem>, Error> => {
    const queryClient = useQueryClient()

    return useQuery<BlogsInfo<BlogItem>, Error>({
        ...blogQueryOptions.blogListInfo(queryClient)
    })
}
export const useBlogQuery = () : UseQueryResult<BlogsInfo<InsertBlogItem>, Error> => {
    const queryClient = useQueryClient()

    return useQuery<BlogsInfo<InsertBlogItem>, Error>({
        ...blogQueryOptions.blogInfo(queryClient)
    })
}