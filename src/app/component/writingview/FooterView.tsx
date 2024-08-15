import Link from "next/link";
import { useEffect, useRef } from "react";
import React, { useState } from 'react';
import '../../../app/style/globals.css';

interface quit{
    onQuit: () => void;
}
interface Save{
    onSave: () => void;
}
type FooterViewProps = quit & Save;

const FooterView: React.FC<FooterViewProps> = ({ onQuit, onSave }) => {
    
    return (    
        <div className="elkoqa">
            <div className="GtSRu">
                <button className="sc-evcjhq gJEhHm">
                    <span onClick={onQuit}>나가기</span>
                </button>
                <div className="exzoUl">
                    <button color="transparent" className="sc-jrQzAO icODNG sc-gIDmLj cAMIzw">연결</button>
                    <button onClick={onSave} color="teal" className="sc-jrQzAO jYsOEX sc-gIDmLj cAMIzw">출간하기</button></div>
            </div>
        </div>
    )
}
export default FooterView;