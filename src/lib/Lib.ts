import { UUID } from "crypto";

export interface UserInfo {
    id: UUID;
    email: string;
    name: string;
    userlogo: string;
    introduce: string;
    stack: Array<string> | [];
}
export interface UserResponse {
    state: number;
    result: UserInfo;
}
export interface DataItems {
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