import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
const getPtageText = (data : string): JSX.Element[] => {
    const cleanHtml = DOMPurify.sanitize(data);

    const split = cleanHtml.split('\n').filter(line => line !== '');
    return split.map((line, idx) => {
        return (
            <div key={`text-${idx}`} id={`text-${idx}`} className="text-2xl mb-4">
                {parse(line)}
            </div>
        );
    });
}

export default getPtageText;