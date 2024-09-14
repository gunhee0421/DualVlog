import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ContentState {
  content: string
}
const initialState: ContentState = {
  content: ""
}
const writeSlice = createSlice({
  name: "write",
  initialState,
  reducers: {
    setContent: (state, action: PayloadAction<string>) => {
      state.content = action.payload
    }
  }
})

export const { setContent } = writeSlice.actions
export default writeSlice.reducer
