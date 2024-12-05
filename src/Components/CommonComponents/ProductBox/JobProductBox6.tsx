import { FC } from "react";
import { ProductBoxType } from "../../../Types/ProductType";
import { Link } from "react-router-dom";
import { RouteList } from "../../../Routers/RouteList";
import { Href } from "../../../Constants/Constants";
import { dynamicSvg, Image } from "../../../Utils";
import { Location } from "iconsax-react";

const JobProductBox6: FC<ProductBoxType> = ({ data }) => {
  return (
    <div className="job-box job-box-style-2">
      <div className="job-title-flex align-items-center">
        <Link to={RouteList.Job.Detail.JobDetail1} className="job-detail">
          <h5>{data.title}</h5>
        </Link>
        <a href={Href} className="save-btn">
          <i className="ri-bookmark-line" />
        </a>
      </div>
      <h5 className="price-style-2">${data.salary}K USD</h5>
      <div className="job-tag job-tag-style-2">
        <label>{data.jobType?.slice(0, 1).map((job) => job.replace("_", " "))}</label>
        <label>Mid Level</label>
      </div>
      <div className="post-style-2">
        <span>{data.time}</span>
      </div>
      <div className="job-title">
        {data.image.map((imgSrc, idx) => (
          <Image src={dynamicSvg(imgSrc)} alt={`job-${idx}`} className="img-fluid" key={idx} />
        ))}
        <Link to={RouteList.Job.Detail.JobDetail1} className="job-detail">
          <span>{data.company}</span>
          <div className="bottom-location">
            <Location className="iconsax" />
            <span className="mb-0">{data.location}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default JobProductBox6;
