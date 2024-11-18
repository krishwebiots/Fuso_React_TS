import CountUp from "react-countup";
import { Col, Container, Label, Row } from "reactstrap";
import { CounterData } from "../../../Data/Demo/CarDemo2";
import { dynamicImage, dynamicNumber, Image } from "../../../Utils";
import RatioImage from "../../../Utils/RatioImage";
import { RentalCar } from "../../../Constants/Constants";

const CarHomeSection = () => {
  return (
    <div className="car2-home-section">
      <RatioImage src={dynamicImage("car2/bg-effect/noise-bg.png")} alt="noise-bg" className="img-fluid bg-img" />
      <div className="quote">
        <ul className="marquee">
          {dynamicNumber(12).map((_, index) => (
            <li key={index}>
              <h2>{RentalCar}</h2>
            </li>
          ))}
        </ul>
      </div>
      <Container>
        <div className="car2-home-box">
          <Row className="justify-content-between">
            <Col lg="7">
              <div className="home-content">
                <Label>#DriveYourDreamAdventure</Label>
                <h1>Discover your Next Adventure on Wheels</h1>
                <p>Discover a world of possibilities and start your next unforgettable journey today.</p>
                <ul className="car-home-counter">
                  {CounterData.map((item, index) => (
                    <li className="counter-box" key={index}>
                      <div className="counter-info">
                        <h3>
                          {item.prefix}
                          <CountUp end={item.end} className="counter-count" delay={0} />
                          {item.suffix}
                        </h3>
                        <h6>{item.label}</h6>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col lg="5" className="d-lg-inline-block d-none">
              <div className="car-home-img">
                <Image src={dynamicImage("car2/home/1.png")} alt="h-1" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default CarHomeSection;
