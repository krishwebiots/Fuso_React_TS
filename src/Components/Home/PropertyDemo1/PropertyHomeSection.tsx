import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { PropertyHomeSliderSetting } from "../../../Data/Demo/PropertyDemo1";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicImage, dynamicNumber, Image } from "../../../Utils";
import SearchTabList from "../Common/SearchTabList";

const PropertyHomeSection = () => {
  return (
    <div className="property-home-section">
      <Container>
        <Row className="m-auto g-0">
          <Col xl="10" lg="11">
            <div className="home-content">
              <h1>Discover suitable real estate for your family</h1>
              <p>This is where you may locate a dream place for you of any sort anywhere in the world at an inexpensive price.</p>
              <Link to={RouteList.Property.Grid.Property3Grid} className="btn-solid btn-border">
                Discover more
              </Link>
              <div className="property-home-tab">
                <SearchTabList endPoint={2} showTab={[1, 2, 10, 11]} tabs button />
              </div>
            </div>
          </Col>
          <div className="property-home-img">
            <Swiper {...PropertyHomeSliderSetting} className="property-home-slider">
              {dynamicNumber(3).map((item, index) => (
                <SwiperSlide key={index}>
                  <Image src={dynamicImage(`property/home/${item}.jpg`)} alt={`h-${item}`} className="img-fluid" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default PropertyHomeSection;
