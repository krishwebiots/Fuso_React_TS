import { Input, Label } from "reactstrap";
import { FurnishingDetailTitle } from "../../../../../../Constants/Constants";
import { FurnishingDetailListData } from "../../../../../../Data/Pages/Other";

const FurnishingDetail = () => {
  return (
    <div className="user-form-box">
      <h4 className="dashboard-title">{FurnishingDetailTitle}</h4>
      <ul className="user-choose-list">
        {FurnishingDetailListData.map((item, index) => (
          <li className="main-choose-item" key={index}>
            <div className="choose-item">
              <Input type="checkbox" id={`Furnishing-${index}`} />
              <Label className="label-flex" htmlFor={`Furnishing-${index}`}>
                <span>{item}</span>
              </Label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FurnishingDetail;
