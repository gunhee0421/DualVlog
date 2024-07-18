import Link from "next/link";
import getPtageCode from "@/app/component/blogView/code/getPtageCode";
import getLinkCode from "@/app/component/blogView/code/getLinkCode";


const CodeView = ({code, link, className}) => {
    const pCode = getPtageCode(code);
    const linkedCode = getLinkCode(link, pCode);

    return(
        <code className={className}>
            {linkedCode}
        </code>
    )
}

export default CodeView;