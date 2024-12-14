import { Export } from "iconsax-react";
import { Input, Label } from "reactstrap";
import { ApplyNow, DropFilesToAttach, Email, MaxFileUpload, Name, Phone, ReadyToApply, UploadYourCV } from "../../../../Constants/Constants";
import RenderInput from "../../../CommonComponents/RenderInput";

const Apply = () => {
  return (
    <div className="detail-sidebar-box">
      <h3>{ReadyToApply}</h3>
      <RenderInput label={`${Name} *`} mainClass="input-box" review />
      <RenderInput label={`${Phone} *`} mainClass="input-box" inputType="number" review />
      <RenderInput label={`${Email} *`} mainClass="input-box" inputType="email" review />
      <div className="input-box">
        <Label>{UploadYourCV} *</Label>
        <div className="upload-box">
          <Export className="iconsax" />
          <div>
            <h4>{DropFilesToAttach}</h4>
            <span>{MaxFileUpload}</span>
          </div>
          <Input type="file" required />
        </div>
      </div>
      <RenderInput button={ApplyNow} mainClass="input-box" review />
    </div>
  );
};

export default Apply;
