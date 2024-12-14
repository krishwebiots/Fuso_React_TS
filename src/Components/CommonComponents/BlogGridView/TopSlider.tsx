import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BlogData, BlogTopSlider } from "../../../Data/Pages/Blog";
import BlogGridBox from "./BolgBox/BlogGridBox";
import { BestTopArticles } from "../../../Constants/Constants";

const TopSlider = () => {
  return (
    <Fragment>
      <div className="detail-flex-title">
        <h3>{BestTopArticles}</h3>
        <div className="swiper-flex car-arrow">
          <div className="swiper-button-prev blog-prev-swiper">
            <ArrowLeft2 className="iconsax" />
          </div>
          <div className="swiper-button-next blog-next-swiper">
            <ArrowRight2 className="iconsax" />
          </div>
        </div>
      </div>
      <Swiper className="blog-breadcrumbs-slider ratio3_2" {...BlogTopSlider}>
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
