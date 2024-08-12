import { UUID } from "crypto";

export interface BlogItem {
    id: UUID,
    img: string;
    title: string;
    content: string;
    date: string;
    logo: string;
    name: string;
    like: number;
    comment: number;
}
export interface BlogsInfo<T> {
    state: number;
    result: T | null;
}
export interface InsertBlogItem {
    id: UUID,
    title: string,
    content: (Paragraph | CodeBlock)[] | null,
    createdAt: string,
    comment: number,
    like: number,
    logo: string,
    name: string
}
export interface Paragraph { 
    type: string,
    content: string
}
export interface CodeBlock {
    type: string,
    link: [[number], number],
    content: {
        code: string,
        text: string
    }
}