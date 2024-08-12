import { QueryCache, QueryClient } from "@tanstack/react-query";
import axios from 'axios';
import { headers } from "next/headers";
import React from "react";

export const userService = {
    async userInfo(client: QueryClient, token: any){
        const response = await axios.get("https://user", {
            headers: {
                'Authorization' : `Bearer ${token}`
            }
        })
        if (response.status!==200){
            throw new Error("fetch error");
        }
        return await response.data;
    }
}