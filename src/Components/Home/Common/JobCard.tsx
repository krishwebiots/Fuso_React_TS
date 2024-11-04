import { Clock, Location } from "iconsax-react";
import { Link } from "react-router-dom";
import { ApplyNow, Href } from "../../../Constants/Constants";
import { RouteList } from "../../../Routers/RouteList";
import { JobCardType } from "../../../Types/ProductType";
import { dynamicImage, dynamicNumber, dynamicSvg, Image } from "../../../Utils";

const JobCard: React.FC<JobCardType> = ({ jobData }) => {
  return (
    <div className="job-box">
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
        <Link to={Href} className="save-btn">
          <i className="ri-bookmark-line" />
        </Link>
      </div>
      <div className="job-tag">
        <label>
          <Image src={dynamicSvg("job/job-box/dollar-circle.svg")} alt="dollar-circle" className="img-fluid" />
          {jobData.salary}
        </label>
        <label>
          <Image src={dynamicSvg("job/job-box/briefcase.svg")} alt="briefcase" className="img-fluid" />
          {jobData.jobType}
        </label>
      </div>
      <p>{jobData.description}</p>
      <ul className="post-time">
        <li>
          <Location />
          <span>{jobData.location}</span>
        </li>
        <li>
          <Clock />
          <span>{jobData.time}</span>
        </li>
      </ul>
      <div className="btn-flex">
        <ul className="round-photo">
          {dynamicNumber(4).map((photo, idx) => (
            <li key={idx}>
              <Image src={dynamicImage(`job/job-box/${photo}.jpg`)} alt={`job-${jobData.id}-${idx}`} className="img-fluid" />
            </li>
          ))}
        </ul>
        <Link to={RouteList.Pages.Other.ContactUs1} className="arrow-btn">
          {ApplyNow} <i className="ri-arrow-right-up-line" />
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
