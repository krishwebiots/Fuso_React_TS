import { FC, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { Href } from "../../../Constants/Constants";
import { PortfolioData } from "../../../Data/Pages/Portfolio";
import { dynamicImage } from "../../../Utils";
import RatioImage from "../../../Utils/RatioImage";
import PaginationDynamic from "../Pagination";
import { useAppSelector } from "../../../ReduxToolkit/Hooks";

const PortfolioBox: FC<{ activeTab?: string }> = ({ activeTab }) => {
  const { cardToShow } = useAppSelector((state) => state.sidebar);
  const [currentPage, setCurrentPage] = useState(1);

  const Portfolio = PortfolioData.filter((item) => item.type === activeTab || "all" === activeTab);
  const totalPages = Math.ceil(Portfolio?.length / cardToShow);
  const showPortfolio = Portfolio?.slice(cardToShow * currentPage - cardToShow, cardToShow * currentPage);

  return (
    <Fragment>
      <div className="m-p-g">
        <Row className="grid m-p-g__thumbs ratio3_2 row-grid row-2-grid g-3 g-xl-4">
          {showPortfolio.map((item, index) => (
            <Col sm="6" className="grid-item" key={index}>
              <div className="blog-box blog-grid">
                <Link to={Href} className="img-box m-p-g__thumbs-img">
                  <RatioImage src={dynamicImage(item.image)} alt="portfolio" className="bg-img img-fluid" />
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <PaginationDynamic totalPages1={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </Fragment>
  );
};

export default PortfolioBox;
