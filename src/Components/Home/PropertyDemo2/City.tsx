import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { CityTitle } from "../../../Constants/Constants";
import { CityData } from "../../../Data/Demo/PropertyDemo2";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicImage } from "../../../Utils";
import RatioImage from "../../../Utils/RatioImage";
import CommonHeader from "../Common/CommonHeader";

const City = () => {
  return (
    <section className="section-t-space property2-city-section section-b-space">
      <Container>
        <CommonHeader title={CityTitle} headClass="title-style-1 title-style-6" subClass="horizontal-title" url={RouteList.Property.Grid.Property3Grid} view />
        <Row className="gy-xl-0 gy-md-4 g-3 justify-content-center ratio_125">
          {CityData.map((item, index) => (
            <Col lg="3" xs="6" key={index}>
              <Link to={RouteList.Property.Grid.Property3Grid} className="city-box">
                <div className="city-img">
                  <RatioImage src={dynamicImage(`property2/city/${item.img}`)} alt={`c-${index + 1}`} className="bg-img" />
                </div>
                <div className="city-content">
                  <h4>{item.city}</h4>
                  <h6>{item.properties}</h6>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default City;
