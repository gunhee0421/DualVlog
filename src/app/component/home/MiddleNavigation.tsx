import MiddleItem from "@/app/component/home/MiddleItem";
import MiddleItems from "@/app/component/home/MiddleItems";
import {useState} from "react";
import MiddleDropDown from "@/app/component/home/MiddleDropDown";

export default function MiddleNavigation({index, setIndex, time, setTime}){
    return(
        <div className="flex flex-row justify-between items-center my-8">
            <MiddleItems index={index} setIndex={setIndex} />
            <MiddleDropDown time={time} setTime={setTime} />
        </div>
    )
}