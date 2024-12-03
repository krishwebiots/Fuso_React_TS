import { FC, useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Button, Col, Row } from "reactstrap";
import { Swiper as SwiperType } from "swiper";
import { LoadMore } from "../../../../Constants/Constants";
import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { setCardToShow, setTotalProduct } from "../../../../ReduxToolkit/Reducers/SidebarReducers";
import { GridLayoutType } from "../../../../Types/ProductType";
import NotFound from "../../../CommonComponents/NotFound";
import PaginationDynamic from "../../../CommonComponents/Pagination";
import CarProductBox1 from "../../../CommonComponents/ProductBox/CarProductBox1";
import JobProductBox1 from "../../../CommonComponents/ProductBox/JobProductBox1";
import JobProductBox5 from "../../../CommonComponents/ProductBox/JobProductBox5";
import JobProductBox6 from "../../../CommonComponents/ProductBox/JobProductBox6";
import PropertyProductBox1 from "../../../CommonComponents/ProductBox/PropertyProductBox1";
import UseFilterCar from "./UseFilterCar";
import UseFilterJob from "./UseFilterJob";
import UseFilterProperty from "./UseFilterProperty";
import JobProductBox2 from "../../../CommonComponents/ProductBox/JobProductBox2";

const GridLayout: FC<GridLayoutType> = ({ value, type, gridSize, gridType, view, scrollType, map, jobBoxStyle }) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { cardToShow } = useAppSelector((state) => state.sidebar);
  const dispatch = useAppDispatch();

  const Product = type === "property" ? UseFilterProperty({ value }) : type === "car" ? UseFilterCar({ value }) : type === "job" ? UseFilterJob({ value }) : [];
  const totalPages = Math.ceil(Product?.length / cardToShow);
  const showProduct = scrollType === "infinite" ? Product.slice(0, cardToShow * currentPage) : Product?.slice(cardToShow * currentPage - cardToShow, cardToShow * currentPage);
  const RowBoxClass = gridType === "list-view" ? (type === "car" ? "car-list-section ratio_65" : "ratio3_2") : view === "multiple" ? "ratio_65" : "ratio_landscape";
  const ColBoxClass = gridSize === 3 ? "col-lg-4 col-sm-6" : gridSize === 4 ? "col-xxl-3 col-lg-4" : gridSize === 1 ? "col-xl-12" : "col-sm-6";

  const fetchMoreData = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const InfiniteScrollClass = { dataLength: showProduct.length, next: fetchMoreData, hasMore: currentPage < totalPages, className: "row", loader: <h4>Loading...</h4> };

  useEffect(() => {
    if (swiperRef.current) swiperRef.current.init();
  }, []);
  useEffect(() => {
    dispatch(setTotalProduct(Product.length || 0));
  }, [Product.length, dispatch]);

  return (
    <div className={`${map ? "col-xl-6" : ""} ${scrollType === "load_more" ? "featured-wrapper" : ""}`}>
      <Row className={`gy-4 ${RowBoxClass}`}>
        {type === "property" &&
          (scrollType === "infinite" ? (
            <InfiniteScroll {...InfiniteScrollClass}>
              {showProduct.map((data, index) => (
                <Col className={ColBoxClass} key={data.id || index}>
                  <PropertyProductBox1 data={data} view={view} />
                </Col>
              ))}
            </InfiniteScroll>
          ) : (
            showProduct.map((data, index) => (
              <Col className={ColBoxClass} key={data.id || index}>
                <PropertyProductBox1 data={data} view={view} />
              </Col>
            ))
          ))}

        {type === "car" &&
          (scrollType === "infinite" ? (
            <InfiniteScroll {...InfiniteScrollClass}>
              {showProduct.map((data, index) => (
                <Col className={ColBoxClass} key={data.id || index}>
                  <CarProductBox1 data={data} view={view} />
                </Col>
              ))}
            </InfiniteScroll>
          ) : (
            showProduct.map((data, index) => (
              <Col className={ColBoxClass} key={data.id || index}>
                <CarProductBox1 data={data} view={view} />
              </Col>
            ))
          ))}

        {type === "job" &&
          showProduct.map((data, index) => (
            <Col className={ColBoxClass} key={data.id || index}>
              {jobBoxStyle === "progress" ? <JobProductBox5 data={data} /> : jobBoxStyle === "type-2" ? <JobProductBox6 data={data} /> : jobBoxStyle === "type-3" ? <JobProductBox2 data={data} /> : <JobProductBox1 data={data} />}
            </Col>
          ))}
      </Row>

      {showProduct.length !== 0 ? (
        scrollType === "load_more" ? (
          currentPage < totalPages ? (
            <Button className="btn-solid load-more" onClick={() => dispatch(setCardToShow(cardToShow + 3))}>
              {LoadMore}
            </Button>
          ) : (
            <p id="no-more-products" style={{ display: "block" }}>
              No more products available.
            </p>
          )
        ) : (
          scrollType !== "infinite" && <PaginationDynamic totalPages1={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} type={type} />
        )
      ) : (
        <NotFound word="No items found in Product" />
      )}
    </div>
  );
};

export default GridLayout;
