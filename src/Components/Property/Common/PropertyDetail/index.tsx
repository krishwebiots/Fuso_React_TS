import { Container } from "reactstrap";
import DetailImages from "./DetailImages";
import MainDetail from "./MainDetail";

const PropertyDetail = () => {
  return (
    <div className="property-detail-section section-b-space">
      <div className="detail-images">
        <Container>
          <DetailImages />
        </Container>
      </div>
      <Container>
        <MainDetail />
      </Container>
    </div>
  );
};

export default PropertyDetail;
