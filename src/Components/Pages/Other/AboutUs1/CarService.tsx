import { Col, Container, Row } from "reactstrap";
import { BrowseCarService } from "../../../../Constants/Constants";
import { ServiceData } from "../../../../Data/Demo/CarDemo1";
import { dynamicSvg, Image } from "../../../../Utils";
import CommonHeader from "../../../Home/Common/CommonHeader";

const CarCategory = () => {
  return (
    <section className="job-category-section car-about-category section-b-space">
      <Container>
        <CommonHeader title={BrowseCarService} content="Search and connect with the right candidates faster." headClass="title-style-3 text-center" />
        <Row className="gy-4">
          {ServiceData.map((service, index) => (
            <Col xl="3" lg="4" sm="6" key={index}>
              <div className="category-box">
                <Image src={dynamicSvg("job/job-box/dots-category.svg")} alt="dots-category" className="img-fluid dot-img" />
                <div className="category-icon">{service.icon}</div>
                <div className="category-title">
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CarCategory;
