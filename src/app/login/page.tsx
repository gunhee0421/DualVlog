import LoginButton from "@/components/login/loginButton";

const LoginPage = () => {
    return (
        <div className="flex flex-col w-screen h-screen items-center px-20 py-4 bg-gray-50">
            <h1 className="font-black text-6xl mt-[200px] font-pretendard">
                Log in to
            </h1>
            <h1 className="text-gray-500 text-5xl mb-[50px] font-pretendard tracking-tighter font-extrabold">
                Daul Velog
            </h1>
            <LoginButton
                service="github"
                imageUrl="/images/login/github.png"
                altText="GitHub login"
                bgColor="bg-white"
            />
            <LoginButton
                service="google"
                imageUrl="/images/login/google.png"
                altText="Google login"
                bgColor="bg-sky-200"
            />
            <LoginButton
                service="kakao"
                imageUrl="/images/login/kakao.png"
                altText="Kakao login"
                bgColor="bg-yellow-300"
            />
        </div>
    );
};

export default LoginPage;
``;
