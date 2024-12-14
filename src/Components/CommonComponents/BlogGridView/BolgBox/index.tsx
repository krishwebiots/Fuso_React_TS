import { FC, useState } from "react";
import Masonry from "react-masonry-css";
import { Gallery } from "react-photoswipe-gallery";
import { Button } from "reactstrap";
import { LoadMore, NoMoreBlogAvailable } from "../../../../Constants/Constants";
import { BlogData } from "../../../../Data/Pages/Blog";
import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { setCardToShow } from "../../../../ReduxToolkit/Reducers/LayoutReducers";
import { BlogGridViewType } from "../../../../Types/BlogType";
import PaginationDynamic from "../../Pagination";
import BlogGridBox from "./BlogGridBox";
import BlogTitleBox from "./BlogTitleBox";
import InfiniteScroll from "react-infinite-scroll-component";

const BlogBox: FC<BlogGridViewType> = ({ gridSize, type }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { cardToShow } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();

  const fetchMoreData = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const BreakpointColumnsObj = { default: 3, 1199: 3, 700: 2, 500: 1 };
  const totalPages = Math.ceil(BlogData?.length / cardToShow);
  const showBlog = type === "infinite" ? BlogData?.slice(0, cardToShow * currentPage) : BlogData?.slice(cardToShow * currentPage - cardToShow, cardToShow * currentPage);
  const ColBoxClass = gridSize === 1 ? "col-12" : gridSize === 2 ? "col-6" : gridSize === 3 ? "col-6 col-xl-4" : gridSize === 4 ? "col-6 col-xl-3" : type === "title_box" ? "col-md-6 col-12" : "";
  const InfiniteScrollClass = { dataLength: showBlog.length, next: fetchMoreData, hasMore: currentPage < totalPages, className: "row", loader: <h4>Loading...</h4> };

  return (
    <div className={type !== "masonry" ? "g-sm-4 g-3 ratio3_2 row" : ""}>
      {type === "masonry" ? (
        <Gallery>
          <Masonry breakpointCols={BreakpointColumnsObj} className="row grid g-3 g-xl-4" columnClassName={`grid-item ${ColBoxClass} w-sm-100`}>
            {showBlog.map((data, index) => (
              <BlogGridBox data={data} type={type} index={index} key={index} />
            ))}
          </Masonry>
        </Gallery>
      ) : type === "infinite" ? (
        <InfiniteScroll {...InfiniteScrollClass}>
          {showBlog.map((data, index) => (
            <div className={ColBoxClass} key={index}>
              <BlogGridBox data={data} type={type} index={index} />
            </div>
          ))}
        </InfiniteScroll>
      ) : (
        showBlog.map((data, index) => (
          <div className={`w-sm-100 ${ColBoxClass} ${type === "layout_1" ? (index === 0 ? "col-xxl-3 col-lg-4 col-6 order-lg-0 order-1" : index === 1 ? "col-xxl-9 col-lg-8" : "col-xxl-3 col-lg-4 col-6") : ""}`} key={index}>
            {type === "title_box" ? <BlogTitleBox data={data} /> : <BlogGridBox data={data} type={type} index={index} />}
          </div>
        ))
      )}
      {type === "load_more" ? (
        currentPage < totalPages ? (
          <Button className="btn-solid load-more" onClick={() => dispatch(setCardToShow(cardToShow + 3))}>
            {LoadMore}
          </Button>
        ) : (
          <p id="no-more-products" style={{ display: "block" }}>
            {NoMoreBlogAvailable}
          </p>
        )
      ) : (
        type !== "infinite" && <PaginationDynamic totalPages1={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} type={type} />
      )}
    </div>
  );
};

export default BlogBox;
