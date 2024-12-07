import { useState } from "react";
import { Col, Row } from "reactstrap";
import { BlogData } from "../../../../Data/Pages/Blog";
import { useAppSelector } from "../../../../ReduxToolkit/Hooks";
import PaginationDynamic from "../../Pagination";
import BlogGridBox from "./BlogGridBox";

const BlogBox = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { cardToShow } = useAppSelector((state) => state.sidebar);

  const totalPages = Math.ceil(BlogData?.length / cardToShow);
  const showProduct = BlogData?.slice(cardToShow * currentPage - cardToShow, cardToShow * currentPage);

  return (
    <Row className="g-sm-4 g-3 ratio3_2">
      {showProduct.map((data, index) => (
        <Col xl="4" xs="6" className="w-sm-100" key={index}>
          <BlogGridBox data={data} />
        </Col>
      ))}
      <PaginationDynamic totalPages1={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </Row>
  );
};

export default BlogBox;
