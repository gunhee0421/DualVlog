import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";
import { Selection } from "@react-types/shared";
import { Key } from "react";

interface MiddleDropDownProps {
    time: number;
    setTime: (time: number) => void;
}

const MiddleDropDown: React.FC<MiddleDropDownProps> = ({ time, setTime }) => {
    const data = ["오늘", "이번 주", "이번 달", "올해"];

    const handleSelectionChange = (keys: Selection) => {
        const selectedKey = Array.from(keys).join(""); // 선택된 항목의 key를 가져옴
        const indexMap = { day: 0, week: 1, month: 2, year: 3 };
        setTime(indexMap[selectedKey as string]);
    };

    return (
        <Dropdown backdrop="blur">
            <DropdownTrigger>
                {/*<button variant="bordered" className="bg-white w-28 h-10 rounded border-solid border-2 border-gray-100">*/}
                <button className="shadow-lg flex justify-around items-center w-28 h-10 rounded border-solid border-2 border-gray-100">
                    {data[time]}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Static Actions"
                variant="faded"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={new Set([Object.keys({ day: 0, week: 1, month: 2, year: 3 })[time]])}
                onSelectionChange={handleSelectionChange}
            >
                <DropdownItem key="day">오늘</DropdownItem>
                <DropdownItem key="week">이번 주</DropdownItem>
                <DropdownItem key="month">이번 달</DropdownItem>
                <DropdownItem key="year">올해</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default MiddleDropDown;
