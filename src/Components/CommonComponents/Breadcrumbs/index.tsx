import { FC } from "react";
import { BreadcrumbsType } from "../../../Types/CommonComponentsType";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { Home } from "../../../Constants/Constants";

const Breadcrumbs: FC<BreadcrumbsType> = ({ title, subTitle, url, mainClass }) => {
  return (
    <div className={mainClass ? mainClass : "breadcrumbs-section without-search-breadcrumbs"}>
      <Container>
        <div className="breadcrumbs-main">
          <h2>{title}</h2>
          <ul className="breadcrumbs-list">
            <li>
              <Link to={url}>{Home}</Link>
            </li>
            <li>{subTitle || title}</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Breadcrumbs;
