"use client";

import TopNavigation from "@/components/home/TopNavigation";
import MiddleNavigation from "@/components/home/MiddleNavigation";
import { useEffect, useState } from "react";
import ContentView from "@/components/home/ContentView";
import { server } from "@/api/mocks/worker/server";
import { get } from "http";
import { useQuery } from "@tanstack/react-query";
import { Blogs, DataItems } from "@/lib/Lib";

const fetchBlog = async (): Promise<Blogs> => {
    const response = await fetch("https://blog/info");
    if (!response.ok) {
        return { state: 400, result: null };
    }
    return await response.json();
};

const Home = () => {
    const [index, setIndex] = useState(1);
    const [time, setTime] = useState(7);
    const [blog, setBlog] = useState<DataItems[] | null>(null);

    const { isLoading, data, isError, error } = useQuery<Blogs>({
        queryKey: ["getBlog"],
        queryFn: fetchBlog,
    });

    useEffect(() => {
        if (index === 1 && data?.state === 200 && data?.result) {
            const sorted = data.result.slice().sort((a: any, b: any) => {
                return b.like - a.like;
            });
            setBlog(sorted);
        }
        if (index === 2 && data?.state === 200 && data?.result) {
            const sorted = data.result.slice().sort((a: any, b: any) => {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            });
            setBlog(sorted);
        }
        if (index === 3 && data?.state === 200 && data?.result) {
            const sorted = data.result.slice().sort((a: any, b: any) => {
                return b.comment - a.comment;
            });
            setBlog(sorted);
        }
    }, [index, data]);

    if (isLoading) return <div>Loading...</div>;
    if (isError || data?.state == 400) return <div>error</div>;
    if (!blog) {
        return <div>fail to load data</div>;
    }

    return (
        <div className="flex flex-col px-24 bg-gray-50 h-screen">
            <TopNavigation />
            <MiddleNavigation
                index={index}
                setIndex={setIndex}
                time={time}
                setTime={setTime}
            />
            <ContentView data={blog} />
        </div>
    );
};

export default Home;
