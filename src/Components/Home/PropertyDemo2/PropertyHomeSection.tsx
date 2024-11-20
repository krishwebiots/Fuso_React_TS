import { Col, Container, Row } from "reactstrap";
import { dynamicImage } from "../../../Utils";
import RatioImage from "../../../Utils/RatioImage";
import LogoSection from "../Common/LogoSection";
import SearchTabList from "../Common/SearchTabList";

const PropertyHomeSection = () => {
  return (
    <div className="property2-section overflow-hidden">
      <RatioImage src={dynamicImage("property2/home-img.jpg")} alt="home-img" className="bg-img" />
      <Container>
        <Row className="justify-content-between align-items-center gy-lg-0 gy-4">
          <Col lg="7">
            <div className="home-content">
              <h1>
                Discover suitable <span>real estate</span> for your family
              </h1>
              <p>This is where you may locate a dream place for you of any sort anywhere in the world at an inexpensive price.</p>
            </div>
          </Col>
          <Col xxl="4" lg="5">
            <div className="home-form-box">
              <SearchTabList showTab={[1, 2, 10, 11]} pills button form icon />
            </div>
          </Col>
        </Row>
      </Container>
      <LogoSection swiperClass="logo-car2-slider" />
    </div>
  );
};

export default PropertyHomeSection;
