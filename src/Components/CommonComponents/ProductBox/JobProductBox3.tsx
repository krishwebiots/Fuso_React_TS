import { Clock, Location } from "iconsax-react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Label } from "reactstrap";
import { ApplyNow, FullTime, PartTime } from "../../../Constants/Constants";
import { RouteList } from "../../../Routers/RouteList";
import { ProductBoxType } from "../../../Types/ProductType";
import { dynamicImage, dynamicNumber, dynamicSvg, Image } from "../../../Utils";

const JobProductBox3: FC<ProductBoxType> = ({ data }) => {
  return (
    <div className="job-box dark-job-box">
      <span className="border-bg" />
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
        <div className="post-time">
          <Clock className="iconsax" />
          <span>{data.time}</span>
        </div>
      </div>
      <p>{data.description}</p>
      <div className="btn-flex">
        <ul className="round-photo">
          {dynamicNumber(4).map((photo, idx) => (
            <li key={idx}>
              <Image src={dynamicImage(`job/job-box/${photo}.jpg`)} alt={`job-${data.id}-${idx}`} className="img-fluid" />
            </li>
          ))}
        </ul>
        <div className="post-time">
          <Location className="iconsax" />
          <span>{data.location}</span>
        </div>
      </div>
      <div className="job-tag">
        <Label>{PartTime}</Label>
        <Label>{FullTime}</Label>
        <Link to={RouteList.Pages.Other.ContactUs1} className="border-pills">
          {ApplyNow}
        </Link>
      </div>
    </div>
  );
};

export default JobProductBox3;
