import { UUID } from "crypto";

export interface UserInfo {
    id: UUID;
    email: string;
    name: string;
    userlogo: string;
    introduce: string;
    stack: Array<string> | [];
    blog: DataItems[] | null;
}
export interface UserResponse {
    state: number;
    result: UserInfo;
}
export interface DataItems {
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
export interface Blogs {
    state: number;
    result: DataItems[] | null;
}
export interface ContentViewProps {
    data: DataItems[];
}
export interface SearchProps {
    width: number,
    height: number,
    size: number
}