import { Link } from "react-router-dom";
import { FeaturedPropertyTitle } from "../../../../Constants/Constants";
import { useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { RouteList } from "../../../../Routers/RouteList";
import { dynamicImage, Image } from "../../../../Utils";
import { FC } from "react";

const FeaturedProperty: FC<{ type?: string }> = ({ type }) => {
  const { productItem } = useAppSelector((state) => state.product);
  const PropertyData = productItem.filter((item) => item.type === (type || "property")).slice(0, 4);
  return (
    <div className="featured-info-box">
      <h4 className={type === "car" ? "car-title" : "detail-page-title"}>{FeaturedPropertyTitle}</h4>
      <ul className="featured-detail-box">
        {PropertyData.map((item, index) => (
          <li key={index}>
            <Link to={type === "car" ? RouteList.Car.Detail.CarClassic : RouteList.Property.Detail.PropertySidebarLayout} className="featured-detail-item">
              <Image src={dynamicImage(item.image[0])} alt="f-1" className="img-fluid" />
              <div className="featured-detail-info">
                <h6>{item.title}</h6>
                <span>
                  ${item.price} <span> \ EMI-₹ 1.36L</span>
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturedProperty;
