import { codeblock } from "@/api/services/blog/model"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ContentState {
  content: string
  codeBlock: Array<codeblock>
}
const initialState: ContentState = {
  content: "",
  codeBlock: []
}
const writeSlice = createSlice({
  name: "write",
  initialState,
  reducers: {
    setContent: (state, action: PayloadAction<string>) => {
      state.content = action.payload
    },
    setLink: (state, action: PayloadAction<codeblock>) => {
      state.codeBlock.push(action.payload)
    }
  }
})

export const { setContent, setLink } = writeSlice.actions
export default writeSlice.reducer
