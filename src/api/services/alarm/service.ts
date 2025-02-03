import { QueryClient } from "@tanstack/react-query"
import axios from "axios"

export const alarmService = {
  async alarmInfo(client: QueryClient, token: any) {
    const response = await axios.get("https://user/alarm", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.status !== 200) {
      throw new Error("fetch error")
    }
    return await response.data
  },
}
