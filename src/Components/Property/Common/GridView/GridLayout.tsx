import React, { Fragment, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Label, Row } from "reactstrap";
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
import PaginationDynamic from "./Pagination";
import { useAppSelector } from "../../../../ReduxToolkit/Hooks";

const GridLayout: React.FC<GridLayoutType> = ({ value, type, setTotalProduct, gridSize }) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { cardToShow } = useAppSelector((state) => state.sidebar);

  const Product = type === "property" ? UseFilterProperty({ value }) : [];
  const totalPages = Math.ceil(Product?.length / cardToShow);
  const showProduct = Product?.slice(cardToShow * currentPage - cardToShow, cardToShow * currentPage);

  useEffect(() => {
    if (swiperRef.current) swiperRef.current.init();
  }, []);
  useEffect(() => setTotalProduct(Product.length), [setTotalProduct, Product.length]);
  return (
    <Fragment>
      <Row className="gy-4 ratio_landscape">
        {(showProduct as ProductType[])?.map((data, index) => (
          <Col sm="6" className={gridSize === 3 ? "col-lg-4" : gridSize === 4 ? "col-xxl-3 col-lg-4" : ""} key={index}>
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
          </Col>
        ))}
      </Row>
      <PaginationDynamic totalPages1={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </Fragment>
  );
};

export default GridLayout;
