import { Link } from "react-router-dom";
import { ViewAll } from "../../../Constants/Constants";
import { RouteList } from "../../../Routers/RouteList";
import { CommonHeaderType } from "../../../Types/CommonComponentsType";

const CommonHeader: React.FC<CommonHeaderType> = ({ title, content, animation, headClass, titleClass, view, subClass }) => {
  return (
    <div className={headClass}>
      <div className={subClass ? subClass : "title-flex"}>
        {animation && (
          <div className="title-animation-left">
            <span />
            <span />
          </div>
        )}
        <h2 className={titleClass}>{title}</h2>
        {animation && (
          <div className="title-animation-right">
            <span />
            <span />
          </div>
        )}
        {view && <Link to={RouteList.Pages.Other.Testimonial}>{ViewAll}</Link>}
      </div>
      <p>{content}</p>
    </div>
  );
};

export default CommonHeader;
