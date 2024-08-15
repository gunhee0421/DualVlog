
import { useDispatch, useSelector } from 'react-redux';
import { connect } from '@/redux/slice/auth-slice';
import { RootState } from '@/redux/store';
import { useState } from 'react';
import {stat} from "fs";
import TitleView from "@/app/component/writingview/TitleView";
import FooterView from "@/app/component/writingview/FooterView";
import dynamic from 'next/dynamic';
import Code from "./code";
import Text from "./Text";

const Writing: React.FC = () => {
    const code = useSelector((state: RootState) => state.data.code);
    const text = useSelector((state: RootState) => state.data.text);
    const list = useSelector((state: RootState) => state.data.list);
    const [title, setTitle] = useState('');


    const [editorValueCode, setEditorValueCode] = useState<string>('');
    const [editorValueText, setEditorValueText] = useState<string>('');
    const [selectEditorValueCode, selectSetEditorValueCode] = useState<string>('');
    const [selectEditorValueText, selectSetEditorValueText] = useState<string>('');


    const dispatch = useDispatch();
    let dragge = false;

    const handleTitleChange = (newTitle: string) => {
        setTitle(newTitle);
    };


    return (
        <div>
           <TitleView onTitleChange={handleTitleChange} />
           <div className='row'>
            <div className='left'>
                <div className="codewe">Code</div>
                <Code value={editorValueCode} onChange={setEditorValueCode} select={selectEditorValueCode}></Code>
                {selectEditorValueCode}
            </div>
            <div className='right'>
                <div className="codewe">Text</div>
                <Text value={editorValueText} onChange={setEditorValueText} select={selectEditorValueText}></Text>
                
            </div>
            
        </div>
           <FooterView onQuit={function (): void {
                throw new Error('Function not implemented.');
            } } onSave={function (): void {
                throw new Error('Function not implemented.');
            } }></FooterView>
        </div>
        
    );
};

export default Writing;
