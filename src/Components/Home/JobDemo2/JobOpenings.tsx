import { ArrowRight, Clock, Location } from "iconsax-react";
import { Link } from "react-router-dom";
import { Col, Container, Label, Row } from "reactstrap";
import { ApplyNow, LatestJobOpenings } from "../../../Constants/Constants";
import { LatestJobOpeningsContent } from "../../../Data/Demo/JobDemo2";
import { useAppSelector } from "../../../ReduxToolkit/Hooks";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicImage, dynamicNumber, dynamicSvg, Image } from "../../../Utils";
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
                <div className="job-box dark-job-box">
                  <span className="border-bg" />
                  <div className="job-title-flex">
                    <div className="job-title">
                      <div className="job-icon">
                        {job.image.map((imgSrc, idx) => (
                          <Image src={dynamicSvg(imgSrc)} alt={`job-${idx}`} className="img-fluid" key={idx} />
                        ))}
                      </div>
                      <Link to={RouteList.Job.Detail.JobDetail1} className="job-detail">
                        <span>{job.company}</span>
                        <h5>{job.title}</h5>
                      </Link>
                    </div>
                    <div className="post-time">
                      <Clock />
                      <span>{job.time}</span>
                    </div>
                  </div>
                  <p>{job.description}</p>
                  <div className="btn-flex">
                    <ul className="round-photo">
                      {dynamicNumber(4).map((photo, idx) => (
                        <li key={idx}>
                          <Image src={dynamicImage(`job/job-box/${photo}.jpg`)} alt={`job-${job.id}-${idx}`} className="img-fluid" />
                        </li>
                      ))}
                    </ul>
                    <div className="post-time">
                      <Location />
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <div className="job-tag">
                    <Label>Part Time</Label>
                    <Label>Full Time</Label>
                    <Link to={RouteList.Pages.Other.ContactUs1} className="border-pills">
                      {ApplyNow}
                    </Link>
                  </div>
                </div>
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
