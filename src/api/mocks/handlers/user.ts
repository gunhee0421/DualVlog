import { http, HttpResponse } from "msw";

export const user = [
    http.get("https://user", ({ request, params, requestId }) => {
        const authorization = request.headers.get("Authorization");

        if (authorization === "Bearer githubToken") {
            return HttpResponse.json({
                state: 200,
                result: {
                    id: "af5574dc-0934-4b25-bbd8-ecb4f48c07c3",
                    email: "rjsmgl771@github.com",
                    name: "gunhee0421",
                    userlogo: null,
                    introduce: "githubgithubgithubgithubgithub",
                    stack: ["next.js", "springboot", "react"],
                    blog: [
                        {
                            id: 1,
                            img: "/images/home/toss.png",
                            title: "토스 안드로이드 개발자 합격 후기",
                            content:
                                "꽁꽁 얼어붙은 취업시장을 뚫고 아크플레이스로 걸어갑니다.",
                            date: "2024-08-09T12:34:56.789Z",
                            logo: "/images/home/logo.png",
                            name: "이현우",
                            like: 80,
                            comment: 7,
                        },
                    ],
                },
            });
        } else if (authorization === "Bearer googleToken") {
            return HttpResponse.json({
                state: 200,
                result: {
                    id: "af5574dc-0934-4b25-bbd8-ecb4f48c07c3",
                    email: "rjsmgl771@google.com",
                    name: "건희 조",
                    userlogo: "/images/home/logo.png",
                    introduce: "googlefugooglefugooglefugooglefu",
                    stack: ["next.js", "springboot", "react"],
                    blog: [],
                },
            });
        } else if (authorization === "Bearer kakaoToken") {
            return HttpResponse.json({
                state: 200,
                result: {
                    id: "af5574dc-0934-4b25-bbd8-ecb4f48c07c3",
                    email: "rjsmgl771@kakao.com",
                    name: "조건희",
                    userlogo: "/images/home/logo.png",
                    introduce: "kakaosekakaosekakaosekakaose",
                    stack: ["vue.js", "spring", "python"],
                    blog: [
                        {
                            id: 3,
                            img: "/images/home/woman.png",
                            title: "웹 개발 인턴을 마치며,,,,",
                            content:
                                "개발 인턴을 이제 갓 마친, 대학생 프론트엔드\n개발자 오소현, Garden입니다! 올해 1월부터 6\n월까지 스타트업 웹 개발 인턴 생활의 회고…",
                            date: "2024-08-07T12:34:56.789Z",
                            logo: "/images/home/logo.png",
                            name: "osohyun0224",
                            like: 33,
                            comment: 0,
                        },
                    ],
                },
            });
        }
    }),
];
