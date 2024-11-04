import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { ApplyNow, Href, JobHiringTitle } from "../../../Constants/Constants";
import { JobHiringContentData } from "../../../Data/Demo/JobDemo1";
import { useAppSelector } from "../../../ReduxToolkit/Hooks";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicSvg, Image } from "../../../Utils";
import CommonHeader from "../Common/CommonHeader";
import SvgIcon from "../Common/SvgIcon";

const JobHiring = () => {
  const { productItem } = useAppSelector((state) => state.product);
  return (
    <section className="job-hire-section section-b-space">
      <Container>
        <CommonHeader title={JobHiringTitle} content={JobHiringContentData} headClass="title-style-3 text-center" />
        <Row className="gy-4 justify-content-center">
          {productItem
            .filter(({ id }) => [18, 13, 19, 15, 20, 17, 21, 22].includes(id))
            .map((job, index) => (
              <Col xl="3" lg="4" sm="6" data-aos="fade-up" data-aos-duration={200 * (index + 1)} key={index}>
                <div className="hire-box">
                  <div className="save-flex">
                    <span>{job.time}</span>
                    <Link to={Href} className="save-btn">
                      <i className="ri-bookmark-line" />
                    </Link>
                  </div>
                  <div className="hire-info">
                    <div className="hire-icon">
                      {job.image.map((imgSrc, idx) => (
                        <Image src={dynamicSvg(imgSrc)} alt={`job-icon-${idx}`} className="img-fluid" key={idx} />
                      ))}
                    </div>
                    <Link to={RouteList.Job.Grid.JobLeftSidebar}>
                      <h6>{job.company}</h6>
                    </Link>
                    <div className="hire-tag">
                      {job.jobTags.map((tag, idx) => (
                        <label key={idx}>{tag}</label>
                      ))}
                    </div>
                    <Link to={RouteList.Job.Grid.JobLeftSidebar}>
                      <h5>{job.title}</h5>
                    </Link>
                    <ul className="hire-list">
                      <li>{job.location}</li>
                      <li>
                        <SvgIcon iconId="property/sprite/star.svg#star-svg" />
                        {job.rating}
                      </li>
                    </ul>
                    <div className="applied-flex">
                      <span>{job.applied}</span>
                      <Link to={RouteList.Pages.Other.ContactUs1} className="arrow-btn">
                        {ApplyNow} <i className="ri-arrow-right-up-line" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default JobHiring;
