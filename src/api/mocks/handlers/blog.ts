import { BlogItem } from "@/api/services/blog/model"
import { code } from "@nextui-org/theme"
import { http, HttpResponse } from "msw"
import { Content } from "next/font/google"

const blogList = [
  {
    id: "5f50b060-6a8c-41e8-8896-6d8c68e59e48",
    img: "/images/home/toss.png",
    title: "토스 안드로이드 개발자 합격 후기",
    content: "꽁꽁 얼어붙은 취업시장을 뚫고 아크플레이스로 걸어갑니다.",
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
    content: "꽁꽁 얼어붙은 취업시장을 뚫고 아크플레이스로 걸어갑니다.",
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
    content: "꽁꽁 얼어붙은 취업시장을 뚫고 아크플레이스로 걸어갑니다.",
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
    content: "꽁꽁 얼어붙은 취업시장을 뚫고 아크플레이스로 걸어갑니다.",
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
    content: "꽁꽁 얼어붙은 취업시장을 뚫고 아크플레이스로 걸어갑니다.",
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
]
const blogs = [
  {
    id: "0bfac118-02f2-4e34-8f38-2b91b5c0b2a8",
    title: "비전공자 백엔드 취업 성공!",
    createdAt: "2024-08-08T12:34:56.789Z",
    logo: "/images/home/logo.png",
    name: "전반숙",
    like: 152,
    comment: 39,
    content: [
      {
        type: "paragraph",
        content:
          "This is **bold text**, and this is *italic text*. You can also create [links](https://example.com).\n- Item 1\n- Item 2\n- Subitem 2.1\n- Subitem 2.2\n > This is a blockquote. It's great for highlighting quotes or important information.",
      },
      {
        type: "codeblock",
        language: "JAVASCRPIT",
        link: [
          [1, [1, 2, 3, 4]],
          [5, [15, 16, 17, 18, 19]],
        ],
        content: {
          code: "function greet(name) {\n  const greeting = `Hello, ${name}!`;\n  console.log(greeting);\n}\n\nconst names = ['Alice', 'Bob', 'Charlie','Alice', 'Bob', 'Charlie','Alice', 'Bob', 'Charlie'];\nnames.forEach((name) => {\n  greet(name);\n});\nconsole.log('Greeting complete!');function greet(name) {\n  const greeting = `Hello, ${name}!`;\n  console.log(greeting);\n}\n\nconst names = ['Alice', 'Bob', 'Charlie','Alice', 'Bob', 'Charlie','Alice', 'Bob', 'Charlie'];\nnames.forEach((name) => {\n  greet(name);\n});\nconsole.log('Greeting complete!');",
          text: "이 코드는 이름 목록을 순회하며 각 이름에 대해 인사말을 출력합니다.\n'greet' 함수는 이름을 받아서 'Hello, {name}!' 형식의 인사말을 생성합니다.\n'forEach'를 사용하여 'names' 배열의 각 이름에 대해 'greet' 함수를 호출합니다.\n모든 인사말을 출력한 후 'Greeting complete!' 메시지를 출력합니다.\n이 코드는 콘솔에 각 이름에 대한 인사말과 완료 메시지를 표시​.",
        },
      },
      {
        type: "paragraph",
        content:
          "# Markdown Example\nThis is **bold text** and *italic text*.\nHere is a [link](https://example.com) to a website.",
      },
      {
        type: "paragraph",
        content:
          "This is **bold text**, and this is *italic text*. You can also create [links](https://example.com).\n- Item 1\n- Item 2\n- Subitem 2.1\n- Subitem 2.2\n > This is a blockquote. It's great for highlighting quotes or important information.",
      },
    ],
  },
  {
    id: "5f50b060-6a8c-41e8-8896-6d8c68e59e48",
    title: "토스 안드로이드 개발자 합격 후기",
    createdAt: "2024-08-09T12:34:56.789Z",
    logo: "/images/home/logo.png",
    name: "이현우",
    like: 80,
    comment: 7,
    content: [
      {
        type: "paragraph",
        content:
          "This is **bold text**, and this is *italic text*. You can also create [links](https://example.com).\n- Item 1\n- Item 2\n- Subitem 2.1\n- Subitem 2.2\n > This is a blockquote. It's great for highlighting quotes or important information.",
      },
      {
        type: "codeblock",
        language: "JAVASCRPIT",
        link: [
          [1, [1, 2, 3, 4]],
          [5, [15, 16, 17, 18, 19]],
        ],
        content: {
          code: "function greet(name) {\n  const greeting = `Hello, ${name}!`;\n  console.log(greeting);\n}\n\nconst names = ['Alice', 'Bob', 'Charlie','Alice', 'Bob', 'Charlie','Alice', 'Bob', 'Charlie'];\nnames.forEach((name) => {\n  greet(name);\n});\nconsole.log('Greeting complete!');function greet(name) {\n  const greeting = `Hello, ${name}!`;\n  console.log(greeting);\n}\n\nconst names = ['Alice', 'Bob', 'Charlie','Alice', 'Bob', 'Charlie','Alice', 'Bob', 'Charlie'];\nnames.forEach((name) => {\n  greet(name);\n});\nconsole.log('Greeting complete!');",
          text: "이 코드는 이름 목록을 순회하며 각 이름에 대해 인사말을 출력합니다.\n'greet' 함수는 이름을 받아서 'Hello, {name}!' 형식의 인사말을 생성합니다.\n'forEach'를 사용하여 'names' 배열의 각 이름에 대해 'greet' 함수를 호출합니다.\n모든 인사말을 출력한 후 'Greeting complete!' 메시지를 출력합니다.\n이 코드는 콘솔에 각 이름에 대한 인사말과 완료 메시지를 표시​.",
        },
      },
      {
        type: "paragraph",
        content:
          "# Markdown Example\nThis is **bold text** and *italic text*.\nHere is a [link](https://example.com) to a website.",
      },
      {
        type: "paragraph",
        content:
          "This is **bold text**, and this is *italic text*. You can also create [links](https://example.com).\n- Item 1\n- Item 2\n- Subitem 2.1\n- Subitem 2.2\n > This is a blockquote. It's great for highlighting quotes or important information.",
      },
    ],
  },
]

export const blog = [
  http.get(`https://blogs`, () => {
    return HttpResponse.json({
      state: 200,
      result: blogList,
    })
  }),
  http.get(`https://blog`, ({ request }) => {
    const url = new URL(request.url)
    const blogId = url.searchParams.get("blogId")

    return HttpResponse.json({
      state: 200,
      result: blogs.find((blog) => blog.id == blogId),
    })
  }),
  http.post(`https://blog`, async ({ request }) => {
    try {
      const requestBody = request.body
      let newBlog

      if (requestBody) {
        const reader = requestBody.getReader()
        const decoder = new TextDecoder()
        let result = ""

        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          result += decoder.decode(value)
        }

        newBlog = JSON.parse(result)
      } else {
        throw new Error("body is null")
      }

      blogs.push(newBlog)

      return HttpResponse.json({
        state: 200,
        result: null,
      })
    } catch (error) {
      return HttpResponse.json({
        state: 500,
        result: null,
      })
    }
  }),
]
