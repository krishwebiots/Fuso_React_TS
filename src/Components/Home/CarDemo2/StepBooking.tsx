import { Col, Container, Row } from "reactstrap";
import { StepBookingTitle } from "../../../Constants/Constants";
import { StepBookingContentData, StepsData } from "../../../Data/Demo/CarDemo2";
import CommonHeader from "../Common/CommonHeader";

const StepBooking = () => {
  return (
    <section className="section-t-lg-space car2-step-section">
      <Container>
        <CommonHeader title={StepBookingTitle} content={StepBookingContentData} headClass="title-style-5" />
        <div className="step-main-box">
          <Row className="gy-sm-4 gy-2">
            {StepsData.map(({ step, title, description }, index) => (
              <Col xxl="3" sm="6" key={index}>
                <div className="step-box">
                  <span>{step}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default StepBooking;
