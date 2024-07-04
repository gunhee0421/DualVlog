import {configureStore} from "@reduxjs/toolkit";
import textReducer from "../redux/slice/auth-slice";

// redux의 데이터를 정의하는 부분
export const store = configureStore({
    reducer: {
        data: textReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
