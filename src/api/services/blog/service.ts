import { QueryCache, QueryClient } from "@tanstack/react-query";
import axios from 'axios';
import React from "react";

export const blogService = {
    async blogInfo(client: QueryClient){
        const response = await axios.get("https://blogs")
        return await response.data
    },
    async getBlog(client: QueryClient){
        const response = await axios.get('https://blog?blogId=0bfac118-02f2-4e34-8f38-2b91b5c0b2a8')
        return await response.data
    }
}