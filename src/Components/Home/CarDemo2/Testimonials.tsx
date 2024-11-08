import { Rating } from "react-simple-star-rating";
import { Fragment } from "react/jsx-runtime";
import { Container } from "reactstrap";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Href, TestimonialsTitle } from "../../../Constants/Constants";
import { InstagramSliderData, TestimonialsContentData, TestimonialsData } from "../../../Data/Demo/CarDemo2";
import { dynamicImage, dynamicSvg, Image } from "../../../Utils";
import CommonHeader from "../Common/CommonHeader";
import RatioImage from "../../../Utils/RatioImage";

const Testimonials = () => {
  return (
    <Fragment>
      <section className="car2-testimonial-section section-t-lg-space">
        <Container>
          <CommonHeader title={TestimonialsTitle} content={TestimonialsContentData} headClass="title-style-5" />
          <Swiper pagination={true} slidesPerView={3} spaceBetween={30} modules={[Pagination]} className="car2-testimonial-slider">
            {TestimonialsData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-box">
                  <Image src={dynamicSvg("car2/quote.svg")} alt="quote" className="img-fluid" />
                  <p>{testimonial.text}</p>
                  <div className="profile-flex">
                    <div className="profile-name">
                      <h5>{testimonial.name}</h5>
                      <span>{testimonial.position}</span>
                    </div>
                    <ul className="rating-list">
                      <li>
                        <Rating initialValue={4} size={20} />
                      </li>
                      <li>{testimonial.rating}</li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>
      <section className="section-t-lg-space car2-insta-section">
        <Swiper loop={true} slidesPerView={9} className="car2-insta-slider ratio_square">
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

export default Testimonials;
