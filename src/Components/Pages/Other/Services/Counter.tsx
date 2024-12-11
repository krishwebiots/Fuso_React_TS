import { Container, Row } from "reactstrap";
import { dynamicImage } from "../../../../Utils";
import RatioImage from "../../../../Utils/RatioImage";
import CountUp from "react-countup";
import { CounterData } from "../../../../Data/Pages/Other";

const Counter = () => {
  return (
    <section className="counter-section">
      <Container>
        <div className="counter-bg-img">
          <RatioImage src={dynamicImage("car/bg-effect/service-bg.png")} alt="counter-bg" className="img-fluid bg-img" />
          <Row className="justify-content-center gy-4 gy-lg-0">
            {CounterData.map((item, index) => (
              <div className="col-lg-3 col-sm-6" key={index}>
                <div className="counter-box">
                  <div>
                    <h2>
                      <CountUp end={item.end} className="counter" delay={0} />
                      {item.suffix ? item.suffix : <i className="ri-add-line" />}
                    </h2>
                    <h4>{item.label}</h4>
                  </div>
                </div>
              </div>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Counter;
