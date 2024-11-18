import { Link } from "react-router-dom";
import { Label } from "reactstrap";
import { Href, ShowMore } from "../../../Constants/Constants";
import { RouteList } from "../../../Routers/RouteList";
import { ProductBoxType } from "../../../Types/ProductType";
import SvgIcon from "../../../Utils/SvgIcon";
import PropertyBoxSlider from "./Common/PropertyBoxSlider";

const PropertyProductBox1: React.FC<ProductBoxType> = ({ data, view }) => {
  return (
    <div className="featured-box">
      <div className="featured-main-img">
        <Link to={view === "multiple" ? Href : RouteList.Property.Detail.PropertySidebarLayout} className={view === "video" ? "featured-video" : "featured-img"}>
          <PropertyBoxSlider view={view} data={data} />
        </Link>
        {data.label && <Label className="save-btn">{data.label.text}</Label>}
        <a href={Href} className="save-btn">
          <i className="ri-bookmark-line"></i>
        </a>
      </div>
      <div className="featured-content">
        <Link to={RouteList.Property.Detail.PropertySidebarLayout}>{data.title}</Link>
        <p>{data.location}</p>
        <ul className="featured-list">
          {data.features.slice(0, 3).map((item, index) => (
            <li key={index}>
              <SvgIcon iconId={`property/sprite/featured.svg#${item.icon}`} />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
        <div className="featured-price">
          <h5>${data.price}</h5>
          <Link to={RouteList.Property.Detail.PropertySidebarLayout} className="btn-solid">
            {ShowMore}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyProductBox1;
