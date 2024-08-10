import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardComponent from "../../components/home/ItemCard/CardComponent";
import { debounce } from "next/dist/server/utils";
import { useQuery } from "@tanstack/react-query";
import { list } from "postcss";
import { ContentViewProps, DataItems } from "@/lib/Lib";

const ContentView: React.FC<ContentViewProps> = ({ data }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const [groupedData, setGroupedData] = useState<DataItems[][]>([]);

    useEffect(() => {
        setGroupedData(getCardNumber(data));
    }, [data]);

    useEffect(() => {
        const handleResize = debounce(() => {
            setGroupedData(getCardNumber(data));
        }, 200);

        window.addEventListener("resize", handleResize);

        // cleanup 함수에서 이벤트 리스너 제거
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [data]);

    return (
        <div className="w-full h-screen bg-white">
            <Slider {...settings}>
                {groupedData.map((group, index) => (
                    <div key={index}>
                        <div className="flex flex-wrap">
                            {group.map((item, itemIndex) => (
                                <div key={itemIndex} className="h-1/2">
                                    <CardComponent props={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};
const getCardNumber = (data: any) => {
    if (typeof window == "undefined") {
        return [];
    }

    const width = window.innerWidth - 192;
    const height = window.innerHeight;
    const cardRow = 338;
    const cardCol = 370;
    const cardsPerRow = Math.floor(width / cardRow);
    const cardsPerCol = Math.floor(height / cardCol);
    const cardsPage = cardsPerRow * cardsPerCol;

    const result = [];
    for (let i = 0; i < data.length; i += cardsPage) {
        result.push(data.slice(i, i + cardsPage));
    }
    return result;
};

export default ContentView;
