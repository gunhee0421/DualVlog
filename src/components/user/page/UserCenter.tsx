import UserLogoBar from "./UserLogoBar";

const UserCenter = () => {
    return (
        <div className="flex flex-col w-[1000px]">
            <UserLogoBar />
            <hr className=" mt-[40px] mb-[20px] border-t-3"></hr>
        </div>
    );
};
export default UserCenter;
