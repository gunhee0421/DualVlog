import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { useQuery } from "@tanstack/react-query"
import { getCardNumber } from "@/components/home/function/getCardNumber"
import CardComponent from "@/components/home/component/ItemCard/CardComponent"
import { UserInfo } from "@/api/services/user/model"

const UserBlogs = () => {
  const { data } = useQuery<UserInfo>({
    queryKey: ["userInfo"],
  })

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  if (!data?.result.blog || data.result.blog.length === 0) {
    return (
      <div className="flex h-full justify-center items-center font-pretendard ">
        포스트가 없습니다.
      </div>
    )
  }

  return (
    <div className="mt-[20px]">
      <Slider {...settings}>
        {data.result.blog.map((item, idx) => (
          <CardComponent key={idx} props={item} />
        ))}
      </Slider>
    </div>
  )
}

export default UserBlogs
