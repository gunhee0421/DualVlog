'use client';

import TopNavigation from "@/components/home/TopNavigation";
import MiddleNavigation from "@/components/home/MiddleNavigation";
import {useEffect, useState} from "react";
import ContentView from "@/components/home/ContentView";
import {server} from '@/mocks/worker/server';
import { get } from "http";

const Home = () => {
    const [index, setIndex] = useState(1);
    const [time, setTime] = useState(7);

    return (
        <div className="flex flex-col px-24 bg-gray-50 h-screen">
            <TopNavigation />
            <MiddleNavigation index={index} setIndex={setIndex} time={time} setTime={setTime}/>
            <ContentView />
        </div>
    );
};

export default Home;