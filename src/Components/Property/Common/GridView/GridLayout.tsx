import React, { Fragment, useEffect, useRef, useState } from "react";
import { Col, Row } from "reactstrap";
import { Swiper as SwiperType } from "swiper";
import { useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { GridLayoutType, ProductType } from "../../../../Types/ProductType";
import PaginationDynamic from "./Pagination";
import PropertyBox from "./ProductBox/PropertyProductBox/PropertyBox";
import UseFilterProperty from "./UseFilterProperty";

const GridLayout: React.FC<GridLayoutType> = ({ value, type, setTotalProduct, gridSize, gridType, view }) => {
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
      <Row className={`gy-4 ${gridType === "list-view" || "image" ? "ratio3_2" : view === "multiple" ? "ratio_65" : "ratio_landscape"}`}>
        {(showProduct as ProductType[])?.map((data, index) => (
          <Col className={gridSize === 3 ? "col-lg-4" : gridSize === 4 ? "col-xxl-3 col-lg-4" : gridSize === 1 ? "col-xl-12" : "col-sm-6"} key={index}>
            <PropertyBox data={data} view={view} />
          </Col>
        ))}
      </Row>
      <PaginationDynamic totalPages1={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </Fragment>
  );
};

export default GridLayout;
