import {
  MutationOptions,
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from "@tanstack/react-query"
import { blogService } from "./service"
import { BlogItem, BlogsInfo, InsertBlogItem } from "./model"
import { UUID } from "crypto"

export const blogQueryOptions = {
  blogListInfo: (client: QueryClient) => ({
    queryKey: ["blogListInfo"],
    queryFn: () => blogService.blogInfo(client),
  }),
  blogInfo: (client: QueryClient, id: string) => ({
    queryKey: ["blogInfo", id],
    queryFn: () => blogService.getBlog(client, id),
  }),
  blogAdd: (client: QueryClient) => ({
    mutationFn: (dto: InsertBlogItem) => blogService.addBlog(client, dto),
  }),
}

export const useBlogListInfoQuery = (): UseQueryResult<
  BlogsInfo<BlogItem[]>,
  Error
> => {
  const queryClient = useQueryClient()

  return useQuery<BlogsInfo<BlogItem[]>, Error>({
    ...blogQueryOptions.blogListInfo(queryClient),
  })
}
export const useBlogQuery = (
  id: UUID,
): UseQueryResult<BlogsInfo<InsertBlogItem>, Error> => {
  const queryClient = useQueryClient()

  return useQuery<BlogsInfo<InsertBlogItem>, Error>({
    ...blogQueryOptions.blogInfo(queryClient, id),
  })
}
export const useAddBlogMutation = (
  options: MutationOptions<any, Error, InsertBlogItem> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...blogQueryOptions.blogAdd(queryClient),
    ...options,
  })
}
