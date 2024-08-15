const getPtageText = (data: string) => {
    const split = data.split("\n").filter((line) => line !== "");
    return split.map((line, idx) => {
        return (
            <div>
                <p id={`text-${idx}`} className="text-2xl">
                    {line}
                </p>
                <br />
                <br />
            </div>
        );
    });
};

export default getPtageText;
