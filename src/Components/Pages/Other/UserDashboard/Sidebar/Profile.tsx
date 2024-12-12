import { Edit2 } from "iconsax-react";
import { dynamicImage, Image } from "../../../../../Utils";

const Profile = () => {
  return (
    <div className="main-sidebar-content">
      <div className="profile-img">
        <Image src={dynamicImage("car/person/2.jpg")} alt="p-2" className="img-fluid" />
        <Edit2 className="iconsax" />
      </div>
      <div className="profile-content">
        <h4>Larry Bishop</h4>
        <h6>LarryMBishop@rhyta.com</h6>
        <h6>773-531-4157</h6>
      </div>
    </div>
  );
};

export default Profile;
