import { Row } from "reactstrap";
import { AreaTitle } from "../../../../../../Constants/Constants";
import RenderInput from "../../../../../CommonComponents/RenderInput";

const Area = () => {
  return (
    <div className="user-form-box">
      <h4 className="dashboard-title">{AreaTitle}</h4>
      <Row className="gy-lg-4 g-3">
        <RenderInput label="Covered Area" placeholder="Enter Covered Area" ColClass="col-sm-6" inputType="number" />
        <RenderInput label="Plot Area" placeholder="Enter Plot Area" ColClass="col-sm-6" />
        <RenderInput label="Plot Length" placeholder="Enter Plot Length" ColClass="col-sm-6" />
        <RenderInput label="Plot Breadth" placeholder="Enter Plot Breadth" ColClass="col-sm-6" />
      </Row>
    </div>
  );
};

export default Area;
