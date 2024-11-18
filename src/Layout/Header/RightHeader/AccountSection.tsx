import { ProfileCircle } from "iconsax-react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Label } from "reactstrap";
import { Href, MyActive, SignOut } from "../../../Constants/Constants";
import { AccountData } from "../../../Data/Layout/Header";
import { RouteList } from "../../../Routers/RouteList";
import { RightHeaderType } from "../../../Types/LayoutType";
import LanguageSection from "./LanguageSection";

const AccountSection: FC<RightHeaderType> = ({ part }) => {
  return (
    <div className="icon-side">
      <div className="login-flex onhover-dropdown">
        <a href={Href} className="login-icon">
          <ProfileCircle />
          <span>Account</span>
          <i className="ri-arrow-down-wide-line" />
        </a>
        <ul className="login-list onhover-list">
          <li className="active-item">
            <span>{MyActive}</span>
          </li>
          {AccountData.map((item, index) => (
            <li key={index} className="active-item">
              <Link to={RouteList.Pages.Other.UserDashboard}>{item}</Link>
              {item === "Searches" && <Label>New</Label>}
            </li>
          ))}
          <li className="active-item">
            <Link to={RouteList.Pages.Other.Login1} className="btn-solid">
              {SignOut}
            </Link>
          </li>
        </ul>
      </div>
      {!part?.includes("property") && <LanguageSection />}
    </div>
  );
};

export default AccountSection;
