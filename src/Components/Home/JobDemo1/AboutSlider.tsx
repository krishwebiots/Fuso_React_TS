import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { useEffect, useRef } from "react";
import { Container } from "reactstrap";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { AboutSliderTitle } from "../../../Constants/Constants";
import { AboutSliderContentData, AboutSliderSetting, AboutSlidesData } from "../../../Data/Demo/JobDemo1";
import { dynamicImage, dynamicNumber, dynamicSvg, Image } from "../../../Utils";
import CommonHeader from "../Common/CommonHeader";
import SvgIcon from "../../../Utils/SvgIcon";
const AboutSlider = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current) swiperRef.current.init();
  }, []);
  return (
    <section className="about-slider-section section-b-space">
      <Container>
        <CommonHeader title={AboutSliderTitle} content={AboutSliderContentData} headClass="title-style-3 text-center" />
        <Swiper {...AboutSliderSetting} onInit={(swiper: SwiperType) => (swiperRef.current = swiper)}>
          {AboutSlidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="about-slider-content">
                <Image src={dynamicSvg("job/quote.svg")} alt="quote" className="img-fluid quote-img" />
                <p>{slide.quoteText}</p>
                <ul className="about-rating-list">
                  {dynamicNumber(5).map((item) => (
                    <li key={item}>
                      <SvgIcon iconId="property/sprite/star.svg#star-svg" />
                    </li>
                  ))}
                </ul>
                <div className="profile-flex">
                  <Image src={dynamicImage(slide.profileImgSrc)} alt={slide.profileName} className="img-fluid" />
                  <div>
                    <h4>{slide.profileName}</h4>
                    <h6>{slide.profilePosition}</h6>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-flex car-arrow">
            <div className="swiper-button-prev job-about-prev">
              <ArrowLeft2 />
            </div>
            <div className="swiper-button-next job-about-next">
              <ArrowRight2 />
            </div>
          </div>
        </Swiper>
      </Container>
    </section>
  );
};

export default AboutSlider;
