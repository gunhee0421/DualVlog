import React, { useEffect, useRef, useState } from "react"
import { UseFormReturn } from "react-hook-form"
import { Controlled as CodeMirror } from "react-codemirror2"
import "codemirror/lib/codemirror.css"
import "codemirror/theme/material.css"
import "codemirror/mode/javascript/javascript"
import { SpellCheck } from "lucide-react"
import { codeblock, ContentType, paragraph } from "@/api/services/blog/model"
import { FormData } from "./WritePage"

export const Modal: React.FC<{
  form: UseFormReturn<FormData>
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ form, setModal }) => {
  const [code, setCode] = useState("")
  const [text, setText] = useState("")
  const [selection, setSelection] = useState<{
    textLine: number
    codeLines: number[] // 사용자에게 보이는 줄 번호
  }>({
    textLine: 0,
    codeLines: []
  })
  const linkRef = useRef<[number, number[]][]>([])

  // 드래그한 텍스트 라인 가져오기
  const handleTextareaSelection = (
    event: React.MouseEvent<HTMLTextAreaElement>
  ) => {
    const textarea = event.target as HTMLTextAreaElement
    const selectedText = window.getSelection()?.toString() || ""

    // 드래그된 텍스트의 시작과 끝 인덱스를 가져옴
    const startPos = textarea.selectionStart
    const endPos = textarea.selectionEnd

    // 텍스트를 줄 단위로 나누기
    const textBeforeSelection = textarea.value.substring(0, startPos) // 선택 전의 텍스트
    const textLines = textBeforeSelection.split("\n") // 줄로 나누기

    // 드래그된 텍스트가 있는 줄 번호
    const lineNumber = textLines.length

    setSelection((prev) => ({
      ...prev,
      textLine: lineNumber
    }))
  }

  // CodeMirror에서 드래그한 텍스트와 줄 번호 가져오기
  const handleCodeSelection = (editor: any) => {
    const selectedCode = editor.getSelection() // 선택된 코드 가져오기
    const startLine = editor.getCursor("start").line + 1 // 선택 시작 줄 번호 (0부터 시작하므로 +1)
    const endLine = editor.getCursor("end").line + 1 // 선택 끝 줄 번호 (0부터 시작하므로 +1)

    const lineNumbers = [] as number[]
    for (let line = startLine; line <= endLine; line++) {
      lineNumbers.push(line) // 사용자에게 보이는 줄 번호
    }

    setSelection((prev) => ({
      ...prev,
      codeLines: lineNumbers // 선택된 코드의 줄 번호 업데이트
    }))
  }

  const handleLinke = () => {
    const newItem: [number, number[]] = [
      selection.textLine,
      selection.codeLines
    ]
    linkRef.current = [...linkRef.current, newItem]
  }

  const handleOnSubmit = () => {
    const newContent: codeblock = {
      type: "codeblock",
      language: "javascript",
      link: linkRef.current,
      content: {
        code: code,
        text: text
      }
    }
    form.setValue("content", [...form.getValues("content"), newContent])
    setModal(false)
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50 transition-all  duration-200">
      <div className="flex flex-col justify-between w-[80%] h-[80%] bg-white rounded-2xl shadow-lg p-6">
        <div className="flex justify-between w-full h-full">
          <div className="w-1/2 flex flex-col justify-center items-center p-4 bg-gray-100 rounded-l-2xl">
            <h2 className="text-lg font-bold mb-4">Code</h2>
            <CodeMirror
              value={code}
              options={{
                mode: "javascript",
                theme: "material",
                SpellCheck: false,
                lineNumbers: true
              }}
              onBeforeChange={(editor, data, value) => {
                setCode(value)
              }}
              editorDidMount={(editor) => {
                editor.on("mouseup", () => {
                  handleCodeSelection(editor)
                })
                editor.on("cursorActivity", () => {
                  handleCodeSelection(editor)
                })
              }}
              className="w-full h-full"
            />
          </div>
          <div className="w-1/2 flex flex-col justify-center items-center p-4 bg-gray-200 rounded-r-2xl">
            <h2 className="text-lg font-bold mb-4">Text</h2>
            <textarea
              className="w-full h-full p-2 border border-gray-300 rounded-lg focus:outline-none"
              placeholder="설명을 입력하세요"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onMouseUp={handleTextareaSelection}
            />
          </div>
        </div>
        <div className="flex justify-center mt-6 gap-3">
          <button
            className="bg-red-500 text-white px-6 py-3 rounded-lg"
            onClick={() => setModal(false)}
          >
            닫기
          </button>
          <button
            className="bg-green-500 text-white px-6 py-3 rounded-lg"
            onClick={handleLinke}
          >
            연결
          </button>
          <button
            onClick={handleOnSubmit}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg"
          >
            저장
          </button>
        </div>
      </div>
    </div>
  )
}
