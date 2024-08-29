const Userselect = ({ index, setIndex }: any) => {
    return (
        <div className="flex justify-center mt-[40px] text-2xl font-pretendard font-semibold tracking-tighter">
            <button
                className={`w-[150px] text-center mr-4 ${
                    index === 1
                        ? "border-b-[2px] border-solid border-[#7FC9FF] text-[#7FC9FF]"
                        : ""
                }`}
                onClick={() => setIndex(1)}
            >
                포스트
            </button>
            <button
                className={`w-[150px] text-center mr-4 ${
                    index === 2
                        ? "border-b-[2px] border-solid border-[#7FC9FF] text-[#7FC9FF]"
                        : ""
                }`}
                onClick={() => setIndex(2)}
            >
                관심 목록
            </button>
        </div>
    );
};
export default Userselect;
