import { UUID } from "crypto"
import { BlogItem } from "../blog/model"

export interface UserItem {
  id: string
  email: string
  name: string
  userlogo: string
  introduce: string
  stack: Array<string> | []
  blog: BlogItem[] | null
}
export interface UserInfo {
  state: number
  result: UserItem
}
