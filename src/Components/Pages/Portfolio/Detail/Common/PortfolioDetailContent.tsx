import { FC } from "react";
import { Col, Row } from "reactstrap";
import { PortfolioDetailContentType } from "../../../../../Types/PortfolioType";
import { dynamicImage } from "../../../../../Utils";
import RatioImage from "../../../../../Utils/RatioImage";

const PortfolioDetailContent: FC<PortfolioDetailContentType> = ({ title, data, image, rightSide, dark }) => {
  return (
    <Row className="ratio3_2">
      <Col xs="12" className={`order-1 ${dark ? `col-md-7 ${!rightSide ? "order-md-0" : ""}` : `col-lg-7 ${!rightSide ? "order-lg-0" : ""}`}`}>
        <div className={dark ? "portfolio-content-box text-start" : "portfolio-detail-content"}>
          <h2>{title}</h2>
          {dark ? (
            <p>{data}</p>
          ) : (
            <ul className="portfolio-listing">
              {data?.map((item, index) => (
                <li key={index}>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Col>
      <Col xs="12" className={dark ? "col-md-5" : "col-lg-5"}>
        <div className="portfolio-image">
          <RatioImage src={dynamicImage(`portfolio/detail-images/${image}.jpg`)} alt="pd-3" className="img-fluid bg-img" />
        </div>
      </Col>
    </Row>
  );
};

export default PortfolioDetailContent;
