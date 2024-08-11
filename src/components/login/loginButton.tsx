"use client";

import {
    useMutation,
    UseMutationResult,
    useQuery,
} from "@tanstack/react-query";
import Image from "next/image";
import Login from "../home/Login";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setLogin } from "@/redux/slice/loginSlice";

interface LoginButtonProps {
    service: string;
    imageUrl: string;
    altText: string;
    bgColor: string;
}

const LoginApi = async (service: string) => {
    const response = await fetch(`https://login/${service}`);

    if (!response.ok) {
        throw new Error("api error");
    }
    return response.json();
};

const LoginButton: React.FC<LoginButtonProps> = ({
    service,
    imageUrl,
    altText,
    bgColor,
}) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { mutate, isError, error, data } = useMutation({
        mutationFn: () => LoginApi(service),
        onSuccess: (data) => {
            dispatch(setLogin(data?.result?.accessToken));
            router.push("/");
        },
        onError: (error) => {
            alert("Login Fail");
        },
    });

    return (
        <div
            className={`flex flex-row w-fit font-pretendard px-16 py-3 rounded-3xl justify-center items-center ${bgColor} my-2 transform hover:scale-105 transition duration-300 cursor-pointer hover:shadow-md`}
            onClick={() => mutate()}
        >
            <Image src={imageUrl} width={40} height={55} alt={altText} />
            <p className="text-black font-bold text-2xl">
                continue with {service}
            </p>
        </div>
    );
};

export default LoginButton;
