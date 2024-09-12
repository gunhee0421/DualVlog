import React, { useState } from "react"
import { UseFormReturn } from "react-hook-form"
import { Controlled as CodeMirror } from "react-codemirror2"
import "codemirror/lib/codemirror.css"
import "codemirror/theme/material.css"
import "codemirror/mode/javascript/javascript"

export const Modal: React.FC<{
  form: UseFormReturn<{ title: string; content: string }>
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ form, setModal }) => {
  const [code, setCode] = useState("")
  const [text, setText] = useState("")
  const [selection, setSelection] = useState<{
    codeSelection: string
    textSelection: string
  }>({
    codeSelection: "",
    textSelection: ""
  })

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

    console.log("Selected text in Textarea: ", selectedText)
    console.log("Selected text starts at line: ", lineNumber)

    // setSelection((prev) => ({
    //   ...prev,
    //   textSelection: selectedText,
    //   textLine: lineNumber // 드래그한 텍스트가 포함된 줄 번호 저장
    // }))
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
                lineNumbers: true
              }}
              onBeforeChange={(editor, data, value) => {
                setCode(value)
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
            onClick={() =>
              console.log(
                "선택된 코드: ",
                selection.codeSelection,
                "선택된 텍스트: ",
                selection.textSelection
              )
            }
          >
            연결
          </button>
          <button
            onClick={() => {
              console.log(code, ", ", text)
              setModal(false)
            }}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg"
          >
            저장
          </button>
        </div>
      </div>
    </div>
  )
}
