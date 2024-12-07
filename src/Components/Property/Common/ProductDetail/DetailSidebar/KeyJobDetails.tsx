import { Link } from "react-router-dom";
import { ApplyNow, KeyJobDetailsTitle } from "../../../../../Constants/Constants";
import { KeyJobDetailsData } from "../../../../../Data/Job";
import { RouteList } from "../../../../../Routers/RouteList";
import { dynamicSvg, Image } from "../../../../../Utils";

const KeyJobDetails = () => {
  return (
    <div>
      <h6>{KeyJobDetailsTitle}</h6>
      <ul className="key-info">
        {KeyJobDetailsData.map((item, index) => (
          <li key={index}>
            <Image src={dynamicSvg(`job/job-detail/${item.image}.svg`)} alt="jd-11" />
            <span>{item.title}:</span>
            {item.text}
          </li>
        ))}
      </ul>
      <div className="apply-btn">
        <Link to={RouteList.Pages.Other.ContactUs1} className="btn-solid">
          {ApplyNow}
        </Link>
      </div>
      <h6 className="mb-2">Don’t see a fit at this time?</h6>
      <p>Be at ease. Become a member of our Talent Network to receive updates on the newest positions.</p>
      <Link to={RouteList.Pages.Other.ContactUs1} className="arrow-btn">
        Join Talent Network <i className="ri-arrow-right-up-line" />
      </Link>
    </div>
  );
};

export default KeyJobDetails;
