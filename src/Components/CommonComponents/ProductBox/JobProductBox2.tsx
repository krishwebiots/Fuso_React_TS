import { FC } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Label } from "reactstrap";
import { ApplyNow, Href } from "../../../Constants/Constants";
import { RouteList } from "../../../Routers/RouteList";
import { ProductBoxType } from "../../../Types/ProductType";
import { dynamicSvg, Image } from "../../../Utils";
import SvgIcon from "../../../Utils/SvgIcon";
import UsePathName from "../../../Utils/UsePathName";

const JobProductBox2: FC<ProductBoxType> = ({ data }) => {
  const Path = UsePathName();

  const handleWishlist = () => toast.success("Added to Wishlist successfully");

  return (
    <div className="hire-box">
      <div className={`save-flex ${Path.includes("job-grid-type-3") ? "justify-content-end" : ""}`}>
        {Path[2] !== "job-grid-type-3" ? <span>{data.time}</span> : ""}
        <Link to={Href} className="save-btn" onClick={() => handleWishlist()}>
          <i className="ri-bookmark-line" />
        </Link>
      </div>
      <div className="hire-info">
        <div className="hire-icon">
          {data.image.map((imgSrc, idx) => (
            <Image src={dynamicSvg(imgSrc)} alt={`job-icon-${idx}`} className="img-fluid" key={idx} />
          ))}
        </div>
        <Link to={RouteList.Job.Grid.JobLeftSidebar}>
          <h6>{data.company}</h6>
        </Link>
        {Path[2] !== "user-dashboard" ? (
          <div className="hire-tag">
            {data.jobTags?.map((tag, idx) => (
              <Label key={idx}>{tag}</Label>
            ))}
          </div>
        ) : (
          ""
        )}
        <Link to={RouteList.Job.Grid.JobLeftSidebar}>
          <h5>{data.title}</h5>
        </Link>
        <ul className="hire-list">
          <li>{data.location}</li>
          <li>
            <SvgIcon iconId="property/sprite/star.svg#star-svg" />
            {data.rating}
          </li>
        </ul>
        <div className="applied-flex">
          <span>{data.applied}</span>
          <Link to={RouteList.Pages.Other.ContactUs1} className="arrow-btn">
            {ApplyNow} <i className="ri-arrow-right-up-line" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobProductBox2;
