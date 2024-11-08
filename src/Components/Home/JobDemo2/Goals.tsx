import { Col, Container, Row } from "reactstrap";
import { StepsGoalData } from "../../../Data/Demo/JobDemo2";

const Goals = () => {
  return (
    <section className="section-b-space dark-goal-section">
      <Container>
        <div className="horizontal-title">
          <h2>
            Get your <span>Dream Job</span> and Make your Own Goals.
          </h2>
          <p>To obtain the job you desire, follow these procedures. We'll assist you in locating a career that aligns with your interests.</p>
        </div>
        <div className="base-color-box">
          <Row className="g-xl-4 gy-sm-5 gy-4 justify-content-center">
            {StepsGoalData.map((step, index) => (
              <Col xl="3" lg="4" sm="6" key={index}>
                <div className="goal-box">
                  <span>{step.number}</span>
                  <div className="goal-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Goals;
