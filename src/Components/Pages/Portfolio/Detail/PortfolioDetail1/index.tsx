import { Fragment } from "react";
import { Container } from "reactstrap";
import { BrandFlexData, ChallengeData, OurApproachData, ResultsAndImpactData, SolutionData } from "../../../../../Data/Pages/Portfolio";
import { RouteList } from "../../../../../Routers/RouteList";
import { dynamicImage } from "../../../../../Utils";
import RatioImage from "../../../../../Utils/RatioImage";
import Breadcrumbs from "../../../../CommonComponents/Breadcrumbs";
import PortfolioDetailContent from "./PortfolioDetailContent";

const PortfolioDetail1Container = () => {
  return (
    <Fragment>
      <Breadcrumbs title="Portfolio" url={RouteList.Home.CarDemo1} mainClass="page-breadcrumbs-section" />
      <section className="section-b-space portfolio-detail-section">
        <Container>
          <div className="top-section section-b-space ratio_45">
            <div className="main-top-image">
              <RatioImage src={dynamicImage("portfolio/detail-images/1.jpg")} alt="pd-1" className="img-fluid bg-img" />
            </div>
            <div className="brand-flex">
              {BrandFlexData.map((item, index) => (
                <span key={index}>
                  <strong>{item.title}: </strong>
                  {item.text}
                </span>
              ))}
            </div>
          </div>
          <PortfolioDetailContent title="The Challenge" image="2" data={ChallengeData} />
          <PortfolioDetailContent title="Our Approach" image="3" data={OurApproachData} rightSide />
          <PortfolioDetailContent title="The Solution" image="4" data={SolutionData} />
          <PortfolioDetailContent title="Results & Impact" image="5" data={ResultsAndImpactData} rightSide />
        </Container>
      </section>
    </Fragment>
  );
};

export default PortfolioDetail1Container;
