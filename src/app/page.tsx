'use client';

import { useDispatch, useSelector } from 'react-redux';
import { connect } from '@/redux/slice/auth-slice';
import { RootState } from '@/redux/store';
import {useEffect, useState} from "react";
import "./styles/globals.css";
import CodeView from "@/app/component/code/CodeVIew";
import TextView from "@/app/component/text/TextView";

const Home = () => {
    const data = useSelector((state: RootState) => state.data);
    const code = data ? data.code : "";
    const text = data ? data.text : "";
    const dispatch = useDispatch();

    const [link, setLink] = useState([[1, 1],[3, 12], [5, 25], [7, 44], [12, 58]]); // code와 설명의 연결 배열
    const [copyText, setCopyText] = useState([]);
    const [click, setClick] = useState(0);


    return (
        <div className="flex flex-col py-2 px-4 overflow-hidden w-fit max-h-screen">
            <input className="mx-2 my-1 hover:text-sky-300 hover:font-bold" type="submit" value="start" onClick={() => setClick(1)} />
            <input className="mx-2 my-1 hover:text-orange-300 hover:font-bold" type="submit" value="end" onClick={() => setClick(2)} />
            <div className="flex flex-1 flex-row justify-center overflow-hidden">
                <CodeView code={code} link={link}
                    className="overflow-y-auto whitespace-pre-wrap w-3/5
                    px-3 py-2 rounded-lg
                "
                >{code}</CodeView>
                <TextView text={text} link={link}
                    className="max-h-screen overflow-y-auto whitespace-pre-wrap w-3/5
                    px-3 py-2 my-auto
                  "
                >{text}</TextView>
            </div>
        </div>
    );
};

export default Home;