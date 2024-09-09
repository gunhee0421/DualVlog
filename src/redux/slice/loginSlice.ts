import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { List } from "postcss/lib/list"

interface LoginState {
  accessToken: string | null
  refreshToken: string | null
}

const initialState: LoginState = {
  accessToken: null,
  refreshToken: null,
}
export const Login = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.accessToken = action.payload
      state.refreshToken = action.payload
    },
    logout: (state) => {
      state.accessToken = null
      state.refreshToken = null
    },
  },
})
export const { setLogin, logout } = Login.actions
export default Login.reducer
