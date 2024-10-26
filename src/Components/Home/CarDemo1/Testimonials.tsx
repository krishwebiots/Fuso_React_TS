import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { useEffect, useRef } from "react";
import { Container } from "reactstrap";
import { Swiper as SwiperType } from "swiper"; // Import Swiper type
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialsTitle } from "../../../Constants/Constants";
import { TestimonialsContentData, TestimonialsData, TestimonialsSwiperSetting } from "../../../Data/Demo/CradDemo1";
import { dynamicImage, Image } from "../../../Utils";
import CommonHeader from "../Common/CommonHeader";

const Testimonials = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current) swiperRef.current.init();
  }, []);

  return (
    <section className="car-testimonials-section section-b-space">
      <Container>
        <CommonHeader title={TestimonialsTitle} content={TestimonialsContentData} headClass="title-style-2" animation />
        <Swiper {...TestimonialsSwiperSetting} onInit={(swiper: SwiperType) => (swiperRef.current = swiper)}>
          {TestimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonials-box">
                <div className="testimonials-image">
                  <div className="gradient-box" />
                  <div className="white-box" />
                  <Image src={dynamicImage(testimonial.image)} alt={`t-${index + 1}`} className="img-fluid" />
                </div>
                <div className="testimonials-content">
                  <h4>{testimonial.name}</h4>
                  <h6>- {testimonial.location}</h6>
                  <p>"{testimonial.testimonial}"</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-flex car-arrow">
            <div className="swiper-button-prev">
              <ArrowLeft2 />
            </div>
            <div className="swiper-button-next">
              <ArrowRight2 />
            </div>
          </div>
        </Swiper>
      </Container>
    </section>
  );
};

export default Testimonials;
