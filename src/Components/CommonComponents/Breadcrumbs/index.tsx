import { FC } from "react";
import { BreadcrumbsType } from "../../../Types/CommonComponentsType";
import { Link } from "react-router-dom";

const Breadcrumbs: FC<BreadcrumbsType> = ({ title, subTitle, url }) => {
  return (
    <div className="breadcrumbs-section without-search-breadcrumbs">
      <div className="container">
        <div className="breadcrumbs-main">
          <h2>{title}</h2>
          <ul className="breadcrumbs-list">
            <li>
              <Link to={url}>Home</Link>
            </li>
            <li>{subTitle}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
