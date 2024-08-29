import { UUID } from "crypto";
import { BlogItem } from "../blog/model";

export interface LoginButtonProps {
    service: string;
    imageUrl: string;
    altText: string;
    bgColor: string;
}