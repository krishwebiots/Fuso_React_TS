import { Clock, Location } from "iconsax-react";
import { Link } from "react-router-dom";
import { Label } from "reactstrap";
import { ApplyNow } from "../../../Constants/Constants";
import { RouteList } from "../../../Routers/RouteList";
import { JobCardType } from "../../../Types/ProductType";
import { dynamicImage, dynamicNumber, dynamicSvg, Image } from "../../../Utils";

const JobProductBox3: React.FC<JobCardType> = ({ jobData }) => {
  return (
    <div className="job-box dark-job-box">
      <span className="border-bg" />
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
          <Clock />
          <span>{jobData.time}</span>
        </div>
      </div>
      <p>{jobData.description}</p>
      <div className="btn-flex">
        <ul className="round-photo">
          {dynamicNumber(4).map((photo, idx) => (
            <li key={idx}>
              <Image src={dynamicImage(`job/job-box/${photo}.jpg`)} alt={`job-${jobData.id}-${idx}`} className="img-fluid" />
            </li>
          ))}
        </ul>
        <div className="post-time">
          <Location />
          <span>{jobData.location}</span>
        </div>
      </div>
      <div className="job-tag">
        <Label>Part Time</Label>
        <Label>Full Time</Label>
        <Link to={RouteList.Pages.Other.ContactUs1} className="border-pills">
          {ApplyNow}
        </Link>
      </div>
    </div>
  );
};

export default JobProductBox3;
