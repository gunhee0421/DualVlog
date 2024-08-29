"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { stat } from "fs";
import HomePage from "@/components/home/HomePage";

const Home = () => {
  return <HomePage />;
};

export default Home;
