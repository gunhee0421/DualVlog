import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardComponent from "../../components/home/ItemCard/CardComponent";
import {debounce} from "next/dist/server/utils";
import { useQuery } from '@tanstack/react-query';
import { list } from 'postcss';

interface DataItems {
  img: string,
  title: string,
  content: string,
  data: Date,
  logo: string,
  name: string,
  like: number,
  comment: number
}
interface ApiResponse {
  code: number,
  result: DataItems[]
}

const fetchBlog = async() : Promise<ApiResponse> => {
  const response = await fetch('https://blog/info');
  if (!response.ok){
    throw new Error("fetch error")
  }
  return await response.json();
}

const ContentView = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const [groupedData, setGroupedData] = useState<DataItems[][]>([]);
    
    const { isLoading, data, isError, error } = useQuery({
      queryKey: ['getBlog'],
      queryFn: fetchBlog,
    });

    useEffect(() => {
      if (data?.code==200) {
        setGroupedData(getCardNumber(data?.result))
      }
    }, [data]);

    useEffect(() => {
        const handleResize = debounce(() => {
            setGroupedData(getCardNumber(data?.result));
        }, 200);

        window.addEventListener('resize', handleResize);

        // cleanup 함수에서 이벤트 리스너 제거
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [data]);

    if (isLoading){
      return <div>Loading</div>
    }
    if (isError) {
      return <div>Error: {error?.message}</div>
    }

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
const getCardNumber = (data:any) =>{
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
}

export default ContentView;``