import { CallCalling, Location } from "iconsax-react";
import { ContactInfoTitle } from "../../../../../Constants/Constants";
import { dynamicImage, Image } from "../../../../../Utils";

const ContactInfo = () => {
  return (
    <div className="detail-sidebar-box">
      <h4 className="detail-page-title">{ContactInfoTitle}</h4>
      <div className="profile-title">
        <div className="profile-img">
          <Image src={dynamicImage("job/job-box/3.jpg")} alt="j-3" className="img-fluid" />
        </div>
        <div className="profile-name">
          <h6>Albert Crawford</h6>
          <span>contact@gmail.com</span>
        </div>
      </div>
      <ul className="location-list">
        <li className="location-item">
          <Location className="iconsax" />
          <span>Meester Westerhofdijk</span>
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
