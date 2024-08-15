import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';


const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

interface Editor1Props {
    value: string;
    onChange: (content: string) => void;
    select: string;
}


const Code : React.FC<Editor1Props> = ({ value, onChange, select }) => {
    const quill = useRef<any>(null);
    const [selectText, setSelectText] = useState<string>('');
    select = selectText

    useEffect(() => {
        if (quill.current) {
            const qlToolbar = quill.current.querySelector('.ql-toolbar') as HTMLElement;
            const qlContainer = quill.current.querySelector('.ql-container') as HTMLElement;
            const qlEditor = quill.current.querySelector('.ql-editor') as HTMLElement;

            if (qlToolbar) {
                qlToolbar.style.border = 'none';
                qlToolbar.style.boxSizing = 'border-box';
                qlToolbar.style.fontFamily = "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
                qlToolbar.style.padding = '7px';
            }

            if (qlContainer) {
                qlContainer.style.border = 'none';
                qlContainer.style.height = '85%';
                qlContainer.style.marginBottom = '6%';
                qlContainer.style.boxSizing = 'border-box';
            }

            if (qlEditor) {
                qlEditor.style.border = 'none';
                qlEditor.style.outline = 'none';
                qlEditor.style.boxShadow = 'none';
                qlEditor.style.boxSizing = 'border-box';
            }
        }
    }, []);
    const handleSelectionChange = () => {
        if (quill.current) {
            const quillInstance = (quill.current.querySelector('.ql-container') as any).__quill;
            const selection = quillInstance.getSelection();

            if (selection && selection.length > 0) {
                const selectedText = quillInstance.getText(selection.index, selection.length);
                setSelectText(selectedText);
            } else {
                setSelectText('');
            }
        }
    };

    const replaceSelectedText = (newText: string) => {
        if (quill.current) {
            const quillInstance = (quill.current.querySelector('.ql-container') as any).__quill;
            const selection = quillInstance.getSelection();
    
            if (selection && selection.length > 0) {
                quillInstance.deleteText(selection.index, selection.length);
                quillInstance.insertText(selection.index, newText);
            }
        }
    };
    
    return (
        <div ref={quill} style={{ height: '85%', marginBottom: '6%' }} onMouseUp={handleSelectionChange}>
            <ReactQuill
                value={value}
                onChange={onChange}
                placeholder=""
                modules={{
                    toolbar: [
                        [{ 'code-block': 'code-block' }],
                    ]
                }}
                formats={['code-block']}
                theme="snow"
            />
            <button onClick={() => replaceSelectedText('New replaced text')}>Replace Selected Text</button>
        </div>
    );
};
export default Code;