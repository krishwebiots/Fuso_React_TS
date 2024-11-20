import { Clock, Location } from "iconsax-react";
import { Link } from "react-router-dom";
import { Label } from "reactstrap";
import { ViewDetails } from "../../../Constants/Constants";
import { RouteList } from "../../../Routers/RouteList";
import { JobCardType } from "../../../Types/ProductType";
import { dynamicSvg, Image } from "../../../Utils";
import { FC } from "react";

const JobProductBox4: FC<JobCardType> = ({ jobData }) => {
  return (
    <div className="job-box demo-job-box3">
      <div className="job-title-flex">
        <div className="job-title">
          <div className="job-icon">
            {jobData.image.map((imgSrc, idx) => (
              <Image src={dynamicSvg(imgSrc)} alt={`job-${idx}`} className="img-fluid" key={idx} />
            ))}
          </div>
          <Link to={RouteList.Job.Detail.JobDetail1} className="job-detail">
            <span>{jobData.company}</span>
            <h5>{jobData.title}</h5>
          </Link>
        </div>
        <div className="post-time">
          <Clock className="iconsax" />
          <span>{jobData.time}</span>
        </div>
      </div>
      <p>{jobData.description}</p>
      <div className="job-tag">
        <Label>{jobData.jobType?.slice(0, 1)}</Label>
        <Label>{jobData.salary}</Label>
      </div>
      <div className="location-flex">
        <div className="post-time">
          <Location className="iconsax" />
          <span>{jobData.location}</span>
        </div>
        <Link to={RouteList.Job.Detail.JobDetail1} className="text-btn">
          {ViewDetails}
        </Link>
      </div>
    </div>
  );
};

export default JobProductBox4;
