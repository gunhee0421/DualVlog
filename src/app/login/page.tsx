import SocialLoginCard from "@/app/component/login/SocialLoginCard";

const LoginPage = () => {
    return(
        <div className="flex flex-col w-screen h-screen items-center px-20 py-4 justify-center">
            <h1 className="font-black text-4xl my-5">Log in to Dual Vlog</h1>
            <SocialLoginCard image="/images/login/github.png" text="GitHub" href="/login/github" className="my-2" />
            <SocialLoginCard image="/images/login/google.png" text="Google" href="/login/google" className="bg-blue-300 my-2" />
            <SocialLoginCard image="/images/login/kakao.png" text="Kakao" href="/login/kakao" className="bg-yellow-300 my-2" />
        </div>
    )
}
export default LoginPage;