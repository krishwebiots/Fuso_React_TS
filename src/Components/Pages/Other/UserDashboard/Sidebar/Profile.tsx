import { Edit2 } from "iconsax-react";
import { dynamicImage, Image } from "../../../../../Utils";
import { ProfileEmail, ProfileName, ProfileNumber } from "../../../../../Constants/Constants";

const Profile = () => {
  return (
    <div className="main-sidebar-content">
      <div className="profile-img">
        <Image src={dynamicImage("car/person/2.jpg")} alt="p-2" className="img-fluid" />
        <Edit2 className="iconsax" />
      </div>
      <div className="profile-content">
        <h4>{ProfileName}</h4>
        <h6>{ProfileEmail}</h6>
        <h6>{ProfileNumber}</h6>
      </div>
    </div>
  );
};

export default Profile;
