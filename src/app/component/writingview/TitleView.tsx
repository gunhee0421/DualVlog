import Link from "next/link";
import { useEffect, useRef } from "react";
import React, { useState } from 'react';
import '../../../app/style/globals.css';

interface TitleViewProps {
    onTitleChange: (title: string) => void;
}

const TitleView: React.FC<TitleViewProps> = ({ onTitleChange }) => {
    const [title, setTitle] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newTitle = e.target.value;
        setTitle(newTitle);
        onTitleChange(newTitle);
    };
    return (    
        <div className="dxbjgS">
            <textarea id="title" value={title} onChange={handleChange} placeholder="제목을 입력하세요" className="jTDuYk" style={{height: '66px'}}></textarea>
            <div className="jjnZGx"></div>
        </div>
    )
}
export default TitleView;