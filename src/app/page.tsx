'use client';

import { useDispatch, useSelector } from 'react-redux';
import { connect } from '@/redux/slice/auth-slice';
import { RootState } from '@/redux/store';
import { useState } from 'react';
import {stat} from "fs";

const Home = () => {
    const code = useSelector((state: RootState) => state.data.code);
    const text = useSelector((state: RootState) => state.data.text);
    const list = useSelector((state: RootState) => state.data.list);

    const dispatch = useDispatch();
    let dragge = false;


    return (
        <div>
            <input type="submit" value="start" onSubmit={() => {
                dragge != dragge;
            }} />
            <input type="submit" value="end" onSubmit={() => {

            }} />
            <div className="flex-row-reverse">
                <p>{code}</p>
                <p>{text}</p>
                <p>{dragge}</p>
            </div>
        </div>
    );
};

export default Home;
