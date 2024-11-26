import { Clock, Location } from "iconsax-react";
import { Link } from "react-router-dom";
import { Label } from "reactstrap";
import { ViewDetails } from "../../../Constants/Constants";
import { RouteList } from "../../../Routers/RouteList";
import { ProductBoxType } from "../../../Types/ProductType";
import { dynamicSvg, Image } from "../../../Utils";
import { FC } from "react";

const JobProductBox4: FC<ProductBoxType> = ({ data }) => {
  return (
    <div className="job-box demo-job-box3">
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
      <div className="job-tag">
        <Label>{data.jobType?.slice(0, 1)}</Label>
        <Label>{data.salary}</Label>
      </div>
      <div className="location-flex">
        <div className="post-time">
          <Location className="iconsax" />
          <span>{data.location}</span>
        </div>
        <Link to={RouteList.Job.Detail.JobDetail1} className="text-btn">
          {ViewDetails}
        </Link>
      </div>
    </div>
  );
};

export default JobProductBox4;
