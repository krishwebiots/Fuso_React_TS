import { Container, Row } from "reactstrap";
import CommonHeader from "../Common/CommonHeader";
import { RouteList } from "../../../Routers/RouteList";
import { CityTitle } from "../../../Constants/Constants";
import { CityData } from "../../../Data/Demo/PropertyDemo2";
import { dynamicImage, Image } from "../../../Utils";
import { Link } from "react-router-dom";

const City = () => {
  return (
    <section className="section-t-space property2-city-section section-b-space">
      <Container>
        <CommonHeader title={CityTitle} headClass="title-style-1 title-style-6" subClass="horizontal-title" url={RouteList.Property.Grid.Property3Grid} view />
        <Row className="gy-xl-0 gy-md-4 g-3 justify-content-center ratio_125">
          {CityData.map((item, index) => (
            <div key={index} className="col-lg-3 col-6">
              <Link to={RouteList.Property.Grid.Property3Grid} className="city-box">
                <div className="city-img">
                  <Image src={dynamicImage(`property2/city/${item.img}`)} alt={`c-${index + 1}`} className="bg-img" />
                </div>
                <div className="city-content">
                  <h4>{item.city}</h4>
                  <h6>{item.properties}</h6>
                </div>
              </Link>
            </div>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default City;
