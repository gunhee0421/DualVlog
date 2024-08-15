import { CodeBlock } from "@/api/services/blog/model";
import React, { useEffect, useRef, useState } from "react";
import { textSplit } from "./textSplit";
import styles from "@/app/styles/codeView.module.css";

export const TextView: React.FC<{ props: CodeBlock }> = ({ props }) => {
    const lines = textSplit(props.content.text);

    const textContainerRef = useRef<HTMLDivElement>(null);
    const [focusedLine, setFocusedLine] = useState<number | null>(1);

    useEffect(() => {
        const handleScroll = () => {
            const container = textContainerRef.current;
            if (!container) return;

            const containerHeight = container.clientHeight;
            const scrollTop = container.scrollTop;

            let newFocusedLine = focusedLine;

            const height = Math.round(window.innerHeight * 0.1);

            for (let i = 1; i <= container.children.length; i++) {
                const element = document.getElementById(`text-${i}`);
                if (!element) continue;

                const elementTop = element.offsetTop - container.offsetTop;
                const elementBottom = elementTop + element.clientHeight;

                if (elementBottom > scrollTop + height) {
                    newFocusedLine = i;
                    break;
                }
            }

            if (newFocusedLine !== null) {
                setFocusedLine(newFocusedLine);

                const [_, codeLines] =
                    props.link.find(
                        ([textLine]) => textLine === newFocusedLine
                    ) || [];
                if (codeLines && codeLines.length > 0) {
                    const firstCodeLineElement = document.getElementById(
                        `code-${codeLines[0]}`
                    );

                    if (firstCodeLineElement) {
                        firstCodeLineElement.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                        });
                    }
                }
            }
        };

        const container = textContainerRef.current;
        container?.addEventListener("scroll", handleScroll);

        return () => {
            container?.removeEventListener("scroll", handleScroll);
        };
    }, [props.link, focusedLine]);

    return (
        <div
            ref={textContainerRef}
            className={`flex flex-col w-[47%] whitespace-pre-wrap px-4 py-2 max-h-[40vh] overflow-y-auto border-2 bg-[#F3F3F3] rounded-[10px] ${styles.scroll_container}`}
        >
            {lines.map((line, idx) => (
                <div
                    key={idx}
                    id={`text-${idx + 1}`}
                    className={`py-[10vh] my-[15%] transition-all duration-3000 ${
                        focusedLine === idx + 1
                            ? "border-l-[12px] border-solid border-[#7FC9FF] pl-2 rounded bg-white"
                            : ""
                    }`}
                >
                    {line}
                </div>
            ))}
        </div>
    );
};
