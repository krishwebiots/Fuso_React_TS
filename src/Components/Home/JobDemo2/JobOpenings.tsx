import { ArrowRight } from "iconsax-react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { LatestJobOpenings } from "../../../Constants/Constants";
import { LatestJobOpeningsContent } from "../../../Data/Demo/JobDemo2";
import { useAppSelector } from "../../../ReduxToolkit/Hooks";
import { RouteList } from "../../../Routers/RouteList";
import JobProductBox3 from "../../CommonComponents/ProductBox/JobProductBox3";
import CommonHeader from "../Common/CommonHeader";

const JobOpenings = () => {
  const { productItem } = useAppSelector((state) => state.product);
  return (
    <section className="job-box-section section-b-space">
      <Container>
        <CommonHeader title={LatestJobOpenings} content={LatestJobOpeningsContent} headClass="title-style-4" />
        <Row className="gy-4">
          {productItem
            .filter((e) => [17, 20, 25, 27, 28].includes(e.id))
            .map((job, index) => (
              <Col xxl="4" lg="6" data-aos="fade-up" data-aos-duration={200 * (index + 1)} key={index}>
                <JobProductBox3 jobData={job} />
              </Col>
            ))}
          <Col xxl="4" lg="6" data-aos="fade-up" data-aos-duration={1200}>
            <div className="job-box dark-job-box">
              <span className="border-bg" />
              <div className="see-all-box">
                <h2>135+</h2>
                <Link to={RouteList.Job.Grid.JobLeftSidebar}>
                  Browse to all Job
                  <ArrowRight />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default JobOpenings;
