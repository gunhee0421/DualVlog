import { InsertBlogItem } from "@/api/services/blog/model";
import { formatDate } from "@/hooks/functions/formatDate";
import Image from "next/image";
import React from "react";

export const Info: React.FC<{ data: InsertBlogItem }> = ({ data }) => {
    return (
        <div className="flex flex-row items-center justify-between">
            <div className="flex">
                <Image src={data?.logo} width={23} height={20} alt="error" />
                <div className="mx-2 justify-center">{data?.name}</div>
            </div>
            <div className="text-xs">{formatDate(data.createdAt)}</div>
        </div>
    );
};
