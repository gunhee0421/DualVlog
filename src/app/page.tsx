'use client';

import "./styles/globals.css";
import Link from "next/link";
import "./styles/globals.css";

const Home = () => {

    return (
        <div className="flex flex-col py-2 px-4 overflow-hidden w-fit max-h-screen">
            <h1>Home </h1>
            <Link href="/blog">blogView</Link>
        </div>
    );
};

export default Home;