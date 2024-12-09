import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { Fragment, useEffect, useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BlogData, BlogTopSlider } from "../../../Data/Pages/Blog";
import BlogGridBox from "./BolgBox/BlogGridBox";

const TopSlider = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current) swiperRef.current.init();
  }, []);
  return (
    <Fragment>
      <div className="detail-flex-title">
        <h3>Best Top Articles</h3>
        <div className="swiper-flex car-arrow">
          <div className="swiper-button-prev blog-prev-swiper">
            <ArrowLeft2 className="iconsax" />
          </div>
          <div className="swiper-button-next blog-next-swiper">
            <ArrowRight2 className="iconsax" />
          </div>
        </div>
      </div>
      <Swiper className="blog-breadcrumbs-slider ratio3_2" {...BlogTopSlider} onInit={(swiper: SwiperType) => (swiperRef.current = swiper)}>
        {BlogData.map((data, index) => (
          <SwiperSlide className={`w-sm-100 `} key={index}>
            <BlogGridBox data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
};

export default TopSlider;
