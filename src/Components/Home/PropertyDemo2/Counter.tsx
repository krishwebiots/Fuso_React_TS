import CountUp from "react-countup";
import { Container } from "reactstrap";
import { CounterData } from "../../../Data/Demo/PropertyDemo2";

const Counter = () => {
  return (
    <div className="property2-counter-section">
      <Container>
        <ul className="counter-list">
          {CounterData.map((item, index) => (
            <li className="counter-box" key={index}>
              <div className="counter-flex">
                <CountUp end={item.end} className="counter" delay={0} />
                {item.suffix}
                <i className="ri-add-line" />
              </div>
              <h5>{item.label}</h5>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default Counter;
