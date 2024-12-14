import { MyFavoritesTitle } from "../../../../../Constants/Constants";
import { Col, Row } from "reactstrap";
import { useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import { Fragment, useState } from "react";
import PropertyProductBox1 from "../../../../CommonComponents/ProductBox/PropertyProductBox1";
import PaginationDynamic from "../../../../CommonComponents/Pagination";

const MyFavorites = () => {
  const { productItem } = useAppSelector((state) => state.product);
  const [currentPage, setCurrentPage] = useState(1);
  const { cardToShow } = useAppSelector((state) => state.layout);

  const Product = productItem.filter((item) => item.type === "property");
  const totalPages = Math.ceil(Product?.length / cardToShow);
  const showProduct = Product?.slice(cardToShow * currentPage - cardToShow, cardToShow * currentPage);

  return (
    <Fragment>
      <h4 className="dashboard-title">{MyFavoritesTitle}</h4>
      <Row className="gy-4 ratio_landscape">
        {showProduct.map((data, index) => (
          <Col xl="4" sm="6" key={data.id || index}>
            <PropertyProductBox1 data={data} />
          </Col>
        ))}
      </Row>
      <PaginationDynamic totalPages1={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </Fragment>
  );
};

export default MyFavorites;
