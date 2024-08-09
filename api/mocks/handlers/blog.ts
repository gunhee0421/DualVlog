import { code } from "@nextui-org/theme";
import { http, HttpResponse } from "msw";

export const blog = [
  http.get(`https://blog/info`, () => {
    return HttpResponse.json({
      code: 200,
      result: [
          {
          id: 1,
          img:"/images/home/toss.png",
          title: "토스 안드로이드 개발자 합격 후기",
          content: "꽁꽁 얼어붙은 취업시장을 뚫고 아크플레이스로 걸어갑니다.",
          date: "2024-07-06",
          logo: "/images/home/logo.png",
          name: "이현우",
          like: 80,
          comment: 7
        },
        {
          id: 2,
          img:"/images/home/human.png",
          title: "비전공자 백엔드 취업 성공!",
          content: "경영학부 졸업생도 취업할 수 있습니다! 개발 시작부터 취업까지 모든 것 공개!",
          date: 20240705,
          logo: "/images/home/logo.png",
          name: "전반숙",
          like: 152,
          comment: 39
        },
        {
          id: 3,
          img:"/images/home/woman.png",
          title: "웹 개발 인턴을 마치며,,,,",
          content: "개발 인턴을 이제 갓 마친, 대학생 프론트엔드\n개발자 오소현, Garden입니다! 올해 1월부터 6\n월까지 스타트업 웹 개발 인턴 생활의 회고…",
          date: 20240729,
          logo: "/images/home/logo.png",
          name: "osohyun0224",
          like: 33,
          comment: 0
        },
        {
          id: 4,
          img:"/images/home/toss.png",
          title: "토스 안드로이드 개발자 합격 후기",
          content: "꽁꽁 얼어붙은 취업시장을 뚫고 아크플레이스로 걸어갑니다.",
          date: "2024-07-06",
          logo: "/images/home/logo.png",
          name: "이현우",
          like: 80,
          comment: 7
        },
        {
          id: 5,
          img:"/images/home/human.png",
          title: "비전공자 백엔드 취업 성공!",
          content: "경영학부 졸업생도 취업할 수 있습니다! 개발 시작부터 취업까지 모든 것 공개!",
          date: 20240705,
          logo: "/images/home/logo.png",
          name: "전반숙",
          like: 152,
          comment: 39
        },
        {
          id:6,
          img:"/images/home/woman.png",
          title: "웹 개발 인턴을 마치며,,,,",
          content: "개발 인턴을 이제 갓 마친, 대학생 프론트엔드\n개발자 오소현, Garden입니다! 올해 1월부터 6\n월까지 스타트업 웹 개발 인턴 생활의 회고…",
          date: 20240729,
          logo: "/images/home/logo.png",
          name: "osohyun0224",
          like: 33,
          comment: 0
        },
        {
          id: 7,
          img:"/images/home/toss.png",
          title: "토스 안드로이드 개발자 합격 후기",
          content: "꽁꽁 얼어붙은 취업시장을 뚫고 아크플레이스로 걸어갑니다.",
          date: "2024-07-06",
          logo: "/images/home/logo.png",
          name: "이현우",
          like: 80,
          comment: 7
        },
        {
          id: 8,
          img:"/images/home/human.png",
          title: "비전공자 백엔드 취업 성공!",
          content: "경영학부 졸업생도 취업할 수 있습니다! 개발 시작부터 취업까지 모든 것 공개!",
          date: 20240705,
          logo: "/images/home/logo.png",
          name: "전반숙",
          like: 152,
          comment: 39
        },
        {
          id: 9,
          img:"/images/home/woman.png",
          title: "웹 개발 인턴을 마치며,,,,",
          content: "개발 인턴을 이제 갓 마친, 대학생 프론트엔드\n개발자 오소현, Garden입니다! 올해 1월부터 6\n월까지 스타트업 웹 개발 인턴 생활의 회고…",
          date: 20240729,
          logo: "/images/home/logo.png",
          name: "osohyun0224",
          like: 33,
          comment: 0
        },
        {
          id: 10,
          img:"/images/home/toss.png",
          title: "토스 안드로이드 개발자 합격 후기",
          content: "꽁꽁 얼어붙은 취업시장을 뚫고 아크플레이스로 걸어갑니다.",
          date: "2024-07-06",
          logo: "/images/home/logo.png",
          name: "이현우",
          like: 80,
          comment: 7
        },
        {
          id: 11,
          img:"/images/home/toss.png",
          title: "토스 안드로이드 개발자 합격 후기",
          content: "꽁꽁 얼어붙은 취업시장을 뚫고 아크플레이스로 걸어갑니다.",
          date: "2024-07-06",
          logo: "/images/home/logo.png",
          name: "이현우",
          like: 80,
          comment: 7
        },
        {
          id: 12,
          img:"/images/home/human.png",
          title: "비전공자 백엔드 취업 성공!",
          content: "경영학부 졸업생도 취업할 수 있습니다! 개발 시작부터 취업까지 모든 것 공개!",
          date: 20240705,
          logo: "/images/home/logo.png",
          name: "전반숙",
          like: 152,
          comment: 39
        }
      ]
    })
  })
]