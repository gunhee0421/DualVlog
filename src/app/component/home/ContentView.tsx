import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardComponent from "@/app/component/home/ItemCard/CardComponent";
import {debounce} from "next/dist/server/utils";

const ContentView = () => {
    const data = [
        {
            img:"/images/home/toss.png",
            title: "토스 안드로이드 개발자 합격 후기",
            content: "꽁꽁 얼어붙은 취업시장을 뚫고 아크플레이스로 걸어갑니다.",
            date: "2024-07-06",
            logo: "/images/home/logo.png",
            name: "이현우",
            like: 80,
            comment: 7
        },
        {
            img:"/images/home/human.png",
            title: "비전공자 백엔드 취업 성공!",
            content: "경영학부 졸업생도 취업할 수 있습니다! 개발 시작부터 취업까지 모든 것 공개!",
            date: 20240705,
            logo: "/images/home/logo.png",
            name: "전반숙",
            like: 152,
            comment: 39
        },
        {
            img:"/images/home/woman.png",
            title: "웹 개발 인턴을 마치며,,,,",
            content: "개발 인턴을 이제 갓 마친, 대학생 프론트엔드\n개발자 오소현, Garden입니다! 올해 1월부터 6\n월까지 스타트업 웹 개발 인턴 생활의 회고…",
            date: 20240729,
            logo: "/images/home/logo.png",
            name: "osohyun0224",
            like: 33,
            comment: 0
        },
        {
            img:"/images/home/toss.png",
            title: "토스 안드로이드 개발자 합격 후기",
            content: "꽁꽁 얼어붙은 취업시장을 뚫고 아크플레이스로 걸어갑니다.",
            date: "2024-07-06",
            logo: "/images/home/logo.png",
            name: "이현우",
            like: 80,
            comment: 7
        },
        {
            img:"/images/home/human.png",
            title: "비전공자 백엔드 취업 성공!",
            content: "경영학부 졸업생도 취업할 수 있습니다! 개발 시작부터 취업까지 모든 것 공개!",
            date: 20240705,
            logo: "/images/home/logo.png",
            name: "전반숙",
            like: 152,
            comment: 39
        },
        {
            img:"/images/home/woman.png",
            title: "웹 개발 인턴을 마치며,,,,",
            content: "개발 인턴을 이제 갓 마친, 대학생 프론트엔드\n개발자 오소현, Garden입니다! 올해 1월부터 6\n월까지 스타트업 웹 개발 인턴 생활의 회고…",
            date: 20240729,
            logo: "/images/home/logo.png",
            name: "osohyun0224",
            like: 33,
            comment: 0
        },
        {
            img:"/images/home/toss.png",
            title: "토스 안드로이드 개발자 합격 후기",
            content: "꽁꽁 얼어붙은 취업시장을 뚫고 아크플레이스로 걸어갑니다.",
            date: "2024-07-06",
            logo: "/images/home/logo.png",
            name: "이현우",
            like: 80,
            comment: 7
        },
        {
            img:"/images/home/human.png",
            title: "비전공자 백엔드 취업 성공!",
            content: "경영학부 졸업생도 취업할 수 있습니다! 개발 시작부터 취업까지 모든 것 공개!",
            date: 20240705,
            logo: "/images/home/logo.png",
            name: "전반숙",
            like: 152,
            comment: 39
        },
        {
            img:"/images/home/woman.png",
            title: "웹 개발 인턴을 마치며,,,,",
            content: "개발 인턴을 이제 갓 마친, 대학생 프론트엔드\n개발자 오소현, Garden입니다! 올해 1월부터 6\n월까지 스타트업 웹 개발 인턴 생활의 회고…",
            date: 20240729,
            logo: "/images/home/logo.png",
            name: "osohyun0224",
            like: 33,
            comment: 0
        },
        {
            img:"/images/home/toss.png",
            title: "토스 안드로이드 개발자 합격 후기",
            content: "꽁꽁 얼어붙은 취업시장을 뚫고 아크플레이스로 걸어갑니다.",
            date: "2024-07-06",
            logo: "/images/home/logo.png",
            name: "이현우",
            like: 80,
            comment: 7
        },
        {
            img:"/images/home/toss.png",
            title: "토스 안드로이드 개발자 합격 후기",
            content: "꽁꽁 얼어붙은 취업시장을 뚫고 아크플레이스로 걸어갑니다.",
            date: "2024-07-06",
            logo: "/images/home/logo.png",
            name: "이현우",
            like: 80,
            comment: 7
        },
        {
            img:"/images/home/human.png",
            title: "비전공자 백엔드 취업 성공!",
            content: "경영학부 졸업생도 취업할 수 있습니다! 개발 시작부터 취업까지 모든 것 공개!",
            date: 20240705,
            logo: "/images/home/logo.png",
            name: "전반숙",
            like: 152,
            comment: 39
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const [groupedData, setGroupedData] = useState(getCardNumber(data));
    useEffect(() => {
        const handleResize = debounce(() => {
            setGroupedData(getCardNumber(data));
        }, 200);

        window.addEventListener('resize', handleResize);

        // cleanup 함수에서 이벤트 리스너 제거
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [data]);

    return (
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
    );
};
const getCardNumber = (data) =>{
    const width = window.innerWidth-192;
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
    console.log(width, height, cardsPerCol, cardsPerRow ,cardsPage, result);
    return result;
}

export default ContentView;
