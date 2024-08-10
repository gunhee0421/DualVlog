import Image from "next/image";

const UserStackLogo = ({ stack }: any) => {
    return (
        <Image
            className=" mr-[5px]"
            src={`https://cdn.simpleicons.org/${stack}`}
            width={34}
            height={34}
            alt="error"
        />
    );
};
export default UserStackLogo;
