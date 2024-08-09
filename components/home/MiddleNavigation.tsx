import MiddleItems from "../../components/home/MiddleItems";
import MiddleDropDown from "../../components/home/MiddleDropDown";

export default function MiddleNavigation({index, setIndex, time, setTime}: any){
    return(
        <div className="flex flex-row justify-between items-center my-5">
            <MiddleItems index={index} setIndex={setIndex} />
            <MiddleDropDown time={time} setTime={setTime} />
        </div>
    )
}