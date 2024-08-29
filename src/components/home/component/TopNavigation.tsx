import Link from "next/link";
import { useScroll } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { stat } from "fs";
import { log } from "console";
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { logout } from "@/redux/slice/loginSlice";
import { useUserInfoQuery } from "@/api/services/user/query";
import TopLog from "./topLog";
import Login from "./Login";
import { SearchModal } from "@/components/search/components/SearchModal";
import { AlarmModal } from "@/components/alarm/AlarmModal";

const TopNavigation = () => {
    const token = useSelector((state: RootState) => state.login.accessToken);
    const dispatch = useDispatch();
    const queryClient = useQueryClient();

    const [search, setSearch] = useState(false);
    const [alarm, setAlarm] = useState(false);

    const { isLoading, data, isError } = useUserInfoQuery();

    useEffect(() => {
        console.log(search);
    }, [search]);

    useEffect(() => {
        if (!token) {
            queryClient.resetQueries({
                queryKey: ["userInfo"],
                exact: true,
            });
        }
    }, [token, queryClient]);

    return (
        <div className="flex flex-row justify-between items-center py-2">
            <TopLog />
            <div className="flex flex-row h-full">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setAlarm(!alarm);
                    }}
                >
                    <svg
                        width="44"
                        height="40"
                        viewBox="0 0 44 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 27.0002V25.0002H14V18.0002C14 16.6172 14.417 15.3882 15.25 14.3122C16.083 13.2372 17.167 12.5332 18.5 12.2002V11.5002C18.5 11.0832 18.646 10.7302 18.938 10.4372C19.0758 10.2958 19.2411 10.184 19.4238 10.1089C19.6064 10.0337 19.8025 9.99673 20 10.0002C20.417 10.0002 20.77 10.1462 21.063 10.4382C21.354 10.7292 21.5 11.0832 21.5 11.5002V12.2002C22.833 12.5332 23.917 13.2372 24.75 14.3122C25.583 15.3882 26 16.6172 26 18.0002V25.0002H28V27.0002H12ZM20 30.0002C19.45 30.0002 18.98 29.8042 18.588 29.4132C18.3986 29.2304 18.2488 29.0107 18.1476 28.7676C18.0465 28.5246 17.9962 28.2634 18 28.0002H22C22 28.5502 21.804 29.0202 21.412 29.4132C21.2292 29.6023 21.0096 29.7519 20.7668 29.8529C20.5239 29.9538 20.263 30.004 20 30.0002ZM16 25.0002H24V18.0002C24 16.9002 23.608 15.9582 22.825 15.1752C22.042 14.3922 21.1 14.0002 20 14.0002C18.9 14.0002 17.958 14.3922 17.175 15.1752C16.392 15.9582 16 16.9002 16 18.0002V25.0002Z"
                            fill="#212529"
                        />
                    </svg>
                </button>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setSearch(!search);
                    }}
                >
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M27.326 28.712L21.517 22.904C20.9917 23.3332 20.394 23.6651 19.752 23.884C19.0663 24.1222 18.3449 24.2419 17.619 24.238C15.77 24.238 14.205 23.598 12.922 22.315C11.641 21.033 11 19.468 11 17.619C11 15.77 11.637 14.205 12.91 12.922C14.183 11.641 15.744 11 17.593 11C19.459 11 21.033 11.64 22.316 12.922C23.598 14.205 24.238 15.77 24.238 17.619C24.238 18.369 24.121 19.079 23.886 19.751C23.6627 20.4 23.3306 21.0063 22.904 21.544L28.738 27.352C28.824 27.4374 28.8916 27.5394 28.9366 27.6519C28.9817 27.7644 29.0033 27.8849 29 28.006C29 28.267 28.904 28.503 28.712 28.712C28.6223 28.8048 28.5145 28.8783 28.3953 28.9278C28.2762 28.9774 28.1481 29.0019 28.019 29C27.8899 29.0019 27.7619 28.9773 27.6427 28.9277C27.5235 28.8782 27.4157 28.8048 27.326 28.712ZM17.619 22.276C18.909 22.276 20.009 21.823 20.916 20.916C21.823 20.009 22.276 18.91 22.276 17.619C22.276 16.311 21.823 15.208 20.916 14.309C20.009 13.411 18.91 12.962 17.619 12.962C16.311 12.962 15.208 13.412 14.31 14.309C13.412 15.208 12.962 16.311 12.962 17.619C12.962 18.909 13.412 20.009 14.31 20.916C15.208 21.823 16.31 22.276 17.619 22.276Z"
                            fill="#212529"
                        />
                    </svg>
                </button>
                {data?.state != 200 ? (
                    <Link href="/login">
                        <Login />
                    </Link>
                ) : (
                    <div className="flex flex-row justify-center items-center">
                        <Link
                            href={`/user/${data?.result?.id}`}
                            className="font-pretendard px-2"
                        >
                            {data?.result?.name}님
                        </Link>
                        <button
                            onClick={() => dispatch(logout())}
                            className="py-1 px-3 rounded-md font-bold text-gray-600 hover:text-sky-400"
                        >
                            로그아웃
                        </button>
                    </div>
                )}
                {search && (
                    <SearchModal
                        close={search}
                        onClose={() => setSearch(false)}
                    />
                )}
                {alarm && <AlarmModal onClose={() => setAlarm(false)} />}
            </div>
        </div>
    );
};
export default TopNavigation;
