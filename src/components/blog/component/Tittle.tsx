import { InsertBlogItem } from "@/api/services/blog/model";
import React from "react";

export const Title: React.FC<{ data: InsertBlogItem }> = ({ data }) => {
    return (
        <div>
            <div className="text-4xl font-extrabold pb-[20px]">
                {data?.title}
            </div>
        </div>
    );
};
