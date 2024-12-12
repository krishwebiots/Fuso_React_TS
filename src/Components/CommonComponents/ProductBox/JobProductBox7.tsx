import { FC } from "react";
import { ProductBoxType } from "../../../Types/ProductType";
import { Link, useLocation } from "react-router-dom";
import { RouteList } from "../../../Routers/RouteList";
import { ApplyNow, Href, SymbolRegex } from "../../../Constants/Constants";
import { dynamicSvg, Image } from "../../../Utils";
import { Clock, Location } from "iconsax-react";
import { Rating } from "react-simple-star-rating";
import { toast } from "react-toastify";
import { Label } from "reactstrap";

const JobProductBox7: FC<ProductBoxType> = ({ data }) => {
  const { pathname } = useLocation();
  const firstPart = pathname.split("/").map((item) => item.replace(SymbolRegex, " "));

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
            <span>{data.company}</span>
            <h5>{data.title}</h5>
          </Link>
        </div>
        <a href={Href} className="save-btn" onClick={() => handleWishlist()}>
          <i className="ri-bookmark-line" />
        </a>
      </div>
      <div className="job-tag-flex">
        <div className="job-tag">
          <Label>
            <Image src={dynamicSvg("job/job-box/dollar-circle.svg")} alt="dollar-circle" className="img-fluid" />
            {data.salary}K USD
          </Label>
          <Label>
            <Image src={dynamicSvg("job/job-box/briefcase.svg")} alt="briefcase" className="img-fluid" />
            {data.jobType?.slice(0, 1).map((job) => job.replace("_", " "))}
          </Label>
          {(firstPart[2] === "listing" || firstPart[3] === "job-ad") && (
            <Label>
              <Image src={dynamicSvg("job/job-box/eye-line.svg")} alt="eye-line" className="img-fluid" />
              25 People View
            </Label>
          )}
        </div>
        <ul className="rating">
          <li>
            <Rating initialValue={data.rating} size={20} />
          </li>
        </ul>
      </div>
      <p>{data.moreDescription}</p>
      <ul className="skill-list">
        {data.skills?.map((skill, idx) => (
          <li key={idx}>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
      <div className="post-time">
        <div className="post-flex">
          <div className="post-item">
            <Location className="iconsax" />
            <span>{data.location}</span>
          </div>
          <div className="post-item">
            <Clock className="iconsax" />
            <span>{data.time}</span>
          </div>
        </div>
        <Link to={RouteList.Pages.Other.ContactUs1} className="btn-solid">
          {ApplyNow} <i className="ri-arrow-right-up-line" />
        </Link>
      </div>
    </div>
  );
};

export default JobProductBox7;
