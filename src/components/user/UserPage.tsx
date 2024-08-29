"use client";

import UserCenter from "@/components/user/page/UserCenter";
import UserTopNavigation from "@/components/user/page/userTopNavigation";

const UserPage = () => {
    return (
        <div className="flex flex-col bg-gray-50 h-screen items-center">
            <UserTopNavigation />
            <UserCenter />
        </div>
    );
};

export default UserPage;
