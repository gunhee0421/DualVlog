import { UUID } from "crypto"

export interface alarmInfo<T> {
  state: number
  result: T | null
}
export interface alarmInfoData {
  id: UUID
  isRead: boolean
  title: string
}
