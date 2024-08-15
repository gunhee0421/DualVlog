import { CodeBlock } from "@/api/services/blog/model";
import React from "react";
import { textSplit } from "./textSplit";

export const TextView: React.FC<{ props: CodeBlock }> = ({ props }) => {
    const lines = textSplit(props.content.text);

    return (
        <div className="flex flex-col w-[47%] whitespace-pre-wrap px-4 py-2 max-h-[30vh] overflow-y-auto border-1.5 rounded-[10px]">
            {lines.map((line, idx) => (
                <div key={idx} id={`text-${idx + 1}`} className="py-[100px] ">
                    {line}
                </div>
            ))}
        </div>
    );
};
