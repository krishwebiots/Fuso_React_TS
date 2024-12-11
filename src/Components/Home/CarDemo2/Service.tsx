import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { OurDedicationContent, ServiceListData } from "../../../Data/Demo/CarDemo2";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicImage, dynamicSvg, Image } from "../../../Utils";
import { LearnMore, OurDedication } from "../../../Constants/Constants";
import CommonHeader from "../Common/CommonHeader";
import { FC } from "react";
import { AboutImagesData } from "../../../Data/Demo/JobDemo1";

const Service: FC<{ about?: boolean }> = ({ about }) => {
  return (
    <section className={`${about ? "car2-about-section" : "section-t-lg-space section-b-lg-space"} car2-service-section`}>
      <Container>
        <Row className={about ? "justify-content-center gy-4" : "align-items-center gy-sm-4 gy-3"}>
          {about ? (
            <Col lg="5" md="8">
              <div className="about-img">
                <Image src={dynamicSvg("job/a-1.svg")} alt="a-1" className="img-fluid about-object" />
                <Row className="gx-lg-4 gx-sm-5">
                  {[...AboutImagesData].reverse().map((colImages, colIndex) => (
                    <Col xs="6" key={colIndex} className={colIndex === 1 ? "text-end" : ""}>
                      {colImages.map((image, imgIndex) => (
                        <Image key={imgIndex} src={dynamicImage(image.src)} alt="a-1" className="img-fluid" />
                      ))}
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          ) : (
            <Col lg="6">
              <div className="service-img">
                <Image src={dynamicImage("car2/service-img.jpg")} alt="service-img" className="img-fluid" />
              </div>
            </Col>
          )}
          <Col lg="6">
            <div className="service-content">
              <CommonHeader title={OurDedication} content={OurDedicationContent} />
              <ul className="service-list">
                {ServiceListData.map((item, index) => (
                  <li key={index}>
                    <div className="service-icon">
                      <Image src={dynamicSvg(item.src)} alt="image" className="img-fluid" />
                    </div>
                    <h6>{item.text}</h6>
                  </li>
                ))}
              </ul>
              <Link to={RouteList.Pages.Other.AboutUs1} className="btn-pills">
                {LearnMore}
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Service;
