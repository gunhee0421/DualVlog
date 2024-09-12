import { UUID } from "crypto"
import { UserInfo, UserItem } from "../user/model"

export interface BlogItem {
  id: UUID
  img: string
  title: string
  content: string
  date: string
  logo: string
  name: string
  like: number
  comment: number
}
export interface BlogsInfo<T> {
  state: number
  result: T | null
}
export interface InsertBlogItem {
  id: UUID
  title: string
  content: (Paragraph | CodeBlock)[]
  createdAt: string
  comment: Comment[] | []
  like: number
  logo: string
  name: string
}
export interface Comment {
  id: UUID
  user: UserItem
  content: string
  createdAt: string
}
export interface Paragraph {
  type: string
  content: string
}
export interface CodeBlock {
  type: string
  language: string
  link: [number, number[]][]
  content: {
    code: string
    text: string
  }
}
export enum TimeTable {
  day = 1,
  week = 7,
  month = 30,
  year = 365
}

export function isParagraph(
  content: Paragraph | CodeBlock
): content is Paragraph {
  return content.type === "paragraph"
}

export function isCodeBlock(
  content: Paragraph | CodeBlock
): content is CodeBlock {
  return content.type === "codeblock"
}
