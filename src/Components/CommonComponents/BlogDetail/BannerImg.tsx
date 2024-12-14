import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { FC, Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BlogDetailSlider, BlogSliderData, QuoteBoxContent } from "../../../Data/Pages/Blog";
import { dynamicImage } from "../../../Utils";
import RatioImage from "../../../Utils/RatioImage";

const BannerImg: FC<{ type?: string }> = ({ type }) => {
  return (
    <Fragment>
      {type === "video" ? (
        <div className="banner-img">
          <iframe src="https://www.youtube.com/embed/C3G6_Tqr5K8" title="A Guide to Creating Real Estate Blog Posts" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
        </div>
      ) : type === "audio" ? (
        <div className="banner-img">
          <iframe allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1780764978&color=%23188aec&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" title="A Guide to Creating Real Estate Blog Posts" />
        </div>
      ) : type === "slider" ? (
        <div className="position-relative">
          <Swiper className="blog-detail-slider" {...BlogDetailSlider}>
            {BlogSliderData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="banner-img">
                  <RatioImage src={dynamicImage(item)} alt="b-1" className="img-fluid bg-img" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-flex box-arrow">
            <div className="swiper-button-prev blog-prev-detail">
              <ArrowLeft2 className="iconsax" />
            </div>
            <div className="swiper-button-next blog-next-detail">
              <ArrowRight2 className="iconsax" />
            </div>
          </div>
        </div>
      ) : type === "quote_box" ? (
        <div className="blog-info quote-box">
          <h2>
            <i className="ri-double-quotes-l" />
            {QuoteBoxContent}
            <i className="ri-double-quotes-r" />
          </h2>
        </div>
      ) : (
        <div className="banner-img">
          <RatioImage src={dynamicImage("blog/4.jpg")} alt="b-1" className="img-fluid bg-img" />
        </div>
      )}
    </Fragment>
  );
};

export default BannerImg;
