import { useState } from "react";
import UserMiddle from "../component/UserMiddle";
import UserLogoBar from "./UserLogoBar";
import Userselect from "../component/UserSelect";
import UserBlogs from "../component/UserBlogs";
import { SearchBar } from "@/components/search/SearchBar";

const UserCenter = () => {
    const [index, setIndex] = useState(1);

    const prop = {
        width: 200,
        height: 30,
        size: 30,
    };

    return (
        <div className="flex flex-col w-[1000px]">
            <UserLogoBar />
            <hr className=" mt-[40px] mb-[20px] border-t-3"></hr>
            <UserMiddle />
            <Userselect index={index} setIndex={setIndex} />
            <div className="flex justify-end">
                <SearchBar {...prop} />
            </div>
            <UserBlogs />
        </div>
    );
};
export default UserCenter;
