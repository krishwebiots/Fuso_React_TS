import { Col, Input, Label, Row } from "reactstrap";
import { PriceDetailsTitle } from "../../../../../../Constants/Constants";
import { PriceIncludeListData } from "../../../../../../Data/Pages/Other";
import RenderInput from "../Common/RenderInput";

const PriceDetails = () => {
  return (
    <div className="user-form-box">
      <h4 className="dashboard-title">{PriceDetailsTitle}</h4>
      <Row className="g-4">
        <Col sm="6">
          <RenderInput label="Price" inputType="number" placeholder="Enter Your Price" />
        </Col>
        <Col sm="6">
          <RenderInput label="Show Price As" inputType="number" placeholder="Enter price As" />
        </Col>
        <div className="include-price-list">
          <span>Price Include</span>
          <ul className="user-choose-list">
            {PriceIncludeListData.map((item, index) => (
              <li className="main-choose-item" key={index}>
                <div className="choose-item">
                  <Input type="checkbox" id={`Price-${index}`} />
                  <Label className="label-flex" htmlFor={`Price-${index}`}>
                    <span>{item}</span>
                  </Label>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-checkbox">
          <Input type="checkbox" id="stamp" />
          <Label htmlFor="stamp">Stamp Duty &amp; Registration charges excluded.</Label>
        </div>
        <Col sm="6">
          <RenderInput label="Booking / Token" inputType="number" placeholder="Enter Booking Amount" />
        </Col>
        <Col sm="6">
          <RenderInput label="Maintenance Charge" inputType="number" placeholder="Enter Maintenance Charge" />
        </Col>
      </Row>
    </div>
  );
};

export default PriceDetails;
