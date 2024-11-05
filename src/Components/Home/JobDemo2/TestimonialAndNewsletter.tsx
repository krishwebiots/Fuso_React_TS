import { Rating } from "react-simple-star-rating";
import { Button, Col, Container, Input, Row } from "reactstrap";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { PeopleSays, Subscribe } from "../../../Constants/Constants";
import { TestimonialsContent, TestimonialsData } from "../../../Data/Demo/JobDemo2";
import { dynamicImage, Image } from "../../../Utils";
import CommonHeader from "../Common/CommonHeader";

const TestimonialAndNewsletter = () => {
  return (
    <div className="combine-bg overflow-hidden bg-size" style={{ backgroundImage: `url(${dynamicImage("dark-job/bg-effect/newsletter-bg.png")})` }}>
      <Image src={dynamicImage("dark-job/bg-effect/newsletter-bg.png")} alt="newsletter-bg" className="bg-img" style={{ display: "none" }} />
      <section className="dark-testimonial-section">
        <Container>
          <CommonHeader title={PeopleSays} content={TestimonialsContent} headClass="title-style-4" />
          <Swiper pagination={true} slidesPerView={3} spaceBetween={30} modules={[Pagination]} className="dark-testimonial-slider">
            {TestimonialsData.map((testimonial, index) => (
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
      <section className="dark-newsletter-section">
        <Container>
          <div className="newsletter-box">
            <Row className="justify-content-between align-items-center">
              <Col lg="5">
                <h2 className="text-white text-lg-start text-center mb-lg-0 mb-3">Find your Next Grate Job Opportunity!</h2>
              </Col>
              <Col lg="6">
                <div className="search-pill">
                  <Input type="text" placeholder="Enter your email address" />
                  <Button className="btn-pills">{Subscribe}</Button>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default TestimonialAndNewsletter;
