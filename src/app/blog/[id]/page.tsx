"use client";

import { useBlogListInfoQuery, useBlogQuery } from "@/api/services/blog/query";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css";

const Blog = () => {
    const { isLoading, data, isError } = useBlogQuery();

    return (
        <div className="markdown-body">
            <ReactMarkdown>{data?.result?.content[2].content}</ReactMarkdown>
        </div>
    );
};

export default Blog;
