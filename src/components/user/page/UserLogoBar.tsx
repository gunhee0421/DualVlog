import { useQuery } from "@tanstack/react-query";
import UserLogo from "../component/UserLogo";
import { UserResponse } from "@/lib/Lib";
import UserStackLogo from "../component/UserStackLogo";
import Link from "next/link";

const UserLogoBar = () => {
    const { data } = useQuery<UserResponse>({
        queryKey: ["userInfo"],
    });

    return (
        <div className="flex flex-row items-center px-[30px] justify-between">
            <div className="flex items-center">
                <UserLogo />
                <h1 className=" text-[34px] font-bold px-[20px] pr-[100px]">
                    {data?.result?.name}
                </h1>
            </div>
            <div className="flex">
                {data?.result.stack && (
                    <p className="flex flex-wrap text-[24px]">Stack:</p>
                )}
                <div className="flex flex-wrap text-[24px]">
                    {data?.result.stack.map((item, index) => {
                        return (
                            <Link
                                href={`https://${item}.org`}
                                className="flex flex-row mx-[10px] my-[5px] hover:text-blue-500"
                                key={index}
                                target="blank"
                            >
                                <UserStackLogo stack={`${item}`} />
                                {item}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default UserLogoBar;
