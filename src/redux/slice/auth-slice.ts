import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {List} from "postcss/lib/list";

// reduce의 동작을 설계하는 부분
export const UserInfo = createSlice({
    name: 'user',
    initialState: {
        accessToken : String,
    },
    reducers: {
        connect: (state, action: PayloadAction<List>) => {

        }
    }
})
export const {connect} = UserInfo.actions;
export default UserInfo.reducer;