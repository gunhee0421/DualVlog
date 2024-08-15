const getPtageCode = (data : string) => {
    const split = data.split('\n').filter(line => line !== '');
    return split.map((line, idx) => {
        return (
            <p key={idx} id={`code-${idx}`}>{line}</p>
        );
    })
}

export default getPtageCode;