import { Col, Row } from "reactstrap";
import { PropertyDetailsTitle, PropertyType } from "../../../../../../Constants/Constants";
import RenderDropdown from "../Common/RenderDropdown";
import RenderInput from "../Common/RenderInput";

const PropertyDetails: React.FC = () => {
  return (
    <div className="user-form-box">
      <h4 className="dashboard-title">{PropertyDetailsTitle}</h4>
      <Row className="gy-lg-4 g-3">
        <Col md="4" sm="6">
          <RenderDropdown label={PropertyType} placeholder="Enter Property Type" items={["Apartment", "House", "Villa", "Office", "Farmhouse"]} />
        </Col>
        <Col md="4" sm="6">
          <RenderDropdown label={"Property Status"} placeholder="Enter Property Status" items={["Sale", "Rent", "PG"]} />
        </Col>
        <Col md="4" sm="6">
          <RenderInput label="Any City" placeholder="Enter Your City" />
        </Col>
        <Col md="8" sm="6">
          <RenderInput label="Address" placeholder="Enter Your Address" />
        </Col>
        <Col md="4" sm="6">
          <RenderInput label="Any Country" placeholder="Enter Your Country" />
        </Col>
      </Row>
    </div>
  );
};

export default PropertyDetails;
