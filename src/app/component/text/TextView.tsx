import Link from "next/link";
import {useEffect, useRef} from "react";
import getPtageText from "@/app/component/text/getPtageText";
import getLinkText from "@/app/component/text/getLinkText";


const TextView = ({text, link, className}) => {
    const textRef = useRef<HTMLElement | null | any>(null);

    const pText = getPtageText(text);
    const LinkText = getLinkText(link, pText);

    useEffect(() => {
        if (LinkText) {
            textRef.current = LinkText[3];
            window.location.href = textRef.current.props.href;
        }
    }, []);

    useEffect(() => {
        console.log(textRef.current);
        console.log(textRef.current.props.href);
    }, [textRef]);

    return(
        <div className={className}>
            {LinkText}
        </div>
    )
}

export default TextView;