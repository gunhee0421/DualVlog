import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardComponent from "@/components/home/ItemCard/CardComponent";
import {debounce} from "next/dist/server/utils";

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

const ContentView = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    
    const [data, setData] = useState([]);
    const [groupedData, setGroupedData] = useState<DataItems[][]>([]);

    useEffect(()=> {
      const fetchData = async() => {
        try{
          const response = await fetch('https://blog/info');
          const result = await response.json();

          if (result.code === 200){
            setData(result.result);
          }
        } catch(error){
          console.log(error);
        }
      }
      fetchData();
    },[])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const updateCardNumber = () => {
                const newGroupedData = getCardNumber(data);
                setGroupedData(newGroupedData);
            };

            updateCardNumber();
            const handleResize = debounce(updateCardNumber, 200);
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
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