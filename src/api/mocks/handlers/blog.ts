import { code } from "@nextui-org/theme";
import { http, HttpResponse } from "msw";

export const blog = [
    http.get(`https://blog/info`, () => {
        return HttpResponse.json({
            state: 200,
            result: [
                {
                    id: "5f50b060-6a8c-41e8-8896-6d8c68e59e48",
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
                {
                    id: "0bfac118-02f2-4e34-8f38-2b91b5c0b2a8",
                    img: "/images/home/human.png",
                    title: "비전공자 백엔드 취업 성공!",
                    content:
                        "경영학부 졸업생도 취업할 수 있습니다! 개발 시작부터 취업까지 모든 것 공개!",
                    date: "2024-08-08T12:34:56.789Z",
                    logo: "/images/home/logo.png",
                    name: "전반숙",
                    like: 152,
                    comment: 39,
                },
                {
                    id: "cf74185e-8a8a-47c1-9f4e-bd1d7b5b0f5f",
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
                {
                    id: "dbe750ba-5e3b-45de-b1a4-61b2be1bb8b1",
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
                {
                    id: "119ff99b-33d3-44e5-979e-2835940d0d3e",
                    img: "/images/home/human.png",
                    title: "비전공자 백엔드 취업 성공!",
                    content:
                        "경영학부 졸업생도 취업할 수 있습니다! 개발 시작부터 취업까지 모든 것 공개!",
                    date: "2024-08-08T12:34:56.789",
                    logo: "/images/home/logo.png",
                    name: "전반숙",
                    like: 152,
                    comment: 39,
                },
                {
                    id: "f781aa35-19d5-47eb-97b3-9b4d3cb8d03a",
                    img: "/images/home/woman.png",
                    title: "웹 개발 인턴을 마치며,,,,",
                    content:
                        "개발 인턴을 이제 갓 마친, 대학생 프론트엔드\n개발자 오소현, Garden입니다! 올해 1월부터 6\n월까지 스타트업 웹 개발 인턴 생활의 회고…",
                    date: "2024-08-10T12:34:56.789Z",
                    logo: "/images/home/logo.png",
                    name: "osohyun0224",
                    like: 33,
                    comment: 0,
                },
                {
                    id: "90f4ae73-57a2-4d11-b9ad-c7e43863f825",
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
                {
                    id: "74a07c94-b41f-4c45-9d79-1675047a4847",
                    img: "/images/home/human.png",
                    title: "비전공자 백엔드 취업 성공!",
                    content:
                        "경영학부 졸업생도 취업할 수 있습니다! 개발 시작부터 취업까지 모든 것 공개!",
                    date: "2024-08-09T12:34:56.789Z",
                    logo: "/images/home/logo.png",
                    name: "전반숙",
                    like: 152,
                    comment: 21,
                },
                {
                    id: "cb4a7c12-36f3-4c75-8b6d-88271c71e26b",
                    img: "/images/home/woman.png",
                    title: "웹 개발 인턴을 마치며,,,,",
                    content:
                        "개발 인턴을 이제 갓 마친, 대학생 프론트엔드\n개발자 오소현, Garden입니다! 올해 1월부터 6\n월까지 스타트업 웹 개발 인턴 생활의 회고…",
                    date: "2024-07-09T12:34:56.789Z",
                    logo: "/images/home/logo.png",
                    name: "osohyun0224",
                    like: 54,
                    comment: 0,
                },
                {
                    id: "9a9022a6-9bb3-4fc6-b146-2e99a1fa006b",
                    img: "/images/home/toss.png",
                    title: "토스 안드로이드 개발자 합격 후기",
                    content:
                        "꽁꽁 얼어붙은 취업시장을 뚫고 아크플레이스로 걸어갑니다.",
                    date: "2024-08-09T12:34:56.789Z",
                    logo: "/images/home/logo.png",
                    name: "이현우",
                    like: 11,
                    comment: 7,
                },
                {
                    id: "cf8f7461-1445-4ac3-907b-58d61ef8d06f",
                    img: "/images/home/toss.png",
                    title: "토스 안드로이드 개발자 합격 후기",
                    content:
                        "꽁꽁 얼어붙은 취업시장을 뚫고 아크플레이스로 걸어갑니다.",
                    date: "2024-08-19T12:34:56.789Z",
                    logo: "/images/home/logo.png",
                    name: "이현우",
                    like: 80,
                    comment: 6,
                },
                {
                    id: "84adf7f3-1f64-4d78-9ed7-55f29a01a04e",
                    img: "/images/home/human.png",
                    title: "비전공자 백엔드 취업 성공!",
                    content:
                        "경영학부 졸업생도 취업할 수 있습니다! 개발 시작부터 취업까지 모든 것 공개!",
                    date: "2024-08-09T12:34:56.789Z",
                    logo: "/images/home/logo.png",
                    name: "전반숙",
                    like: 152,
                    comment: 39,
                },
            ],
        });
    }),
];
