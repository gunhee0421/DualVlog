import { useDispatch } from 'react-redux';
import { useState } from 'react';
import TitleView from "@/app/component/writingview/TitleView";
import FooterView from "@/app/component/writingview/FooterView";
import dynamic from 'next/dynamic';
import Code from "./code";
import Text from "./Text";

const Writing: React.FC = () => {
    const [title, setTitle] = useState('');
    const [editorValueCode, setEditorValueCode] = useState<string>('');
    const [editorValueText, setEditorValueText] = useState<string>('');
    const [codeIndex, setCodeIndex] = useState<number | null>(null);
    const [textIndex, setTextIndex] = useState<number | null>(null);

    const [links, setLinks] = useState<Array<[number, number[]]>>([]);

    const dispatch = useDispatch();

    const handleTitleChange = (newTitle: string) => {
        setTitle(newTitle);
    };


    const handleLink = () => {
        if (textIndex !== null && codeIndex !== null) {
            
            
            const existingLink = links.find(([codeLine]) => codeLine === codeIndex);
            if (existingLink) {
                
                existingLink[1].push(textIndex);
            } else {

                setLinks([...links, [codeIndex, [textIndex]]]);
            }
            setCodeIndex(null)
            setTextIndex(null)
        }
        console.log('연결완료',links)
    };
    const aAAA = () => {
        console.log('연결완료')
    };

    const handleSave = async () => {
        const postData = {
            title,
            content: {
                text: editorValueText,
                code: editorValueCode,
                links,
            }
        };

        console.log('Saved data:', postData);

        try {
            const response = await fetch('/api/savePost', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
            });

            if (!response.ok) {
                throw new Error(`Failed to save data: ${response.statusText}`);
            }

            const result = await response.json();
            console.log('Post saved successfully:', result);

        } catch (error) {
            console.error('Error saving post:', error);
        }
    };

    return (
        <div>
            <TitleView onTitleChange={handleTitleChange} />
            <div className='row'>
                <div className='left'>
                    <div className="codewe">Code</div>
                    <Code
                        value={editorValueCode}
                        onChange={setEditorValueCode}
                        select={setCodeIndex}
                    />
                    {codeIndex}
                </div>
                <div className='right'>
                    <div className="codewe">Text</div>
                    <Text
                        value={editorValueText}
                        onChange={setEditorValueText}
                        select={setTextIndex}
                    />
                    {textIndex}
                </div>
                    
            </div>
            <FooterView onQuit={() => { console.log("dksss") }} onSave={handleSave} onLink={handleLink}/>
        </div>
    );
};

export default Writing;
