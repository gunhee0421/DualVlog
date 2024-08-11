import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardComponent from "../../components/home/ItemCard/CardComponent";
import { debounce } from "next/dist/server/utils";
import { useQuery } from "@tanstack/react-query";
import { list } from "postcss";
import { ContentViewProps, DataItems } from "@/lib/Lib";
import { getCardNumber } from "./function/getCardNumber";

const ContentView: React.FC<ContentViewProps> = ({ data }) => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        centerMode: true,
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

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [data]);

    return (
        <div className="w-full h-screen bg-white">
            <Slider {...settings}>
                {groupedData.map((group, index) => (
                    <div key={index} className="pt-3">
                        <div className="flex flex-wrap justify-center items-center w-full">
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

export default ContentView;
