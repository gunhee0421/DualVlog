"use client";

import UserCenter from "@/components/user/page/UserCenter";
import UserLogoBar from "@/components/user/page/UserLogoBar";
import UserTopNavigation from "@/components/user/page/userTopNavigation";
import { UserResponse } from "@/lib/Lib";
import { useQuery } from "@tanstack/react-query";
import { UUID } from "crypto";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";

const UserInfo = () => {
    const { id } = useParams() as { id: string };

    const { data } = useQuery<UserResponse>({
        queryKey: ["userInfo"],
    });

    return (
        <div className="flex flex-col bg-gray-50 h-screen items-center">
            <UserTopNavigation />
            <UserCenter />
        </div>
    );
};

export default UserInfo;
