import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductSwiperSetting } from "../../../Data/Demo/CarDemo1";
import { RouteList } from "../../../Routers/RouteList";
import { ProductCardType } from "../../../Types/ProductType";
import { dynamicImage, Image } from "../../../Utils";
import SvgIcon from "./SvgIcon";

const PropertyCard: React.FC<ProductCardType> = ({ data }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current) swiperRef.current.init();
  }, []);
  return (
    <div className="featured-box">
      <div className="featured-main-img">
        <Link to={RouteList.Property.Detail.PropertySidebarLayout} className="featured-img">
          <Swiper {...ProductSwiperSetting} onInit={(swiper: SwiperType) => (swiperRef.current = swiper)}>
            {data.image.map((testimonial, index) => (
              <SwiperSlide key={index} className="bg-size" style={{ backgroundImage: `url(${dynamicImage(testimonial)})` }}>
                <Image src={dynamicImage(testimonial)} alt="featured-img" className="img-fluid bg-img" style={{ display: "none" }} />
              </SwiperSlide>
            ))}
            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />
          </Swiper>
        </Link>
        {data.label && <label className={data.label.class ? data.label.class : "save-btn"}>{data.label.text}</label>}
      </div>
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
        <div className="featured-price">
          <h5>{data.price}</h5>
          <Link to={RouteList.Property.Detail.PropertySidebarLayout} className="btn-solid">
            Show More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
