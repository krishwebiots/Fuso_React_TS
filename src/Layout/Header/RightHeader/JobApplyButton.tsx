import { ExportCurve } from "iconsax-react";
import { FC, Fragment } from "react";
import { Link } from "react-router-dom";
import { ApplyNow, Login, Signin, UploadResume } from "../../../Constants/Constants";
import { RouteList } from "../../../Routers/RouteList";
import { RightHeaderType } from "../../../Types/LayoutType";

const JobApplyButton: FC<RightHeaderType> = ({ part }) => {
  const isLogin = ["job-2", "job-3"].some((item) => part?.includes(item));

  return (
    <Fragment>
      {isLogin && (
        <Fragment>
          <Link to={RouteList.Pages.Other.Login1} className="white-text-btn">
            {part?.includes("job-2") ? Login : Signin}
          </Link>
          <Link to={RouteList.Pages.Other.ContactUs1} className={part?.includes("job-2") ? "btn-pills pills-sm" : "btn-solid"}>
            {part?.includes("job-2") ? (
              ApplyNow
            ) : (
              <Fragment>
                {UploadResume}
                <ExportCurve className="iconsax"/>
              </Fragment>
            )}
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

export default JobApplyButton;
