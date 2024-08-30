import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import loginReducer from "./slice/loginSlice"

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["**"],
        ignoredPaths: ["register"],
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
