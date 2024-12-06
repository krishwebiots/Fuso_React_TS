import { Export } from "iconsax-react";
import { Button, Input, Label } from "reactstrap";
import { ApplyNow, Email, Name, Phone, ReadyToApply, UploadYourCV } from "../../../../../Constants/Constants";

const Apply = () => {
  return (
    <div className="detail-sidebar-box">
      <h3>{ReadyToApply}</h3>
      <div className="input-box">
        <Label>{Name} *</Label>
        <Input type="text" required />
      </div>
      <div className="input-box">
        <Label>{Phone} *</Label>
        <Input type="number" required />
      </div>
      <div className="input-box">
        <Label>{Email} *</Label>
        <Input type="email" required />
      </div>
      <div className="input-box">
        <Label>{UploadYourCV} *</Label>
        <div className="upload-box">
          <Export className="iconsax" />
          <div>
            <h4>Drop files to attach</h4>
            <span>max file upload size 6 mb</span>
          </div>
          <Input type="file" required />
        </div>
      </div>
      <div className="input-box">
        <Button className="btn-solid">{ApplyNow}</Button>
      </div>
    </div>
  );
};

export default Apply;
