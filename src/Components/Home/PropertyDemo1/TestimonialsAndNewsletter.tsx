import { Fragment } from "react";
import { Button, Col, Container, Input, InputGroup, Row } from "reactstrap";
import { OurTestimonial, Subscribe } from "../../../Constants/Constants";
import { TestimonialsData } from "../../../Data/Demo/PropertyDemo1";
import { dynamicImage, dynamicSvg, Image } from "../../../Utils";
import CommonHeader from "../Common/CommonHeader";
import { RouteList } from "../../../Routers/RouteList";

const TestimonialsAndNewsletter = () => {
  return (
    <Fragment>
      <section className="property-testimonials-section section-b-space bg-color">
        <Container>
          <CommonHeader title={OurTestimonial} headClass="title-style-1" subClass="horizontal-title" url={RouteList.Pages.Other.Testimonial} view />
          <Row className="justify-content-center gy-lg-0 gy-4">
            {TestimonialsData.map((testimonial, index) => (
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
      <section className="property-newsletter-section pt-0 section-b-space bg-color">
        <div className="overflow-hidden section-t-space">
          <Container>
            <div className="newsletter-bg-effect">
              <Row className="align-items-center">
                <Col lg="5">
                  <div className="newsletter-img" data-aos="zoom-in">
                    <Image src={dynamicImage("property/bg-effect/newsletter-build.png")} alt="newsletter-build" className="img-fluid" />
                  </div>
                </Col>
                <Col lg="7">
                  <div className="newsletter-content">
                    <h2>Trusted real estate properties for you</h2>
                    <p>There are just two things that are crucial. Family is most important, followed by comfort, so let's get started with those two.</p>
                    <InputGroup>
                      <Input type="email" placeholder="Your mail address" />
                      <Button className="btn-solid">{Subscribe}</Button>
                    </InputGroup>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </section>
    </Fragment>
  );
};

export default TestimonialsAndNewsletter;
