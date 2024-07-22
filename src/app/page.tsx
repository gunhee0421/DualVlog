'use client';

import TopNavigation from "@/app/component/home/TopNavigation";
import MiddleNavigation from "@/app/component/home/MiddleNavigation";
import {useState} from "react";
import ContentView from "@/app/component/home/ContentView";

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