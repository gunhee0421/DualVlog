import { useBlogQuery } from "@/api/services/blog/query";
import { Title } from "../component/Tittle";
import { Info } from "../component/User";
import { BlogItem, InsertBlogItem } from "@/api/services/blog/model";
import { useParams } from "next/navigation";
import { UUID } from "crypto";

export const Header = () => {
    const { id } = useParams() as { id: UUID };

    const { isLoading, data, isError } = useBlogQuery(id);

    return (
        <div className="px-[150px]">
            <Title data={data?.result as InsertBlogItem} />
            <Info data={data?.result as InsertBlogItem} />
            <hr className="my-[15px]"></hr>
        </div>
    );
};
