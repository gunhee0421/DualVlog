import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });


interface Editor1Props {
    value: string;
    onChange: (content: string) => void;
    select: (lineNumbers: number) => void;
}

const Code: React.FC<Editor1Props> = ({ value, onChange, select }) => {
    const quill = useRef<any>(null);
    const [selectText, setSelectText] = useState<string>('');
    const [lineNumber, setLineNumber] = useState<number[]>([]);
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
        // if (quill.current) {
        //     const quillInstance = (quill.current.querySelector('.ql-container') as any).__quill;
        //     const selection = quillInstance.getSelection();

        //     if (selection && selection.length > 0) {
        //         const selectedText = quillInstance.getText(selection.index, selection.length);
        //         setSelectText(selectedText);
        //     } else {
        //         setSelectText('');
        //     }
        // }
        if (quill.current) {
            const quillInstance = (quill.current.querySelector('.ql-container') as any).__quill;
            const selection = quillInstance.getSelection();
    
            if (selection && selection.index !== null) {
                const format = quillInstance.getFormat(selection.index);
                if (format['code-block']) {
                    const fullText = quillInstance.getText();

                    const selectedIndex = selection.index;
                    const eLine = selection.index+selection.length - 1
                    
                    const selectedLineIndex = fullText.slice(0, selectedIndex).split('\n').length;
                    // const eLineIndex = fullText.slice(0, eLine).split('\n').length;
                    // const selectLineN = [];
                    // for (let i = selectedLineIndex; i <= eLineIndex; i++) {
                    //     selectLineN.push(i);
                    // }
                    setLineNumber(selectedLineIndex);
                    select(selectedLineIndex)
                } else {
                    console.error("선택한 텍스트가 코드 블록 내에 없습니다.");
                }
            }
        }
    };

    const handClick = () => {

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
        </div>
    );
};

export default Code;
