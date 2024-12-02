import { Col, Row } from "reactstrap";
import { CarFeatureData } from "../../../../../../Data/Car";
import { FeatureTitle } from "../../../../../../Constants/Constants";

const Feature = () => {
  return (
    <div className="detail-box" id="feature">
      <h3 className="car-title">{FeatureTitle}</h3>
      <Row className="g-md-4 g-3">
        {CarFeatureData.map((category, index) => (
          <Col md="4" sm="6" key={index}>
            <div className="car-with-list">
              <h5>{category.title}</h5>
              <ul className="feature-list">
                {category.features.map((feature, idx) => (
                  <li key={idx}>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Feature;
