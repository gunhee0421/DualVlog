import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { renderToStaticMarkup } from 'react-dom/server';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

interface Editor1Props {
    value: string;
    onChange: (content: string) => void;
    select: (lineNumbers: number) => void;
}

const Text : React.FC<Editor1Props> = ({ value, onChange, select }) => {
    const [lineNumber, setLineNumber] = useState<number>();
    const quill = useRef<any>(null);
    useEffect(() => {
        if (quill.current) {
            const qlToolbar = quill.current.querySelector('.ql-toolbar') as HTMLElement;
            const qlContainer = quill.current.querySelector('.ql-container') as HTMLElement;
            const qlEditor = quill.current.querySelector('.ql-editor') as HTMLElement;

            if (qlToolbar) {
                qlToolbar.style.border = 'none'; // 툴바 옆 선 제거
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
    const handleSelectChange = () => {
        // if (quill.current) {
        //     const quillI = (quill.current.querySelector('.ql-container') as any).__quill;
        //     const selectt = quillI.getSelection();

        //     if (selectt && selectt.length > 0) {
        //         const selectedText = quillI.getText(selectt.index, selectt.length);
        //         setSelectText(selectedText);
        //     } else {
        //         setSelectText('');
        //     }
        // }
        if (quill.current) {
            const quillI = (quill.current.querySelector('.ql-container') as any).__quill;
            const selectt = quillI.getSelection();

            if (selectt && selectt.index !== null) {
                const sLine = quillI.getLine(selectt.index)[0];
                const eLine = quillI.getLine(selectt.index+selectt.length - 1)[0];

                const sNode = sLine.domNode;
                const eNode = eLine.domNode;

                const line = Array.from(sNode.parentNode.children);
                const sLineIndex = line.indexOf(sNode)+1;
                // console.log(sLineIndex)
                // const eLineIndex = line.indexOf(eNode)+1;

                // const selectLineN = [];
                // for (let i = sLineIndex; i <= eLineIndex; i++) {
                //     selectLineN.push(i);
                // }

                setLineNumber(sLineIndex);
                select(sLineIndex)
            }
        }
    };

    const handleClick = () => {
        
    };

    return (
        <div ref={quill} style={{ height: '85%', marginBottom: '6%' }} onMouseUp={handleSelectChange}>
            <ReactQuill
                value={value}
                onChange={onChange}
                placeholder=""
                modules={{
                    toolbar: [
                        [{ 'header': '1'}, { 'header': '2'}, { 'font': [] }],
                        [{ 'size': [] }],
                        ['bold', 'italic', 'underline'],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                        [{ 'align': [] }],
                        ['link', 'image'],
                        ['clean']
                    ]
                }}
                theme="snow"
            />
        </div>
    );
};
export default Text;


