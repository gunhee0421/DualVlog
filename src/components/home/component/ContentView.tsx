import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { debounce } from "next/dist/server/utils"
import { useQuery } from "@tanstack/react-query"
import { list } from "postcss"
import { BlogItem, BlogsInfo } from "@/api/services/blog/model"
import { getCardNumber } from "../function/getCardNumber"
import CardComponent from "./ItemCard/CardComponent"
import { NonBlogPage } from "./NonBlogPage"
import { blob } from "stream/consumers"

const ContentView = ({ data }: { data: BlogItem[] }) => {
  const settings = {
    dots: true,
    infinite: data.length > 10 ? true : false,
    arrows: false,
    speed: 500,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const [groupedData, setGroupedData] = useState<BlogItem[][]>([])

  useEffect(() => {
    setGroupedData(getCardNumber(data))
  }, [data])

  useEffect(() => {
    const handleResize = debounce(() => {
      setGroupedData(getCardNumber(data))
    }, 200)

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [data])

  return (
    <div className="w-full h-screen min-h-[80vh] bg-white">
      <Slider {...settings}>
        {groupedData.map((group, index) => (
          <div key={index} className="pt-3 h-full">
            <div className="flex flex-wrap justify-center items-center w-full h-full">
              {group.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={`${groupedData[1] ? "h-1/2" : "h-[75vh]"}`}
                >
                  <CardComponent props={item} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ContentView
