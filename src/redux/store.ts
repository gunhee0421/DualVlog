import { configureStore } from "@reduxjs/toolkit"
import loginReducer from "./slice/loginSlice"
import writerReducer from "./slice/writeSlice"

export const store = configureStore({
  reducer: {
    login: loginReducer,
    writer: writerReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["**"],
        ignoredPaths: ["register"]
      }
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
