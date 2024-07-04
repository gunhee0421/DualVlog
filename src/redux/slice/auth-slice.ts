import {createSlice, PayloadAction} from '@reduxjs/toolkit'

// reduce의 동작을 설계하는 부분
export const textSlice = createSlice({
    name: 'code',
    initialState: {
        value: "test",
    },
    reducers: {
        clear: state => {
            state.value = "";
        },
        add: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    }

})
export const {clear, add} = textSlice.actions;
export default textSlice.reducer;