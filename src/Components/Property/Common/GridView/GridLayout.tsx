import { FC, useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Button, Col, Row } from "reactstrap";
import { Swiper as SwiperType } from "swiper";
import { LoadMore } from "../../../../Constants/Constants";
import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { setCardToShow, setTotalProduct } from "../../../../ReduxToolkit/Reducers/SidebarReducers";
import { GridLayoutType } from "../../../../Types/ProductType";
import PropertyProductBox1 from "../../../CommonComponents/ProductBox/PropertyProductBox1";
import PaginationDynamic from "../../../CommonComponents/Pagination";
import UseFilterProperty from "./UseFilterProperty";
import NotFound from "../../../CommonComponents/NotFound";
import CarProductBox1 from "../../../CommonComponents/ProductBox/CarProductBox1";

const GridLayout: FC<GridLayoutType> = ({ value, type, gridSize, gridType, view, scrollType, map }) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { cardToShow } = useAppSelector((state) => state.sidebar);
  const dispatch = useAppDispatch();

  const Product = type === "property" ? UseFilterProperty({ value }) : [];
  const totalPages = Math.ceil(Product?.length / cardToShow);
  const showProduct = scrollType === "infinite" ? Product.slice(0, cardToShow * currentPage) : Product?.slice(cardToShow * currentPage - cardToShow, cardToShow * currentPage);

  useEffect(() => {
    if (swiperRef.current) swiperRef.current.init();
  }, []);
  useEffect(() => {
    dispatch(setTotalProduct(Product.length || 0));
  }, [Product.length, dispatch]);

  const fetchMoreData = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className={`${map ? "col-xl-6" : ""} ${scrollType === "load_more" ? "featured-wrapper" : ""}`}>
      <Row className={`gy-4 ${gridType === "list-view" || "image" ? "ratio3_2" : view === "multiple" ? "ratio_65" : "ratio_landscape"}`}>
        {type === "property" && scrollType === "infinite" ? (
          <InfiniteScroll dataLength={showProduct.length} next={fetchMoreData} hasMore={currentPage < totalPages} className="row" loader={<h4>Loading...</h4>}>
            {showProduct.map((data, index) => (
              <Col className={gridSize === 3 ? "col-lg-4 col-sm-6" : gridSize === 4 ? "col-xxl-3 col-lg-4" : gridSize === 1 ? "col-xl-12" : "col-sm-6"} key={data.id || index}>
                <PropertyProductBox1 data={data} view={view} />
              </Col>
            ))}
          </InfiniteScroll>
        ) : (
          showProduct.map((data, index) => (
            <Col className={gridSize === 3 ? "col-lg-4 col-sm-6" : gridSize === 4 ? "col-xxl-3 col-lg-4" : gridSize === 1 ? "col-xl-12" : "col-sm-6"} key={data.id || index}>
              <PropertyProductBox1 data={data} view={view} />
            </Col>
          ))
        )}

        {type === "car" &&
          showProduct.map((data, index) => (
            <Col className={gridSize === 3 ? "col-lg-4 col-sm-6" : gridSize === 4 ? "col-xxl-3 col-lg-4" : gridSize === 1 ? "col-xl-12" : "col-sm-6"} key={data.id || index}>
              <CarProductBox1 data={data} view={view} />
            </Col>
          ))}
      </Row>

      {showProduct.length === 0 && <NotFound word="No items found in Product" />}

      {scrollType === "load_more" ? (
        showProduct.length >= cardToShow ? (
          <Button className="btn-solid load-more" onClick={() => dispatch(setCardToShow(cardToShow + 3))}>
            {LoadMore}
          </Button>
        ) : (
          <p id="no-more-products" style={{ display: "block" }}>
            No more products available.
          </p>
        )
      ) : (
        scrollType !== "infinite" && <PaginationDynamic totalPages1={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
};

export default GridLayout;
