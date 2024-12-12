import { Col, Row } from "reactstrap";
import { AreaTitle } from "../../../../../../Constants/Constants";
import RenderInput from "../Common/RenderInput";

const Area = () => {
  return (
    <div className="user-form-box">
      <h4 className="dashboard-title">{AreaTitle}</h4>
      <Row className="gy-lg-4 g-3">
        <Col sm="6">
          <RenderInput label="Covered Area" placeholder="Enter Covered Area" inputType="number" />
        </Col>
        <Col sm="6">
          <RenderInput label="Plot Area" placeholder="Enter Plot Area" />
        </Col>
        <Col sm="6">
          <RenderInput label="Plot Length" placeholder="Enter Plot Length" />
        </Col>
        <Col sm="6">
          <RenderInput label="Plot Breadth" placeholder="Enter Plot Breadth" />
        </Col>
      </Row>
    </div>
  );
};

export default Area;
