import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {List} from "postcss/lib/list";

interface LoginState {
  accessToken: string | null
}

const initialState: LoginState = {
  accessToken: null
}
// reduce의 동작을 설계하는 부분
export const Login = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLogin: (state, action: PayloadAction<string>) => {
          state.accessToken = action.payload
        }
    }
})
export const { setLogin } = Login.actions;
export default Login.reducer;