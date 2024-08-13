import { QueryCache, QueryClient } from "@tanstack/react-query";
import axios from 'axios';
import React from "react";

export const blogService = {
    async blogInfo(client: QueryClient){
        const response = await axios.get("https://blogs")
        return await response.data
    },
    async getBlog(client: QueryClient, id: string){
        const response = await axios.get(`https://blog?blogId=${id}`)
        return await response.data
    }
}