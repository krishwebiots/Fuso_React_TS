import { Link, useLocation } from "react-router-dom";
import { Label } from "reactstrap";
import { ApplyNow, Href, SymbolRegex } from "../../../Constants/Constants";
import { RouteList } from "../../../Routers/RouteList";
import { ProductBoxType } from "../../../Types/ProductType";
import { dynamicSvg, Image } from "../../../Utils";
import SvgIcon from "../../../Utils/SvgIcon";
import { FC } from "react";

const JobProductBox2: FC<ProductBoxType> = ({ data }) => {
  const { pathname } = useLocation();
  const firstPart = pathname.split("/").map((item) => item.replace(SymbolRegex, " "));
  return (
    <div className="hire-box">
      <div className={`save-flex ${firstPart[3] === "job-grid-type-3" ? "justify-content-end" : ""}`}>
        {firstPart[3] !== "job-grid-type-3" ? <span>{data.time}</span> : ""}
        <Link to={Href} className="save-btn">
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
        <div className="hire-tag">
          {data.jobTags?.map((tag, idx) => (
            <Label key={idx}>{tag}</Label>
          ))}
        </div>
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
