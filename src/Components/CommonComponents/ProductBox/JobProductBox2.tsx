import { Link } from "react-router-dom";
import { Label } from "reactstrap";
import { ApplyNow, Href } from "../../../Constants/Constants";
import { RouteList } from "../../../Routers/RouteList";
import { JobCardType } from "../../../Types/ProductType";
import { dynamicSvg, Image } from "../../../Utils";
import SvgIcon from "../../../Utils/SvgIcon";
import { FC } from "react";

const JobProductBox2: FC<JobCardType> = ({ jobData }) => {
  return (
    <div className="hire-box">
      <div className="save-flex">
        <span>{jobData.time}</span>
        <Link to={Href} className="save-btn">
          <i className="ri-bookmark-line" />
        </Link>
      </div>
      <div className="hire-info">
        <div className="hire-icon">
          {jobData.image.map((imgSrc, idx) => (
            <Image src={dynamicSvg(imgSrc)} alt={`job-icon-${idx}`} className="img-fluid" key={idx} />
          ))}
        </div>
        <Link to={RouteList.Job.Grid.JobLeftSidebar}>
          <h6>{jobData.company}</h6>
        </Link>
        <div className="hire-tag">
          {jobData.jobTags.map((tag, idx) => (
            <Label key={idx}>{tag}</Label>
          ))}
        </div>
        <Link to={RouteList.Job.Grid.JobLeftSidebar}>
          <h5>{jobData.title}</h5>
        </Link>
        <ul className="hire-list">
          <li>{jobData.location}</li>
          <li>
            <SvgIcon iconId="property/sprite/star.svg#star-svg" />
            {jobData.rating}
          </li>
        </ul>
        <div className="applied-flex">
          <span>{jobData.applied}</span>
          <Link to={RouteList.Pages.Other.ContactUs1} className="arrow-btn">
            {ApplyNow} <i className="ri-arrow-right-up-line" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobProductBox2;
