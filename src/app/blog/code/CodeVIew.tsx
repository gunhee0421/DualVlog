import Link from "next/link";
import getPtageCode from "@/app/blog/code/getPtageCode";
import getLinkCode from "@/app/blog/code/getLinkCode";

const CodeView = ({ code, link, className }) => {
    const pCode = getPtageCode(code);
    const linkedCode = getLinkCode(link, pCode);

    return <code className={className}>{linkedCode}</code>;
};

export default CodeView;
