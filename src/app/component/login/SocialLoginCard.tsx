import Image from "next/image";
import Link from "next/link";

const SocialLoginCard = ({className, image, text, href}) => {
    return (
        <Link href={href}>
            <div className={`${className} flex flex-row bg-white w-fit px-20 py-1 rounded-3xl justify-center items-center hover:border-blue-500`}>
                <Image src={image} width={35} height={25} alt={"error"}/>
                <p className="text-black font-bold">continue with {text}</p>
            </div>
        </Link>
    );
}
export default SocialLoginCard;