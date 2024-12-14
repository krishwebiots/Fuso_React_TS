import { CallCalling, Location } from "iconsax-react";
import { ContactEmail, ContactInfoTitle, ContactLabel, ContactLocation } from "../../../../Constants/Constants";
import { dynamicImage, Image } from "../../../../Utils";
import { FC } from "react";

const ContactInfo: FC<{ type?: string }> = ({ type }) => {
  return (
    <div className="detail-sidebar-box">
      {type === "car" ? <h3 className="car-title">{ContactInfoTitle}</h3> : <h4 className="detail-page-title">{ContactInfoTitle}</h4>}
      <div className="profile-title">
        <div className="profile-img">
          <Image src={dynamicImage("job/job-box/3.jpg")} alt="j-3" className="img-fluid" />
        </div>
        <div className="profile-name">
          <h6>{ContactLabel}</h6>
          <span>{ContactEmail}</span>
        </div>
      </div>
      <ul className="location-list">
        <li className="location-item">
          <Location className="iconsax" />
          <span>{ContactLocation}</span>
        </li>
        <li className="location-item">
          <CallCalling className="iconsax" />
          <span>(401) 531-6404</span>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
