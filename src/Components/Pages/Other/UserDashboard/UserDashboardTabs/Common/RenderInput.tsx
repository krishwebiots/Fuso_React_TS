import { FC, Fragment } from "react";
import { Input, Label } from "reactstrap";
import { InputBoxType } from "../../../../../../Types/OtherType";

const RenderInput: FC<InputBoxType> = ({ label, placeholder, inputType, review }) => {
  return (
    <Fragment>
      {review ? (
        <div className="review-input">
          <Label className="mb-2">{label}</Label>
          <Input type={inputType ? inputType : "text"} placeholder={placeholder} />
        </div>
      ) : (
        <div className="form-input">
          <Label>{label}</Label>
          <div className="select-button arrow-none">
            <Input type={inputType ? inputType : "text"} placeholder={placeholder} />
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default RenderInput;
