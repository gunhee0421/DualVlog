import Link from "next/link";
import { useEffect, useRef } from "react";
import getPtageText from "@/app/blog/text/getPtageText";
import getLinkText from "@/app/blog/text/getLinkText";
import { current } from "immer";

const TextView = ({ text, link, className }) => {
    const textRef = useRef<HTMLElement | null | any>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const pText = getPtageText(text);
    const LinkText = getLinkText(link, pText);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                let children;
                if ("children" in containerRef.current) {
                    children = Array.from(containerRef.current.children);
                }
                for (const child of children) {
                    const rect = child.getBoundingClientRect();
                    let containerRect;
                    if ("getBoundingClientRect" in containerRef.current) {
                        containerRect =
                            containerRef.current.getBoundingClientRect();
                    }
                    if (
                        rect.top >= containerRect.top &&
                        rect.bottom > containerRect.top
                    ) {
                        if (textRef.current !== child) {
                            textRef.current = child;
                            if (textRef.current.tagName.toLowerCase() == "a") {
                                const href =
                                    textRef.current.getAttribute("href");
                                if (href) {
                                    window.location.href = href;
                                }
                            }
                        }
                        break;
                    }
                }
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener("scroll", handleScroll);
            handleScroll(); // Initial call to set the first visible element
        }

        return () => {
            if (container) {
                container.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    return (
        <div ref={containerRef} className={className}>
            {LinkText}
        </div>
    );
};

export default TextView;
