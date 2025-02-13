import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { FC, Fragment } from "react";
import { Rating } from "react-simple-star-rating";
import { Col, Container, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { ExploreByTestimonials, OurTestimonial, PeopleSays, TestimonialsTitle } from "../../../Constants/Constants";
import { TestimonialsContentData, TestimonialsSwiperSetting } from "../../../Data/Demo/CarDemo1";
import { Job3BoxSlider } from "../../../Data/Demo/CarDemo2";
import { DarkTestimonialSlider, TestimonialsContent } from "../../../Data/Demo/JobDemo2";
import { TestimonialsData } from "../../../Data/Demo/Testimonials";
import { RouteList } from "../../../Routers/RouteList";
import { TestimonialsType } from "../../../Types/HomeDemoType";
import { dynamicImage, dynamicSvg, Image } from "../../../Utils";
import CommonHeader from "./CommonHeader";

const Testimonials: FC<TestimonialsType> = ({ type, animation, title }) => {
  return (
    <Fragment>
      {/* Car Demo-1 */}
      {type === "car_demo1" && (
        <section className="car-testimonials-section section-b-space">
          <Container>
            <CommonHeader title={title || TestimonialsTitle} content={TestimonialsContentData} headClass="title-style-2" animation={animation} />
            <Swiper {...TestimonialsSwiperSetting}>
              {TestimonialsData.CarDemo1.map((testimonial, index) => (
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
                  <ArrowLeft2 className="iconsax" />
                </div>
                <div className="swiper-button-next">
                  <ArrowRight2 className="iconsax" />
                </div>
              </div>
            </Swiper>
          </Container>
        </section>
      )}

      {/* Car Demo-2 */}
      {type === "car_demo2" && (
        <section className="car2-testimonial-section section-t-lg-space">
          <Container>
            <CommonHeader title={TestimonialsTitle} content={TestimonialsContentData} headClass="title-style-5" />
            <Swiper {...Job3BoxSlider} className="car2-testimonial-slider">
              {TestimonialsData.CarDemo2.map((testimonial, index) => (
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
      )}
       {/* about3 */}
       {type === "about3" && (
        <section className="car2-testimonial-section car2-about-testimonial section-t-lg-space">
          <Container>
            <CommonHeader title={TestimonialsTitle} content={TestimonialsContentData} headClass="title-style-5" />
            <Swiper {...Job3BoxSlider} className="car2-testimonial-slider">
              {TestimonialsData.CarDemo2.map((testimonial, index) => (
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
      )}

      {/* Job Demo-2 */}
      {type === "job_demo2" && (
        <section className="dark-testimonial-section">
          <Container>
            <CommonHeader title={PeopleSays} content={TestimonialsContent} headClass="title-style-4" />
            <Swiper {...DarkTestimonialSlider} className="dark-testimonial-slider">
              {TestimonialsData.JobDemo2.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-box">
                    <span className="border-bg" />
                    <p>{testimonial.text}</p>
                    <div className="testimonial-rating-flex">
                      <div className="testimonial-profile">
                        <Image src={dynamicImage("dark-job/testimonial/1.jpg")} alt={testimonial.name} className="img-fluid" />
                        <div className="testimonial-name">
                          <h5>{testimonial.name}</h5>
                          <span>{testimonial.role}</span>
                        </div>
                      </div>
                      <ul className="rating-list">
                        <li>
                          <Rating initialValue={5} size={18} fillColor="#3260e7" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
        </section>
      )}

      {/* Property Demo-1 */}
      {type === "property_demo1" && (
        <section className="property-testimonials-section section-b-space bg-color">
          <Container>
            <CommonHeader title={OurTestimonial} headClass="title-style-1" subClass="horizontal-title" url={RouteList.Pages.Other.Testimonial} view />
            <Row className="justify-content-center gy-lg-0 gy-4">
              {TestimonialsData.PropertyDemo1.map((testimonial, index) => (
                <Col lg="4" md="6" key={index}>
                  <div className="testimonials-box">
                    <div className="testimonials-profile">
                      <Image src={dynamicImage(`property/testimonial/${index + 1}.jpg`)} alt="testimonial-img" className="img-fluid" />
                      <div>
                        <h3>{testimonial.name}</h3>
                        <h6>{testimonial.position}</h6>
                      </div>
                    </div>
                    <div className="testimonial-content">
                      <p>{testimonial.content}</p>
                      <Image src={dynamicSvg("property/quote.svg")} alt="quote" className="img-fluid" />
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      )}

      {/* Property Demo-2 */}
      {type === "property_demo2" && (
        <section className="car2-testimonial-section section-t-lg-space">
          <Container>
            <CommonHeader title={ExploreByTestimonials} headClass="title-style-1 title-style-6" subClass="horizontal-title" url={RouteList.Pages.Other.Testimonial} view />
            <Row className="justify-content-center g-4">
              {TestimonialsData.PropertyDemo2.map((item, index) => (
                <Col xl="4" md="6" key={index}>
                  <div className="testimonial-box">
                    <Image src={dynamicSvg("property2/quote.svg")} alt="quote" className="img-fluid" />
                    <p>{item.content}</p>
                    <div className="profile-flex">
                      <div className="profile-name">
                        <h5>{item.title}</h5>
                      </div>
                      <ul className="rating-list">
                        <li>
                          <Rating initialValue={4} size={20} />
                        </li>
                        <li>4.5</li>
                      </ul>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      )}

      {/* Testimonials */}
      {type === "testimonials" && (
        <section className="car-testimonials-section testimonials-page-section section-b-space">
          <Container>
            <CommonHeader title={TestimonialsTitle} content={TestimonialsContentData} headClass="content-title" />
            <Row className="gy-4">
              {TestimonialsData.CarDemo1.map((testimonial, index) => (
                <Col xl="4" md="6" key={index}>
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
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      )}
    </Fragment>
  );
};

export default Testimonials;
