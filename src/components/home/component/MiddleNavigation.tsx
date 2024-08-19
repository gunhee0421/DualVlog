import MiddleDropDown from "./MiddleDropDown";
import MiddleItems from "./MiddleItems";

export default function MiddleNavigation({
    index,
    setIndex,
    time,
    setTime,
}: any) {
    return (
        <div className="flex flex-row justify-between items-center my-5">
            <MiddleItems index={index} setIndex={setIndex} />
            <MiddleDropDown time={time} setTime={setTime} />
        </div>
    );
}
