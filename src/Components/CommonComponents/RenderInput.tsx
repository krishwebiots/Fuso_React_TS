import { FC, Fragment } from "react";
import { Input, Label } from "reactstrap";
import { Href } from "../../Constants/Constants";
import { InputBoxType } from "../../Types/OtherType";

const RenderInput: FC<InputBoxType> = ({ label, placeholder, inputType, review, button, input, ColClass, mainClass, inputClass }) => {
  return (
    <Fragment>
      {ColClass ? (
        <div className={ColClass}>
          {review ? (
            <div className={mainClass ? mainClass : "review-input"}>
              {label && <Label className="mb-2">{label}</Label>}
              {button ? (
                <a href={Href} className="btn-solid">
                  {button}
                </a>
              ) : (
                !input && <Input className={inputClass ? inputClass : ""} type={inputType ? inputType : "text"} placeholder={placeholder} />
              )}
            </div>
          ) : (
            <div className={mainClass ? mainClass : "form-input"}>
              {label && <Label>{label}</Label>}
              <div className="select-button arrow-none">
                <Input type={inputType ? inputType : "text"} placeholder={placeholder} />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className={mainClass ? mainClass : "review-input"}>
          {label && <Label className="mb-2">{label}</Label>}
          {button ? (
            <a href={Href} className="btn-solid">
              {button}
            </a>
          ) : (
            !input && <Input className={inputClass ? inputClass : ""} type={inputType ? inputType : "text"} placeholder={placeholder} />
          )}
        </div>
      )}
    </Fragment>
  );
};
export default RenderInput;
