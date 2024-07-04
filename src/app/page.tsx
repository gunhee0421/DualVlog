'use client';

import { useDispatch, useSelector } from 'react-redux';
import { clear, add } from '@/redux/slice/auth-slice';
import { RootState } from '@/redux/store';
import { useState } from 'react';

const Home = () => {
    const text = useSelector((state: RootState) => state.code.value);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(add(inputValue));
        setInputValue(''); // 입력 필드를 비웁니다.
    };

    return (
        <div>
            <div>
                <button
                    aria-label="Clear value"
                    onClick={() => dispatch(clear())}
                >
                    Clear
                </button>
                <span>{text}</span>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </form>
            </div>
        </div>
    );
};

export default Home;
