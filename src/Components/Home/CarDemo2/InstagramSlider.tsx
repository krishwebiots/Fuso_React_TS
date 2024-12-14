import { Fragment } from "react/jsx-runtime";
import { Swiper, SwiperSlide } from "swiper/react";
import { Href } from "../../../Constants/Constants";
import { car2InstagramSlider, InstagramSliderData } from "../../../Data/Demo/CarDemo2";
import { dynamicImage } from "../../../Utils";
import RatioImage from "../../../Utils/RatioImage";

const InstagramSlider = () => {
  return (
    <Fragment>
      <section className="section-t-lg-space car2-insta-section">
        <Swiper {...car2InstagramSlider} className="car2-insta-slider ratio_square">
          {InstagramSliderData.map((item, index) => (
            <SwiperSlide key={index}>
              <a href={Href} className="insta-img">
                <RatioImage src={dynamicImage(`car2/insta/${item}.jpg`)} alt="i-1" className="bg-img" />
                <div className="insta-overlay">
                  <i className="ri-instagram-line" />
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </Fragment>
  );
};

export default InstagramSlider;
