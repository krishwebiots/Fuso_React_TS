import { Link } from "react-router-dom";
import { SeeMore } from "../../../../Constants/Constants";
import { useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { dynamicImage } from "../../../../Utils";
import RatioImage from "../../../../Utils/RatioImage";
import SvgIcon from "../../../../Utils/SvgIcon";
import { RouteList } from "../../../../Routers/RouteList";

const Parallax = () => {
  const { productItem } = useAppSelector((state) => state.product);
  const showProduct = productItem.filter((item) => item.type === "property").slice(0, 5);
  return (
    <section className="section-t-md-space section-b-md-space property-parallax property-inner-section">
      {showProduct.map((data, index) => (
        <div className="featured-box featured-parallax" key={index}>
          <div className="parallax-img">
            <RatioImage src={dynamicImage(`property/dark-property/${index + 1}.jpg`)} alt="featured-img" className="bg-img" />
          </div>
          <div className="parallax-content">
            <div className="featured-content">
              <Link to={RouteList.Property.Detail.PropertySidebarLayout}>{data.title}</Link>
              <p>{data.location}</p>
              <ul className="featured-list">
                {data.features.map((item, index) => (
                  <li key={index}>
                    <SvgIcon iconId={`property/sprite/featured.svg#${item.icon}`} />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="featured-price">
              <h5>${data.price}</h5>
              <Link to={RouteList.Property.Detail.PropertySidebarLayout} className="btn-solid">
                {SeeMore}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Parallax;
