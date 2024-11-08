import { Col, Container, Row } from "reactstrap";
import { OurTestimonial } from "../../../Constants/Constants";
import { TestimonialsData } from "../../../Data/Demo/PropertyDemo1";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicImage, dynamicSvg, Image } from "../../../Utils";
import CommonHeader from "../Common/CommonHeader";

const Testimonials = () => {
  return (
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
  );
};

export default Testimonials;
