import { Clock, Location } from "iconsax-react";
import { Link } from "react-router-dom";
import { ApplyNow, Href } from "../../../Constants/Constants";
import { RouteList } from "../../../Routers/RouteList";
import { ProductBoxType } from "../../../Types/ProductType";
import { dynamicImage, dynamicNumber, dynamicSvg, Image } from "../../../Utils";
import { Label } from "reactstrap";
import { FC } from "react";

const JobProductBox1: FC<ProductBoxType> = ({ data }) => {
  return (
    <div className="job-box">
      <div className="job-title-flex">
        <div className="job-title">
          <div className="job-icon">
            {data.image.map((imgSrc, idx) => (
              <Image src={dynamicSvg(imgSrc)} alt={`job-${idx}`} className="img-fluid" key={idx} />
            ))}
          </div>
          <Link to={RouteList.Job.Detail.JobDetail1} className="job-detail">
            <span>{data.company}</span>
            <h5>{data.title}</h5>
          </Link>
        </div>
        <Link to={Href} className="save-btn">
          <i className="ri-bookmark-line" />
        </Link>
      </div>
      <div className="job-tag">
        <Label>
          <Image src={dynamicSvg("job/job-box/dollar-circle.svg")} alt="dollar-circle" className="img-fluid" />
          {data.salary}
        </Label>
        <Label>
          <Image src={dynamicSvg("job/job-box/briefcase.svg")} alt="briefcase" className="img-fluid" />
          {data.jobType?.slice(0, 1).map((job) => job)}
        </Label>
      </div>
      <p>{data.description}</p>
      <ul className="post-time">
        <li>
          <Location className="iconsax" />
          <span>{data.location}</span>
        </li>
        <li>
          <Clock className="iconsax" />
          <span>{data.time}</span>
        </li>
      </ul>
      <div className="btn-flex">
        <ul className="round-photo">
          {dynamicNumber(4).map((photo, idx) => (
            <li key={idx}>
              <Image src={dynamicImage(`job/job-box/${photo}.jpg`)} alt={`job-${data.id}-${idx}`} className="img-fluid" />
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
