import { UUID } from "crypto";
import { useParams, useRouter } from "next/navigation";

export const TopModal: React.FC<{ id: UUID }> = ({ id }) => {
    const router = useRouter();
    return (
        <div className="absolute top-full left-0 mt-1 w-[120px] bg-white p-2 rounded-md shadow-lg z-10">
            <button
                className="block w-full text-left px-2 py-1 text-blue-500 hover:bg-blue-50 hover:font-bold"
                onClick={() => {
                    router.push(`write/${id}`);
                }}
            >
                수정하기
            </button>
            <button
                className="block w-full text-left px-2 py-1 text-red-500 hover:bg-red-50 hover:font-bold"
                onClick={() => alert("Delete blog")}
            >
                삭제하기
            </button>
        </div>
    );
};
