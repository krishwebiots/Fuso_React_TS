import { Col, Container, Row } from "reactstrap";
import { JobHereTitle } from "../../../Constants/Constants";
import { JobHereContentData } from "../../../Data/Demo/JobDemo1";
import { useAppSelector } from "../../../ReduxToolkit/Hooks";
import CommonHeader from "../Common/CommonHeader";
import JobCard from "../Common/JobCard";

const JobHere = () => {
  const { productItem } = useAppSelector((state) => state.product);

  return (
    <section className="job-box-section section-b-space">
      <Container>
        <CommonHeader title={JobHereTitle} content={JobHereContentData} headClass="title-style-3 text-center" />
        <Row className="g-4">
          {productItem
            .filter((e) => [16, 17, 18, 19, 20, 21].includes(e.id))
            .map((job, index) => (
              <Col xl="4" md="6" data-aos="fade-up" data-aos-duration={200 * (index + 1)} key={index}>
                <JobCard jobData={job} />
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default JobHere;
