import { Col, Container, Row } from "reactstrap";
import { JobHiringTitle } from "../../../Constants/Constants";
import { JobHiringContentData } from "../../../Data/Demo/JobDemo1";
import { useAppSelector } from "../../../ReduxToolkit/Hooks";
import JobProductBox2 from "../../CommonComponents/ProductBox/JobProductBox2";
import CommonHeader from "../Common/CommonHeader";

const JobHiring = () => {
  const { productItem } = useAppSelector((state) => state.product);
  return (
    <section className="job-hire-section section-b-space">
      <Container>
        <CommonHeader title={JobHiringTitle} content={JobHiringContentData} headClass="title-style-3 text-center" />
        <Row className="gy-4 justify-content-center">
          {productItem
            .filter(({ id }) => [17, 19, 21, 22, 23, 24, 25, 26].includes(id))
            .map((job, index) => (
              <Col xl="3" lg="4" sm="6" data-aos="fade-up" data-aos-duration={200 * (index + 1)} key={index}>
                <JobProductBox2 data={job} />
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default JobHiring;
