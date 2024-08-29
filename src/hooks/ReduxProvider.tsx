"use client";

import React from "react";
import { store } from "../redux/store";
import { Provider } from "react-redux";

// redux를 제공하는 provider를 사용해 ssr -> csr로 출력하기 위함
export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
