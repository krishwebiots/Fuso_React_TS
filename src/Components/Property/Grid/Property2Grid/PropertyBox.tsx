import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Label } from "reactstrap";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ShowMore } from "../../../../Constants/Constants";
import { ProductSwiperSetting } from "../../../../Data/Demo/CarDemo1";
import { RouteList } from "../../../../Routers/RouteList";
import { ProductCardType } from "../../../../Types/ProductType";
import { dynamicImage } from "../../../../Utils";
import RatioImage from "../../../../Utils/RatioImage";
import SvgIcon from "../../../../Utils/SvgIcon";

const PropertyBox: React.FC<ProductCardType> = ({ data }) => {
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
              <SwiperSlide key={index} className="bg-size">
                <RatioImage src={dynamicImage(testimonial)} alt="featured-img" className="img-fluid bg-img" />
              </SwiperSlide>
            ))}
            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />
          </Swiper>
        </Link>
        {data.label && <Label className={data.label.class ? data.label.class : "save-btn"}>{data.label.text}</Label>}
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
            {ShowMore}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyBox;
