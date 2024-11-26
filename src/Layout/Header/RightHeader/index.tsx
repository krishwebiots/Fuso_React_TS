import { FC } from "react";
import { Link } from "react-router-dom";
import { PostProperty } from "../../../Constants/Constants";
import { RouteList } from "../../../Routers/RouteList";
import { HeaderType } from "../../../Types/LayoutType";
import AccountSection from "./AccountSection";
import JobApplyButton from "./JobApplyButton";

const RightHeader: FC<HeaderType> = ({ part, isJobOrProperty }) => {
  return (
    <div className="right-side-header">
      <JobApplyButton part={part} />
      {part?.includes("property") && (
        <Link to={RouteList.Pages.Other.UserDashboard} className="btn-solid">
          {PostProperty}
        </Link>
      )}
      {!isJobOrProperty && <AccountSection part={part} />}
    </div>
  );
};

export default RightHeader;
