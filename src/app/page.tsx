'use client';

import { useDispatch, useSelector } from 'react-redux';
import { connect } from '@/redux/slice/auth-slice';
import { RootState } from '@/redux/store';
import {useEffect, useState} from "react";
import "./styles/globals.css";

const Home = () => {
    const data = useSelector((state: RootState) => state.data);
    const code = data ? data.code : "";
    const text = data ? data.text : "";
    const dispatch = useDispatch();

    const [linktoCT, setLinktoCT] = useState("none");
    const [drage, setDrage] = useState(false);
    const [link, setLink] = useState([]); // code와 설명의 연결 배열
    const [copyText, setCopyText] = useState([]);

    const handleMouseUp = () => {
        if (drage && linktoCT=="during") {
            const selection = window.getSelection();
            if (selection) {
                const selectedText = selection.toString();
                setCopyText((prevText) => [...prevText, selectedText]);

            }
            setDrage(false);
        }
    };
    useEffect(() => {
        if (linktoCT === "done") {
            const newLink = {"code": copyText[1], "text": copyText[0]};
            setLink((prevLink) => [...prevLink, newLink]);
            setLinktoCT("none");
            setCopyText([]);
        }
    }, [linktoCT]);

    useEffect(() => {
        console.log(copyText);
    }, [copyText]);
    useEffect(() => {
        console.log(link);
    }, [link]);


    return (
        <div className="my-2 mx-4 overflow-hidden w-fit">
            <input className="mx-2 my-1 hover:text-sky-300 hover:font-bold" type="submit" value="start" onClick={() => setLinktoCT("during")} />
            <input className="mx-2 my-1 hover:text-orange-300 hover:font-bold" type="submit" value="end" onClick={() => setLinktoCT("done")} />
            <span className="mx-2 my-1 font-bold">{linktoCT.toString()}</span>
            <div className="flex flex-row justify-center overflow-hidden w-full" onMouseUp={handleMouseUp}>
                <pre className="max-h- overflow-y-auto whitespace-pre-wrap w-2/5
                bg-black opacity-65 text-white px-3 py-2 rounded-lg
                "
                onMouseDown={() => setDrage(true)}>{code}</pre>
                <pre className="max-h-60 overflow-y-auto whitespace-pre-wrap w-2/5
                px-3 py-2 my-auto
                " onMouseDown={() => setDrage(true)}>{text}</pre>
            </div>
        </div>
    );
};

export default Home;
