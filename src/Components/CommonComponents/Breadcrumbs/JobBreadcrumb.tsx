import { FC, Fragment } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { ApplyNow, BusinessDevelopment } from "../../../Constants/Constants";
import { InfoListData, SocialListData } from "../../../Data/Job";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicImage, dynamicSvg, Image } from "../../../Utils";
import RatioImage from "../../../Utils/RatioImage";

const JobBreadcrumb: FC<{ type?: string }> = ({ type }) => {
  return (
    <Fragment>
      {type === "style_2" ? (
        <div className="job-breadcrumbs-section">
          <RatioImage src={dynamicImage("job/bg-effect/detail-breadcrumbs.jpeg")} alt="detail-breadcrumbs" className="bg-img" />
        </div>
      ) : type === "style_3" || type === "style_4" ? (
        <div className={`job-breadcrumbs-section ${type === "style_3" ? "breadcrumbs-style-1" : ""}`}>
          <Container>
            <h2>{BusinessDevelopment}</h2>
            <ul className="breadcrumb-list">
              <li>Vacancy: 3</li>
              <li>Full Time</li>
              <li>Experience: 0-1.5 Years</li>
              <li>Location: Hollowland</li>
            </ul>
            {type === "style_3" && (
              <ul className="social-list">
                {SocialListData.map((item, index) => (
                  <li key={index}>
                    <Link to={item.url} target="_blank">
                      <i className={item.icon} />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </Container>
        </div>
      ) : (
        <div className="breadcrumbs-style-2">
          <Container>
            <Row className="mx-auto">
              <Col xl="7" lg="6" className="p-0">
                <div className="breadcrumbs-content">
                  <ul className="breadcrumb-type-list">
                    <li>Home</li>
                    <li>
                      <i className="ri-arrow-right-double-fill" />
                    </li>
                    <li>Collection</li>
                    <li>
                      <i className="ri-arrow-right-double-fill" />
                    </li>
                    <li>Single-job</li>
                  </ul>
                  <h2>Business Development</h2>
                  <p>We’re excited to announce that we’re looking for a talented Business Development to join our fun, transparent, and collaborative team!</p>
                  <Link to={RouteList.Pages.Other.ContactUs1} className="btn-solid">
                    {ApplyNow}
                  </Link>
                  <ul className="info-list">
                    {InfoListData.map((item, index) => (
                      <li key={index}>
                        <Image src={dynamicSvg(`job/home/${item.image}.svg`)} alt="develop" className="img-fluid" />
                        <div>
                          <span>{item.title}</span>
                          <h5>{item.text}</h5>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
              <Col xl="5" lg="6" className="d-lg-block d-none p-0">
                <div className="breadcrumbs-img">
                  <Image src={dynamicImage("job/home/detail-breadcrumbs-img.jpeg")} alt="detail-breadcrumbs-img" className="img-fluid" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </Fragment>
  );
};

export default JobBreadcrumb;
