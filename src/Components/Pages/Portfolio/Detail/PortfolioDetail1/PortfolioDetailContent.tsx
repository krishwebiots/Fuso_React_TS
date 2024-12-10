import { FC } from "react";
import { Col, Row } from "reactstrap";
import { PortfolioDetailContentType } from "../../../../../Types/PortfolioType";
import { dynamicImage } from "../../../../../Utils";
import RatioImage from "../../../../../Utils/RatioImage";

const PortfolioDetailContent: FC<PortfolioDetailContentType> = ({ title, data, image, rightSide }) => {
  return (
    <Row className="ratio3_2">
      <Col md="7" className={`${!rightSide ? "order-lg-0" : ""} order-1`}>
        <div className="portfolio-detail-content">
          <h2>{title}</h2>
          <ul className="portfolio-listing">
            {data?.map((item, index) => (
              <li key={index}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </Col>
      <Col md="5">
        <div className="portfolio-image">
          <RatioImage src={dynamicImage(`portfolio/detail-images/${image}.jpg`)} alt="pd-3" className="img-fluid bg-img" />
        </div>
      </Col>
    </Row>
  );
};

export default PortfolioDetailContent;
