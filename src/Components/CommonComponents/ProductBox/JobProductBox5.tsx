import { Clock, Location } from "iconsax-react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Label, Progress } from "reactstrap";
import { ApplyNow, Href } from "../../../Constants/Constants";
import { RouteList } from "../../../Routers/RouteList";
import { ProductBoxType } from "../../../Types/ProductType";
import { dynamicSvg, Image } from "../../../Utils";
import { toast } from "react-toastify";

const JobProductBox5: FC<ProductBoxType> = ({ data }) => {
  const handleWishlist = () => toast.success("Added to Wishlist successfully");

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
            <h5>{data.title}</h5>
            <div className="d-flex align-items-center gap-1 mt-1">
              <Location className="iconsax" />
              <span className="border-0 p-0 mb-0">{data.location}</span>
            </div>
          </Link>
        </div>
        <Link to={Href} className="save-btn" onClick={() => handleWishlist()}>
          <i className="ri-bookmark-line" />
        </Link>
      </div>
      <div className="job-tag">
        <Label>
          <Image src={dynamicSvg("job/job-box/dollar-circle.svg")} alt="dollar-circle" className="img-fluid" />
          {data.salary}K USD
        </Label>
        <Label>
          <Image src={dynamicSvg("job/job-box/briefcase.svg")} alt="briefcase" className="img-fluid" />
          {data.jobType?.slice(0, 1).map((job) => job.replace("_", " "))}
        </Label>
      </div>
      <p>{data.description}</p>
      <h6>
        20 applied of <span>{data.progress} vacancy</span>
      </h6>
      <Progress animated color="warning" striped value={data.progress} />
      <div className="btn-flex">
        <div className="d-flex align-items-center gap-1 mt-1">
          <Clock className="iconsax" />
          <span>{data.time}</span>
        </div>
        <Link to={RouteList.Pages.Other.ContactUs1} className="arrow-btn">
          {ApplyNow} <i className="ri-arrow-right-up-line" />
        </Link>
      </div>
    </div>
  );
};

export default JobProductBox5;
