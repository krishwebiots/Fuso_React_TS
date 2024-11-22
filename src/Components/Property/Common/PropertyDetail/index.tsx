import { FC, useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { PropertyDetailType } from "../../../../Types/ProductType";
import DetailBody from "./DetailBody";
import DetailImages from "./DetailImages";
import DetailSidebar from "./DetailSidebar";
import MainDetail from "./MainDetail";
import RelatedProperties from "./RelatedProperties";

const PropertyDetail: FC<PropertyDetailType> = ({ type }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 300) setIsSticky(true);
      else setIsSticky(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="property-detail-section section-b-space">
      <div className="detail-images">
        <Container>
          <DetailImages />
        </Container>
      </div>
      <Container>
        <MainDetail />
        <Row>
          <Col xl="9" lg="8">
            {type === "scrollspy" && (
              <div className={`sticky-header ${isSticky ? "sticky" : ""}`}>
                <div className="container">
                  <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <a className="nav-link" href="#overview">
                        Overview
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#amenities">
                        Amenities
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#description">
                        Property Description
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#floor">
                        Floor Plans
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#video">
                        Video
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#location">
                        Location
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            <DetailBody />
          </Col>
          <DetailSidebar />
        </Row>
        <RelatedProperties />
      </Container>
    </div>
  );
};

export default PropertyDetail;
