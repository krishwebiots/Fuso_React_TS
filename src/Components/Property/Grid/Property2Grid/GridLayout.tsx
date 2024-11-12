import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Label, Row } from "reactstrap";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ShowMore } from "../../../../Constants/Constants";
import { ProductSwiperSetting } from "../../../../Data/Demo/CarDemo1";
import { RouteList } from "../../../../Routers/RouteList";
import { GridLayoutType, ProductType } from "../../../../Types/ProductType";
import { dynamicImage } from "../../../../Utils";
import RatioImage from "../../../../Utils/RatioImage";
import SvgIcon from "../../../../Utils/SvgIcon";
import UseFilterProperty from "./UseFilterProperty";

const GridLayout: React.FC<GridLayoutType> = ({ value, type, setTotalProduct }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const showProduct = type === "property" ? UseFilterProperty({ value }) : [];

  useEffect(() => {
    if (swiperRef.current) swiperRef.current.init();
  }, []);
  useEffect(() => setTotalProduct(showProduct.length), [setTotalProduct, showProduct.length]);
  return (
    <Row className="gy-4 ratio_landscape">
      {(showProduct as ProductType[])?.map((data, index) => (
        <div className="col-sm-6" key={index}>
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
                <h5>${data.price}</h5>
                <Link to={RouteList.Property.Detail.PropertySidebarLayout} className="btn-solid">
                  {ShowMore}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Row>
  );
};

export default GridLayout;
