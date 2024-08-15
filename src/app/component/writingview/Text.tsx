import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import  getPtageText  from '../link/text/getPtageText';
import getPtageCode from '../link/code/getPtageCode';
import { renderToStaticMarkup } from 'react-dom/server';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

interface Editor1Props {
    value: string;
    onChange: (content: string) => void;
    select: string;
}

const Text : React.FC<Editor1Props> = ({ value, onChange, select }) => {
    const [selectText, setSelectText] = useState<string>('');
    const [renderedText, setRenderedText] = useState<JSX.Element[]>([]);
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

    const handleClick = () => {
        if (quill.current) {
            const quillInstance = (quill.current.querySelector('.ql-container') as any).__quill;
            const selection = quillInstance.getSelection();
            if (selection && selection.length > 0) {
                const selectedText = quillInstance.getText(selection.index, selection.length);

                const wrappedText = `<Like class="custom-tag">${selectedText}</Like>`;


                const Content = quillInstance.root.innerHTML;


                const bSelection = Content.slice(0, Content.indexOf(selectedText));
                const aSelection = Content.slice(Content.indexOf(selectedText) + selectedText.length);
                const newContent = bSelection + wrappedText + aSelection;
                // console.log(bSelection);
                console.log(newContent);
                onChange(newContent);
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
            <button onClick={handleClick}>link Text</button>
            {value}
        </div>
    );
};
export default Text;


