import { Col, Row } from "reactstrap";
import { PropertyDetailsTitle, PropertyType } from "../../../../../../Constants/Constants";
import RenderInput from "../../../../../CommonComponents/RenderInput";
import RenderDropdown from "../Common/RenderDropdown";

const PropertyDetails = () => {
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
        <RenderInput label="Any City" placeholder="Enter Your City" ColClass="col-md-4 col-sm-6" />
        <RenderInput label="Address" placeholder="Enter Your Address" ColClass="col-md-8 col-sm-6" />
        <RenderInput label="Any Country" placeholder="Enter Your Country" ColClass="col-md-4 col-sm-6" />
      </Row>
    </div>
  );
};

export default PropertyDetails;
