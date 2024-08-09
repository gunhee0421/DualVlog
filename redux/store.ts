import {configureStore} from "@reduxjs/toolkit";
import loginReducer from "./slice/loginSlice";

// redux의 데이터를 정의하는 부분
export const store = configureStore({
    reducer: {
        login: loginReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
