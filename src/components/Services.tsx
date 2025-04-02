import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import ourServicesData from "@/data/services.json";
import { Card } from "./Card";

const NextArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div
      className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 cursor-pointer"
      onClick={onClick}
    >
      <HiArrowNarrowRight className="w-10 h-10 text-forest-green" />
    </div>
  );
};

const PrevArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div
      className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 cursor-pointer"
      onClick={onClick}
    >
      <HiArrowNarrowLeft className="w-10 h-10 text-forest-green" />
    </div>
  );
};

export const Services = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      id="our-services"
      className="flex flex-col justify-between w-full xl:py-[84px] xl:px-4"
    >
      <div className="absolute right-[20px] w-[100px] h-[100px] rounded-br-[50%] rounded-tl-[50%] bg-mist-green " />
      <div className="absolute right-[130px]  w-[80px] h-[80px] rounded-tr-[50%] rounded-bl-[50%] bg-forest-green " />
      <h1 className="flex text-forest-green font-libre xl:text-[60px] font-semibold xl:pb-[60px] xl:pl-[50px]">
        Our Services
      </h1>

      <div className="relative w-full max-w-5xl mx-auto">
        <Slider {...settings}>
          {ourServicesData.map((item) => (
            <div key={item.id} className="px-2">
              <Card
                src={item.img}
                title={item.service}
                description={item.description}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
