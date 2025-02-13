import { Input, Label, Row } from "reactstrap";
import { PriceDetailsTitle, PriceInclude, Registration } from "../../../../../../Constants/Constants";
import { PriceIncludeListData } from "../../../../../../Data/Pages/Other";
import RenderInput from "../../../../../CommonComponents/RenderInput";

const PriceDetails = () => {
  return (
    <div className="user-form-box">
      <h4 className="dashboard-title">{PriceDetailsTitle}</h4>
      <Row className="gy-lg-4 g-3">
        <RenderInput label="Price" inputType="number" placeholder="Enter Your Price" ColClass="col-sm-6 col-md-4" />
        <RenderInput label="Show Price As" inputType="number" placeholder="Enter price As" ColClass="col-sm-6 col-md-4" />
        <div className="include-price-list">
          <span>{PriceInclude}</span>
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
          <Label htmlFor="stamp">{Registration}</Label>
        </div>
        <RenderInput label="Booking / Token" inputType="number" placeholder="Enter Booking Amount" ColClass="col-sm-6" />
        <RenderInput label="Maintenance Charge" inputType="number" placeholder="Enter Maintenance Charge" ColClass="col-sm-6" />
      </Row>
    </div>
  );
};

export default PriceDetails;
