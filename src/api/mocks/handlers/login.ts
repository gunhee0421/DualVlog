import { code } from "@nextui-org/theme"
import { http, HttpResponse } from "msw"

export const login = [
  http.get(`https://login/github`, () => {
    return HttpResponse.json({
      state: 200,
      result: {
        accessToken: "githubToken",
      },
    })
  }),
  http.get(`https://login/kakao`, () => {
    return HttpResponse.json({
      code: 200,
      result: {
        accessToken: "kakaoToken",
      },
    })
  }),
  http.get(`https://login/google`, () => {
    return HttpResponse.json({
      code: 200,
      result: {
        accessToken: "googleToken",
      },
    })
  }),
]
