import { FC, Fragment, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Href } from "../../../../Constants/Constants";
import { ProductSwiperSetting } from "../../../../Data/Demo/CarDemo1";
import { SliderFor, SliderNav } from "../../../../Data/Property";
import { PropertyBoxSliderType } from "../../../../Types/ProductType";
import { dynamicImage, dynamicVideo } from "../../../../Utils";
import RatioImage from "../../../../Utils/RatioImage";

const PropertyBoxSlider: FC<PropertyBoxSliderType> = ({ view, data }) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [nav1, setNav1] = useState<Slider | null>();
  const [nav2, setNav2] = useState<Slider | null>();

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
          <Slider className="thumb-main-slider ratio_65" {...SliderFor} asNavFor={nav2!} ref={(slider1) => setNav1(slider1)}>
            {data.image.map((testimonial, index) => (
              <RatioImage src={dynamicImage(testimonial)} alt="featured-img" className="bg-img" key={index} />
            ))}
          </Slider>
          <Slider className="thumb-sub-slider" {...SliderNav} asNavFor={nav1!} ref={(slider2) => setNav2(slider2)}>
            {data.image.map((testimonial, i) => (
              <a href={Href} key={i}>
                <RatioImage src={dynamicImage(testimonial)} alt="featured-img" className="img-fluid" />
              </a>
            ))}
          </Slider>
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
