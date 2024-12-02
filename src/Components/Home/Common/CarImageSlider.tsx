import { useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { CarSlider, CarSliderNav } from "../../../Data/Demo/CarDemo1";
import { dynamicImage, dynamicNumber, Image } from "../../../Utils";
import { Href } from "../../../Constants/Constants";

const CarImageSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="home-img-slider">
      <Swiper className="car-slider-main" {...CarSlider} thumbs={{ swiper: thumbsSwiper }}>
        {dynamicNumber(3).map((item, index) => (
          <SwiperSlide key={index}>
            <div className="main-car-img">
              <Image src={dynamicImage(`car/home-img/${item}.png`)} className="img-fluid" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper className="car-slider" {...CarSliderNav} onSwiper={setThumbsSwiper}>
        {dynamicNumber(3).map((item, index) => (
          <SwiperSlide key={index}>
            <a href={Href}>
              <Image src={dynamicImage(`car/home-img/${item}.png`)} className="img-fluid" />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarImageSlider;
