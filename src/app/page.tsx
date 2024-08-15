'use client';
import Writing from "./component/writingview/Writing";
import { useState } from "react";

const Home = () => {
    const [index, setIndex] = useState(1);
    const [time, setTime] = useState(7);

    return (
        <div>
            <Writing/>
        </div>
    );
};

export default Home;