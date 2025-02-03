import { http, HttpResponse } from "msw"

export const alarm = [
  http.get(`https://user/alarm`, ({ request }) => {
    const authorization = request.headers.get("Authorization")

    if (authorization === "Bearer githubToken") {
      return HttpResponse.json({
        state: 200,
        result: [
          {
            id: "0bfac118-02f2-4e34-8f38-2b91b5c0b2a8",
            isRead: false,
            title: "gunhee0421님 포스트에 댓글이 달렸습니다.",
          },
          {
            id: "0bfac118-02f2-4e34-8f38-2b91b5c0b2a8",
            isRead: false,
            title: "gunhee0421님 포스트에 좋아요가 달렸습니다.",
          },
          {
            id: "0bfac118-02f2-4e34-8f38-2b91b5c0b2a8",
            isRead: false,
            title: "gunhee0421님 포스트에 댓글이 달렸습니다.",
          },
          {
            id: "0bfac118-02f2-4e34-8f38-2b91b5c0b2a8",
            isRead: true,
            title: "gunhee0421님 포스트에 댓글이 달렸습니다.",
          },
          {
            id: "0bfac118-02f2-4e34-8f38-2b91b5c0b2a8",
            isRead: true,
            title: "gunhee0421님 포스트에 댓글이 달렸습니다.",
          },
          {
            id: "0bfac118-02f2-4e34-8f38-2b91b5c0b2a8",
            isRead: true,
            title: "gunhee0421님 포스트에 댓글이 달렸습니다.",
          },
        ],
      })
    } else if (authorization === "Bearer googleToken") {
      return HttpResponse.json({
        state: 200,
        result: [
          {
            isRead: false,
            title: "건희 조 님 포스트에 댓글이 달렸습니다.",
          },
          {
            isRead: false,
            title: "건희 조 님 포스트에 좋아요가 달렸습니다.",
          },
          {
            isRead: false,
            title: "건희 조 님 포스트에 댓글이 달렸습니다.",
          },
          {
            isRead: true,
            title: "건희 조 님 포스트에 댓글이 달렸습니다.",
          },
          {
            isRead: true,
            title: "건희 조 님 포스트에 댓글이 달렸습니다.",
          },
          {
            isRead: true,
            title: "건희 조 님 포스트에 댓글이 달렸습니다.",
          },
        ],
      })
    } else if (authorization === "Bearer kakaoToken") {
      return HttpResponse.json({
        state: 200,
        result: [
          {
            isRead: false,
            title: "조건희 님 포스트에 댓글이 달렸습니다.",
          },
          {
            isRead: false,
            title: "조건희 님 포스트에 좋아요가 달렸습니다.",
          },
          {
            isRead: false,
            title: "조건희 님 포스트에 댓글이 달렸습니다.",
          },
          {
            isRead: true,
            title: "조건희 님 포스트에 댓글이 달렸습니다.",
          },
          {
            isRead: true,
            title: "조건희 님 포스트에 댓글이 달렸습니다.",
          },
          {
            isRead: true,
            title: "조건희 님 포스트에 댓글이 달렸습니다.",
          },
        ],
      })
    }
  }),
]
