import { FC, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import { useAppDispatch } from "../../../../ReduxToolkit/Hooks";
import { fetchProductApiData } from "../../../../ReduxToolkit/Reducers/ProductReducers";
import { CarDetailType } from "../../../../Types/ProductType";
import DetailImages from "./DetailImages";
import DetailSidebar from "./DetailSidebar";
import RelatedProduct from "./RelatedProduct";
import DetailBody from "./DetailBody";

const CarDetail: FC<CarDetailType> = ({ detailImages, type }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductApiData());
  }, [dispatch]);
  return (
    <div className="section-b-space car-detail-section">
      <Container>
        {detailImages && <DetailImages type="car_detail" />}
        <Row className="custom-row">
          <Col lg="9">
            <div className="car-detail-right">
              <DetailBody type={type} />
            </div>
          </Col>
          <DetailSidebar type={type} />
        </Row>
        <RelatedProduct type={type} />
      </Container>
    </div>
  );
};

export default CarDetail;
