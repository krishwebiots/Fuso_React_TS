import { Clock, Location } from "iconsax-react";
import { Link } from "react-router-dom";
import { ApplyNow, Href } from "../../../Constants/Constants";
import { RouteList } from "../../../Routers/RouteList";
import { JobCardType } from "../../../Types/ProductType";
import { dynamicImage, dynamicNumber, dynamicSvg, Image } from "../../../Utils";
import { Label } from "reactstrap";
import { FC } from "react";

const JobProductBox1: FC<JobCardType> = ({ jobData }) => {
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
        <Label>
          <Image src={dynamicSvg("job/job-box/dollar-circle.svg")} alt="dollar-circle" className="img-fluid" />
          {jobData.salary}
        </Label>
        <Label>
          <Image src={dynamicSvg("job/job-box/briefcase.svg")} alt="briefcase" className="img-fluid" />
          {jobData.jobType?.slice(0, 1).map((job) => job)}
        </Label>
      </div>
      <p>{jobData.description}</p>
      <ul className="post-time">
        <li>
          <Location className="iconsax" />
          <span>{jobData.location}</span>
        </li>
        <li>
          <Clock className="iconsax" />
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

export default JobProductBox1;
