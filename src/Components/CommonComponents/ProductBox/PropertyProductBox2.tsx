import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Month, ViewProperty } from "../../../Constants/Constants";
import { RouteList } from "../../../Routers/RouteList";
import { ProductBoxType } from "../../../Types/ProductType";
import { dynamicImage } from "../../../Utils";
import RatioImage from "../../../Utils/RatioImage";
import SvgIcon from "../../../Utils/SvgIcon";

const PropertyProductBox2: React.FC<ProductBoxType> = ({ data, label, index }) => {
  return (
    <div className="car2-featured-box property2-featured-box">
      <Link to={RouteList.Property.Detail.PropertySidebarLayout} className="car2-featured-img">
        <Swiper navigation={true} modules={[Navigation]} loop={true} className="property2-featured-slider ratio_60">
          {data.image.map((imgSrc, idx) => (
            <SwiperSlide key={idx} className="bg-size">
              <RatioImage src={dynamicImage(imgSrc)} alt={`featured-img-${idx}`} className="img-fluid bg-img" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="car2-label-flex">
          <span className="bg-white">{label}</span>
          {index === 0 && <span className="text-white">For Rent</span>}
        </div>
      </Link>
      <div className="car2-featured-content">
        <Link to={RouteList.Property.Detail.PropertySidebarLayout}>
          <h4>{data.title}</h4>
        </Link>
        <div className="location-flex">
          <SvgIcon iconId="property/sprite/featured.svg#4" />
          <h6>{data.location}</h6>
        </div>
        <ul className="featured-list">
          {data.features.map((item, index) => (
            <li key={index}>
              <SvgIcon iconId={`property/sprite/featured.svg#${item.icon}`} />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
        <div className="price-flex">
          <h4>
            ${data.price}/<span>{Month}</span>
          </h4>
          <Link to={RouteList.Property.Detail.PropertySidebarLayout} className="btn-solid">
            {ViewProperty}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyProductBox2;
