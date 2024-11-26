import { FC, Fragment, useEffect, useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Href } from "../../../../Constants/Constants";
import { ProductSwiperSetting } from "../../../../Data/Demo/CarDemo1";
import { SliderFor, SliderNav } from "../../../../Data/Property";
import { ProductBoxType } from "../../../../Types/ProductType";
import { dynamicImage, dynamicVideo } from "../../../../Utils";
import RatioImage from "../../../../Utils/RatioImage";

const PropertyBoxSlider: FC<ProductBoxType> = ({ view, data }) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current) swiperRef.current.init();
  }, []);
  return (
    <Fragment>
      {view === "video" ? (
        <video autoPlay muted loop>
          <source src={dynamicVideo(data.video ? data.video : "1.mp4")} type="video/mp4" />
          <source src={dynamicVideo(data.video ? data.video : "1.mp4")} type="video/ogg" />
        </video>
      ) : view === "multiple" ? (
        <Fragment>
          <Swiper className="thumb-main-slider ratio_65" {...SliderFor} thumbs={{ swiper: thumbsSwiper }}>
            {data.image.map((testimonial, index) => (
              <SwiperSlide key={index} className="bg-size">
                <RatioImage src={dynamicImage(testimonial)} alt="featured-img" className="bg-img" />
              </SwiperSlide>
            ))}
            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />
          </Swiper>
          <Swiper className="thumb-sub-slider" {...SliderNav} onSwiper={setThumbsSwiper} onInit={(swiper: SwiperType) => (swiperRef.current = swiper)}>
            {data.image.map((testimonial, i) => (
              <SwiperSlide key={i}>
                <a href={Href}>
                  <RatioImage src={dynamicImage(testimonial)} alt="featured-img" className="img-fluid" />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </Fragment>
      ) : view === "image" ? (
        <RatioImage src={dynamicImage(data.image[0])} alt="featured-img" className="img-fluid bg-img" />
      ) : (
        <Swiper {...ProductSwiperSetting} onInit={(swiper: SwiperType) => (swiperRef.current = swiper)}>
          {data.image.map((testimonial, index) => (
            <SwiperSlide key={index} className="bg-size">
              <RatioImage src={dynamicImage(testimonial)} alt="featured-img" className="img-fluid bg-img" />
            </SwiperSlide>
          ))}
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
        </Swiper>
      )}
    </Fragment>
  );
};

export default PropertyBoxSlider;
