import { Rating } from "react-simple-star-rating";
import { Col, Container, Row } from "reactstrap";
import { ExploreByTestimonials } from "../../../Constants/Constants";
import { TestimonialData } from "../../../Data/Demo/PropertyDemo2";
import { dynamicSvg, Image } from "../../../Utils";
import CommonHeader from "../Common/CommonHeader";
import { RouteList } from "../../../Routers/RouteList";

const Testimonial = () => {
  return (
    <section className="car2-testimonial-section section-t-lg-space">
      <Container>
        <CommonHeader title={ExploreByTestimonials} headClass="title-style-1 title-style-6" subClass="horizontal-title" url={RouteList.Pages.Other.Testimonial} view />
        <Row className="justify-content-center g-4">
          {TestimonialData.map((item, index) => (
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
  );
};

export default Testimonial;
