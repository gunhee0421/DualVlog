import { CodeBlock } from "@/api/services/blog/model";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "@/app/styles/codeView.module.css";
import React from "react";

export const CodeView: React.FC<{ props: CodeBlock }> = ({ props }) => {
    return (
        <div className={styles.codeViewContainer}>
            <div className={styles.languageLabel}>{props.language}</div>
            <SyntaxHighlighter
                language={"javascript"}
                style={vscDarkPlus}
                showLineNumbers={true}
                wrapLines={true}
                className={`${styles.syntaxHighlight} ${styles.scroll_container}`}
                lineProps={(lineIndex) => ({
                    id: `code-${lineIndex}`,
                })}
            >
                {props.content.code}
            </SyntaxHighlighter>
        </div>
    );
};
