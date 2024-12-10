import { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import { LuxuryCars } from "../../../../../Constants/Constants";
import { BrandFlexData, ChallengeContent, LuxuryCarsContent, OurApproachContent, ResultsAndImpactContent, SolutionContent } from "../../../../../Data/Pages/Portfolio";
import { RouteList } from "../../../../../Routers/RouteList";
import { dynamicImage } from "../../../../../Utils";
import RatioImage from "../../../../../Utils/RatioImage";
import Breadcrumbs from "../../../../CommonComponents/Breadcrumbs";
import PortfolioDetailContent from "../Common/PortfolioDetailContent";

const PortfolioDetail2Container = () => {
  return (
    <Fragment>
      <Breadcrumbs title="Portfolio" url={RouteList.Home.CarDemo1} mainClass="page-breadcrumbs-section" />
      <section className="section-b-space portfolio-detail-section dark-portfolio">
        <Container>
          <div className="top-section section-b-space ratio_45">
            <Row>
              <Col lg="8" className="ratio_65">
                <div className="main-top-image">
                  <RatioImage src={dynamicImage("portfolio/detail-images/1.jpg")} alt="pd-1" className="img-fluid bg-img" />
                </div>
              </Col>
              <Col lg="4">
                <div className="right-portfolio-image ratio_65">
                  <div className="portfolio-content-box">
                    <span className="border-bg" />
                    <h3>{LuxuryCars}</h3>
                    <p>{LuxuryCarsContent}</p>
                  </div>
                  <div className="sub-top-image">
                    <RatioImage src={dynamicImage("portfolio/detail-images/4.jpg")} alt="pd-2" className="img-fluid bg-img" />
                  </div>
                </div>
              </Col>
            </Row>
            <div className="brand-flex">
              {BrandFlexData.map((item, index) => (
                <span key={index}>
                  <strong>{item.title}: </strong>
                  {item.text}
                </span>
              ))}
            </div>
          </div>
          <PortfolioDetailContent title="The Challenge" image="2" data={ChallengeContent} dark />
          <PortfolioDetailContent title="Our Approach" image="3" data={OurApproachContent} rightSide dark />
          <PortfolioDetailContent title="The Solution" image="4" data={SolutionContent} dark />
          <PortfolioDetailContent title="Results & Impact" image="5" data={ResultsAndImpactContent} rightSide dark />
        </Container>
      </section>
    </Fragment>
  );
};

export default PortfolioDetail2Container;
