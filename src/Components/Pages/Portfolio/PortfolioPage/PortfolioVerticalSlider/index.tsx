import { Swiper, SwiperSlide } from "swiper/react";
import { PortfolioVerticalSlider } from "../../../../../Data/Pages/Portfolio";
import { dynamicImage, dynamicNumber } from "../../../../../Utils";
import RatioImage from "../../../../../Utils/RatioImage";

const PortfolioVerticalSliderContainer = () => {
  return (
    <section className="portfolio-section portfolio-parallax-section p-0">
      <Swiper className="portfolio-vertical-slider" {...PortfolioVerticalSlider} direction={"vertical"}>
        {dynamicNumber(5).map((item, index) => (
          <SwiperSlide key={index}>
            <div className="portfolio-vertical-image">
              <RatioImage src={dynamicImage(`portfolio/full-img/${item}.jpg`)} alt="portfolio-image1" className="bg-img" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PortfolioVerticalSliderContainer;
